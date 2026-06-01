(() => {
  // Evitar declarações duplicadas caso o script seja injetado múltiplas vezes
  if (window.svgExtractorInjected) {
    return;
  }
  window.svgExtractorInjected = true;

  let isActive = false;
  let hoveredElement = null;
  let highlightOverlay = null;
  let hudContainer = null;

  // 1. Ouvir mensagens do Popup de Controle
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getStatus') {
      sendResponse({ active: isActive });
    } else if (request.action === 'toggleInspector') {
      isActive = !isActive;
      if (isActive) {
        enableInspector();
      } else {
        disableInspector();
      }
      sendResponse({ active: isActive });
    }
    return true;
  });

  // 2. Ativar o Modo de Inspeção
  function enableInspector() {
    createHighlightOverlay();
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('click', handleElementClick, true);
    document.addEventListener('keydown', handleKeyDown, true);
    document.body.style.cursor = 'crosshair';
  }

  // 3. Desativar o Modo de Inspeção
  function disableInspector() {
    isActive = false;
    document.removeEventListener('mouseover', handleMouseOver, true);
    document.removeEventListener('click', handleElementClick, true);
    document.removeEventListener('keydown', handleKeyDown, true);
    document.body.style.cursor = 'default';
    
    if (highlightOverlay) {
      highlightOverlay.style.display = 'none';
    }
  }

  // 4. Criar a caixa flutuante de Destaque Neon (Hover Highlight)
  function createHighlightOverlay() {
    if (highlightOverlay) return;
    
    highlightOverlay = document.createElement('div');
    highlightOverlay.id = 'svg-extractor-highlight-overlay';
    Object.assign(highlightOverlay.style, {
      position: 'fixed',
      pointerEvents: 'none',
      zIndex: '100000000',
      border: '2px dashed #00ff66',
      background: 'rgba(0, 255, 102, 0.04)',
      boxShadow: '0 0 12px rgba(0, 255, 102, 0.25)',
      borderRadius: '2px',
      display: 'none',
      transition: 'all 0.1s ease',
      boxSizing: 'border-box'
    });
    
    document.body.appendChild(highlightOverlay);
  }

  // 5. Mover o realce flutuante no mouseover
  function handleMouseOver(e) {
    if (!isActive) return;
    
    // Ignorar nossa própria sobreposição e HUD
    if (e.target.id === 'svg-extractor-highlight-overlay' || (hudContainer && hudContainer.contains(e.target))) {
      return;
    }
    
    hoveredElement = e.target;
    const rect = hoveredElement.getBoundingClientRect();
    
    if (highlightOverlay) {
      highlightOverlay.style.top = `${rect.top}px`;
      highlightOverlay.style.left = `${rect.left}px`;
      highlightOverlay.style.width = `${rect.width}px`;
      highlightOverlay.style.height = `${rect.height}px`;
      highlightOverlay.style.display = 'block';
    }
  }

  // 6. Interceptar Tecla ESC para Cancelar Inspeção
  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      disableInspector();
    }
  }

  // 7. Interceptador de Clique
  function handleElementClick(e) {
    if (!isActive) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    disableInspector();
    
    // Extrair dados do elemento clicado
    const targetElement = hoveredElement || e.target;
    extractAndDisplayHUD(targetElement);
  }

  // 8. Utilitário: Conversor de Cores RGB/RGBA para HEX
  function rgbToHex(rgbStr) {
    if (!rgbStr || rgbStr === 'transparent' || rgbStr === 'rgba(0, 0, 0, 0)') return 'N/A';
    
    const match = rgbStr.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
    if (!match) return rgbStr;
    
    const r = parseInt(match[1]).toString(16).padStart(2, '0');
    const g = parseInt(match[2]).toString(16).padStart(2, '0');
    const b = parseInt(match[3]).toString(16).padStart(2, '0');
    
    if (match[4]) {
      const aVal = parseFloat(match[4]);
      if (aVal < 1) {
        const a = Math.round(aVal * 255).toString(16).padStart(2, '0');
        return `#${r}${g}${b}${a}`.toUpperCase();
      }
    }
    
    return `#${r}${g}${b}`.toUpperCase();
  }

  // 9. Lógica Principal: Extrair Dados do Elemento e Montar o HUD Gamer no Shadow DOM
  function extractAndDisplayHUD(el) {
    // A. Fechar HUD existente se houver
    if (hudContainer) {
      hudContainer.remove();
    }

    // B. Coletar dados de estilo computado
    const computed = window.getComputedStyle(el);
    const colorHex = rgbToHex(computed.color);
    const bgHex = rgbToHex(computed.backgroundColor);
    const borderHex = rgbToHex(computed.borderColor);
    
    const typography = {
      fontFamily: computed.fontFamily.replace(/['"]/g, '').split(',')[0],
      fontSize: computed.fontSize,
      fontWeight: computed.fontWeight,
      lineHeight: computed.lineHeight !== 'normal' ? computed.lineHeight : 'normal'
    };

    // C. Detectar e capturar SVG
    let svgCode = null;
    let svgNode = null;
    
    if (el.tagName.toLowerCase() === 'svg') {
      svgNode = el;
    } else {
      svgNode = el.closest('svg') || el.querySelector('svg');
    }
    
    if (svgNode) {
      // Clona o SVG para não danificar o site original durante a limpeza
      const clone = svgNode.cloneNode(true);
      clone.removeAttribute('class');
      svgCode = clone.outerHTML;
    }

    // D. Detectar e capturar Imagens
    let imageUrl = null;
    if (el.tagName.toLowerCase() === 'img') {
      imageUrl = el.src;
    } else {
      const bgImg = computed.backgroundImage;
      if (bgImg && bgImg !== 'none') {
        const match = bgImg.match(/^url\(['"]?(.+?)['"]?\)$/);
        if (match) {
          imageUrl = match[1];
        }
      }
    }

    // E. Criar o Container Principal do HUD
    hudContainer = document.createElement('div');
    hudContainer.id = 'svg-extractor-hud-root';
    Object.assign(hudContainer.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      width: '380px',
      zIndex: '100000001',
      boxSizing: 'border-box'
    });

    // F. Usar Shadow DOM para proteger o CSS do HUD das regras do site hospedeiro
    const shadow = hudContainer.attachShadow({ mode: 'open' });

    // CSS Gamer / Opera GX HUD
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --accent: #00ff66;
        --accent-hover: #00dd55;
        --bg: rgba(10, 10, 12, 0.94);
        --panel: #111116;
        --border: #1a1a24;
        --text: #e2e2e8;
        --text-muted: #858592;
      }
      
      .hud {
        background: rgba(10, 10, 12, 0.94);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 2px solid #00ff66;
        box-shadow: 0 10px 40px rgba(0, 255, 102, 0.15);
        border-radius: 2px;
        color: #e2e2e8;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        padding: 20px;
        width: 100%;
        box-sizing: border-box;
        animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      @keyframes slideIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        border-bottom: 1px solid #1a1a24;
        padding-bottom: 12px;
      }

      .title {
        font-size: 13px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }

      .title span {
        color: #00ff66;
      }

      .btn-close {
        background: none;
        border: none;
        color: #858592;
        font-size: 18px;
        cursor: pointer;
        transition: color 0.2s;
        line-height: 1;
      }

      .btn-close:hover {
        color: #00ff66;
      }

      .section {
        margin-bottom: 16px;
      }

      .sec-title {
        font-size: 10px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: #858592;
        margin-bottom: 8px;
      }

      .row-buttons {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      .btn-action {
        flex: 1;
        min-width: 100px;
        background: #111116;
        color: #e2e2e8;
        border: 1px solid #1a1a24;
        padding: 8px 12px;
        font-size: 11px;
        font-weight: 700;
        border-radius: 2px;
        cursor: pointer;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
      }

      .btn-action:hover {
        border-color: #00ff66;
        color: #00ff66;
        box-shadow: 0 0 8px rgba(0, 255, 102, 0.08);
      }

      .btn-action:active {
        transform: scale(0.97);
      }

      .btn-action.success {
        background: #00ff66;
        color: #000000;
        border-color: #00ff66;
      }

      .style-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        background: #111116;
        border: 1px solid #1a1a24;
        padding: 12px;
        border-radius: 2px;
      }

      .style-item {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .style-label {
        font-size: 9px;
        font-weight: 600;
        text-transform: uppercase;
        color: #858592;
      }

      .style-val {
        font-size: 11px;
        font-weight: 700;
        color: #e2e2e8;
        cursor: pointer;
        transition: color 0.15s;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      .style-val:hover {
        color: #00ff66;
      }

      .color-preview {
        width: 12px;
        height: 12px;
        border-radius: 2px;
        border: 1px solid #1a1a24;
        display: inline-block;
      }

      .toast {
        position: absolute;
        bottom: 12px;
        left: 20px;
        right: 20px;
        background: #00ff66;
        color: #000000;
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        text-align: center;
        padding: 6px;
        border-radius: 2px;
        box-shadow: 0 0 10px rgba(0, 255, 102, 0.25);
        display: none;
        animation: fadeToast 0.2s ease;
      }

      @keyframes fadeToast {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `;

    // G. Montar o HTML do HUD Gamer
    const hud = document.createElement('div');
    hud.className = 'hud';

    let html = `
      <div class="header">
        <div class="title">HUD <span>Style Extractor</span></div>
        <button id="closeHud" class="btn-close" aria-label="Fechar painel">&times;</button>
      </div>
    `;

    // Bloco SVG (Se detectado)
    if (svgCode) {
      html += `
        <div class="section">
          <div class="sec-title">Vetor SVG</div>
          <div class="row-buttons">
            <button id="copySvg" class="btn-action">Copiar Código</button>
            <button id="downloadSvg" class="btn-action">Baixar .svg</button>
          </div>
        </div>
      `;
    }

    // Bloco de Imagens (Se detectado)
    if (imageUrl) {
      html += `
        <div class="section">
          <div class="sec-title">Recurso de Imagem</div>
          <div class="row-buttons">
            <button id="copyImgUrl" class="btn-action">Copiar Link</button>
            <button id="downloadImg" class="btn-action">Baixar Imagem</button>
          </div>
        </div>
      `;
    }

    // Bloco de Cores Computadas
    html += `
      <div class="section">
        <div class="sec-title">Paleta de Cores (Clique para copiar)</div>
        <div class="style-grid">
          <div class="style-item">
            <span class="style-label">Texto</span>
            <span id="copyColorText" class="style-val">
              <span class="color-preview" style="background-color: ${computed.color};"></span>
              ${colorHex}
            </span>
          </div>
          <div class="style-item">
            <span class="style-label">Fundo</span>
            <span id="copyColorBg" class="style-val">
              <span class="color-preview" style="background-color: ${computed.backgroundColor};"></span>
              ${bgHex}
            </span>
          </div>
          <div class="style-item">
            <span class="style-label">Borda</span>
            <span id="copyColorBorder" class="style-val">
              <span class="color-preview" style="background-color: ${computed.borderColor};"></span>
              ${borderHex}
            </span>
          </div>
        </div>
      </div>
    `;

    // Bloco de Tipografia
    html += `
      <div class="section">
        <div class="sec-title font-title">Tipografia (Clique para copiar)</div>
        <div class="style-grid" id="copyTypography" style="cursor: pointer;">
          <div class="style-item">
            <span class="style-label">Família</span>
            <span class="style-val">${typography.fontFamily}</span>
          </div>
          <div class="style-item">
            <span class="style-label">Tamanho</span>
            <span class="style-val">${typography.fontSize}</span>
          </div>
          <div class="style-item">
            <span class="style-label">Peso</span>
            <span class="style-val">${typography.fontWeight}</span>
          </div>
          <div class="style-item">
            <span class="style-label">Linha</span>
            <span class="style-val">${typography.lineHeight}</span>
          </div>
        </div>
      </div>
    `;

    // Elemento Toast Interno para Confirmação Visual
    html += `<div id="toast" class="toast">✓ Copiado!</div>`;

    hud.innerHTML = html;
    shadow.appendChild(style);
    shadow.appendChild(hud);
    document.body.appendChild(hudContainer);

    // H. Conectar Eventos e Lógicas de Cópia / Download no Shadow DOM
    const shadowRoot = shadow;

    // Toast Feedback
    function showToast(message) {
      const toastEl = shadowRoot.getElementById('toast');
      if (toastEl) {
        toastEl.textContent = message;
        toastEl.style.display = 'block';
        setTimeout(() => {
          toastEl.style.display = 'none';
        }, 1800);
      }
    }

    // Ação: Fechar HUD
    shadowRoot.getElementById('closeHud')?.addEventListener('click', () => {
      hudContainer.remove();
      hudContainer = null;
    });

    // Copiar para a área de transferência
    function copyToClipboard(text, successMsg) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(err => {
        console.error('Erro ao copiar para clipboard:', err);
      });
    }

    // Lógica SVG
    if (svgCode) {
      shadowRoot.getElementById('copySvg')?.addEventListener('click', function() {
        copyToClipboard(svgCode, '✓ SVG Copiado!');
      });

      shadowRoot.getElementById('downloadSvg')?.addEventListener('click', () => {
        const blob = new Blob([svgCode], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `extracted_icon_${Date.now()}.svg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('✓ Download Iniciado!');
      });
    }

    // Lógica Imagem
    if (imageUrl) {
      shadowRoot.getElementById('copyImgUrl')?.addEventListener('click', () => {
        copyToClipboard(imageUrl, '✓ Link da Imagem Copiado!');
      });

      shadowRoot.getElementById('downloadImg')?.addEventListener('click', () => {
        // Disparar download direto do link
        const a = document.createElement('a');
        a.href = imageUrl;
        a.download = `extracted_image_${Date.now()}`;
        a.target = '_blank'; // Prevenir bloqueio de origem cruzada
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showToast('✓ Abrindo Imagem para Salvar!');
      });
    }

    // Lógica Cores
    shadowRoot.getElementById('copyColorText')?.addEventListener('click', () => {
      if (colorHex !== 'N/A') copyToClipboard(colorHex, `✓ Cor Texto: ${colorHex}`);
    });
    shadowRoot.getElementById('copyColorBg')?.addEventListener('click', () => {
      if (bgHex !== 'N/A') copyToClipboard(bgHex, `✓ Cor Fundo: ${bgHex}`);
    });
    shadowRoot.getElementById('copyColorBorder')?.addEventListener('click', () => {
      if (borderHex !== 'N/A') copyToClipboard(borderHex, `✓ Cor Borda: ${borderHex}`);
    });

    // Lógica Tipografia
    shadowRoot.getElementById('copyTypography')?.addEventListener('click', () => {
      const fontSpecs = `font-family: ${typography.fontFamily};\nfont-size: ${typography.fontSize};\nfont-weight: ${typography.fontWeight};\nline-height: ${typography.lineHeight};`;
      copyToClipboard(fontSpecs, '✓ Tipografia Copiada!');
    });
  }
})();
