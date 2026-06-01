document.addEventListener('DOMContentLoaded', async () => {
  const toggleBtn = document.getElementById('toggleBtn');
  const statusBadge = document.getElementById('statusBadge');
  const statusText = document.getElementById('statusText');

  // Obter a aba ativa atual do navegador
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.id) return;

  // Ignorar páginas do sistema do navegador (ex: chrome://, edge://, etc.)
  if (tab.url && (tab.url.startsWith('chrome://') || tab.url.startsWith('opera://') || tab.url.startsWith('about:') || tab.url.startsWith('chrome-extension://'))) {
    toggleBtn.disabled = true;
    toggleBtn.querySelector('span').textContent = 'Indisponível';
    document.querySelector('.help-text').textContent = 'Esta extensão não pode ser usada em páginas internas do sistema do navegador.';
    return;
  }

  // Verificar se o inspetor já está ativo na aba atual
  try {
    const response = await chrome.tabs.sendMessage(tab.id, { action: 'getStatus' });
    if (response && response.active) {
      setUIActive(true);
    }
  } catch (err) {
    // Falha indica que o content script ainda não foi injetado (primeira execução nesta aba)
    setUIActive(false);
  }

  toggleBtn.addEventListener('click', async () => {
    // Garantir a injeção do content.js na aba ativa antes de enviar comando
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      });
    } catch (e) {
      // Ignorar se já injetado anteriormente
      console.log('Injeção do content script resolvida:', e);
    }

    // Enviar mensagem para alternar o status do inspetor na aba
    try {
      const response = await chrome.tabs.sendMessage(tab.id, { action: 'toggleInspector' });
      if (response) {
        setUIActive(response.active);
        // Fechar o popup automaticamente para permitir inspeção imediata na aba
        window.close();
      }
    } catch (err) {
      console.error('Falha ao alternar inspetor:', err);
    }
  });

  function setUIActive(active) {
    if (active) {
      toggleBtn.classList.add('active');
      toggleBtn.querySelector('span').textContent = 'Desativar Inspetor';
      statusBadge.classList.add('active');
      statusText.textContent = 'Ativo';
    } else {
      toggleBtn.classList.remove('active');
      toggleBtn.querySelector('span').textContent = 'Ativar Inspetor';
      statusBadge.classList.remove('active');
      statusText.textContent = 'Inativo';
    }
  }
});
