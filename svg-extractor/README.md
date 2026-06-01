# Opera GX SVG & Style Extractor Extension 🚀

Esta é uma extensão de navegador desenvolvida sob medida para o **Opera GX** (Chromium Manifest V3) que permite extrair códigos SVG, links de imagem, cores e especificações tipográficas completas com apenas **um clique** em cima de qualquer elemento web, exibindo tudo em um HUD estilizado com visual gamer/cyberpunk.

---

## 🛠️ Como Instalar no Opera GX (Modo Desenvolvedor)

Siga estes passos simples para carregar a extensão localmente no seu navegador:

1.  Abra o **Opera GX**.
2.  Na barra de endereços, digite `opera://extensions` (ou clique no menu de Extensões e selecione "Gerenciar extensões...").
3.  No canto superior direito da página de extensões, **ative a chave "Modo do desenvolvedor"** (Developer Mode).
4.  No canto superior esquerdo, clique no botão **"Carregar descompactada"** (Load unpacked).
5.  Navegue no seu sistema e selecione a pasta **`svg-extractor`** (localizada em: `c:\Users\joelm\Desktop\LacreiSaúdeProjetoJuvion\svg-extractor`).
6.  Pronto! A extensão será carregada e o ícone do **SVG Extractor** aparecerá na sua barra de extensões do Opera GX.

---

## 🎮 Como Utilizar a Ferramenta

1.  Clique no ícone da extensão na barra do navegador para abrir o popup.
2.  Clique no botão **"Ativar Inspetor"** (o popup fechará automaticamente).
3.  Agora, passe o mouse sobre os elementos de qualquer site. Você verá uma **borda pontilhada neon verde (`#00FF66`)** destacando o elemento sob o cursor.
4.  **Dê um clique simples** no elemento que deseja inspecionar:
    *   O modo de inspeção será encerrado.
    *   Um **HUD Gamer Translúcido (estilo vidro com blur)** será exibido no canto superior direito da sua tela contendo os dados extraídos do elemento.
5.  No painel HUD, você terá os seguintes controles:
    *   **Vetor SVG (se detectado):** Botão para copiar o código XML bruto do SVG direto para o clipboard, ou baixar o arquivo `.svg` gerado na hora!
    *   **Recurso de Imagem (se detectado):** Copiar o link absoluto da imagem ou abrir o arquivo em nova aba para salvar.
    *   **Paleta de Cores (Texto, Fundo e Borda):** Cores computadas convertidas automaticamente de RGB para **HEX**. Basta clicar em qualquer código HEX no grid para copiá-lo imediatamente para a área de transferência!
    *   **Tipografia:** Mostra o tamanho da fonte computado, a família principal de fontes, o peso (weight) e o line-height. Clique no grid de tipografia para copiar o bloco CSS de especificações completas formatadas!
6.  Para fechar o painel HUD, basta clicar no botão de fechar **(×)** no canto superior direito do painel.
7.  Para cancelar o modo de inspeção a qualquer momento antes do clique, basta apertar a tecla **`ESC`** no seu teclado.
