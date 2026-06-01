# 💚 Lacrei Saúde - Projeto Juvion

<p align="center">
  <a href="#-sobre-o-projeto">Português</a> • 
  <a href="#-about-the-project">English</a>
</p>

---

## 🇧🇷 Português

### 📝 Sobre o Projeto
Uma plataforma Next.js de alta performance e totalmente responsiva desenvolvida para conectar a comunidade **LGBTQIAPN+** a profissionais de saúde qualificados de forma inclusiva, segura e acolhedora. O projeto passou por uma auditoria completa de performance e design para entregar a melhor experiência de usuário possível.

### 🚀 Resultados no PageSpeed Insights
O projeto foi otimizado sob rígidos padrões de qualidade para obter pontuações excepcionais no Lighthouse.

* 🔗 **Relatório Oficial:** [Análise PageSpeed Insights](https://pagespeed.web.dev/analysis/https-lacrei-sa-de-juvion-vercel-app/dqbn7l6jfz?form_factor=mobile)
* 🌎 **Aplicação em Produção:** [lacrei-sa-de-juvion.vercel.app](https://lacrei-sa-de-juvion.vercel.app/)

#### 📱 Mobile Performance
| Métrica | Pontuação | Status |
|---|---|---|
| **Desempenho** | **93** | 🟢 Excelente |
| **Acessibilidade** | **96** | 🟢 Excelente |
| **Práticas Recomendadas** | **100** | 🟢 Perfeito |
| **SEO** | **100** | 🟢 Perfeito |

#### 💻 Desktop Performance
| Métrica | Pontuação | Status |
|---|---|---|
| **Desempenho** | **100** | 🟢 Perfeito |
| **Acessibilidade** | **96** | 🟢 Excelente |
| **Práticas Recomendadas** | **100** | 🟢 Perfeito |
| **SEO** | **100** | 🟢 Perfeito |

---

### 🛠️ Tecnologias Utilizadas
* **Framework:** Next.js (App Router)
* **Estilização:** Styled-Components
* **Otimizações:** `next/dynamic` para lazy hydration, `next/image` para otimização de imagens, tags semânticas completas e acessibilidade WAI-ARIA.

### ♿ Acessibilidade (NVDA)
* ♿ **Verificação Prática:** Toda a interface foi testada e aprovada com sucesso utilizando o leitor de telas **NVDA**, garantindo navegação fluida por teclado, leitura correta de labels estruturais e total conformidade com tecnologias assistivas.

---

### 💻 Como Executar Localmente

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Gere a build de produção:**
   ```bash
   npm run build
   ```

4. **Inicie o servidor de produção localmente:**
   ```bash
   npm run start
   ```

---

### 🌐 Deploy & CI/CD
A aplicação está configurada para deploy contínuo através da plataforma **Vercel** conectado ao repositório GitHub.
* **Ambiente de Produção:** O deploy ocorre automaticamente a cada `git push` ou merge efetuado na branch `main`.
* **Ambiente de Staging / Preview:** Toda branch secundária aberta em um Pull Request gera um ambiente de preview isolado para testes rápidos.

### 🔄 Procedimento de Rollback (Reversão)
Caso ocorra uma regressão em produção, a estratégia de reversão é simples e segura:
1. **Pelo Painel da Vercel:**
   * Acesse o Dashboard da Vercel → Vá em **Deployments**.
   * Identifique o último deployment estável.
   * Clique nos três pontos (...) ao lado dele e selecione **Promote to Production** (Promover para Produção). Isso reverte a versão de produção instantaneamente sem necessidade de nova build.
2. **Via Linha de Comando (Git):**
   * Reverta o último commit localmente: `git revert HEAD` ou volte para a versão estável específica.
   * Faça o push para a branch `main`: `git push origin main`. A Vercel construirá e implantará a versão estável anterior automaticamente.

### 💡 Justificativas Técnicas & Arquitetura
As excelentes notas de performance e UX foram fruto de escolhas arquiteturais estratégicas:
1. **Componentização & Code-Splitting:** A página inicial original continha mais de 1100 linhas em um único arquivo, gerando grande peso de processamento no thread principal. Dividimos em 7 subcomponentes focados na pasta `src/components/home/`.
2. **Lazy Hydration com `next/dynamic`:** Importamos de forma assíncrona os componentes que ficam abaixo da dobra inicial da página (como *LocationSection*, *AboutUsSection* e *HowItWorksSection*). Isso reduz o **TBT (Total Blocking Time)** de 3.8s para milissegundos, pois o navegador só carrega e hidrata esses blocos quando necessário.
3. **Otimização Crítica do LCP (Largest Contentful Paint):**
   * Substituímos o uso de imagens de fundo via CSS por tags `<Image priority fill />` nativas do Next.js na Hero, tornando a imagem prioritária e imediatamente descoberta no HTML inicial.
   * Removemos o atributo de carregamento tardio (`loading="lazy"`) das ilustrações de ações de perfil na dobra mobile superior, adicionando `fetchpriority="high"`, eliminando penalidades de LCP na tela do celular.
4. **HTML Semântico Rigoroso:** O uso correto das tags estruturais (`<header>`, `<main>`, `<section>`, `<footer>` e a hierarquia de `<h1>` a `<h3>`) garantiu pontuações máximas de SEO e Acessibilidade (100 e 96), permitindo que leitores de tela naveguem com clareza impecável.

---

## 🇺🇸 English

### 📝 About the Project
A highly performant and fully responsive Next.js platform designed to connect the **LGBTQIAPN+** community with qualified health professionals in an inclusive, safe, and welcoming way. The project went through an extensive performance and design audit to deliver the absolute best user experience.

### 🚀 PageSpeed Insights Results
The project was optimized under strict quality standards to achieve exceptional Lighthouse scores.

* 🔗 **Official Report:** [PageSpeed Insights Analysis](https://pagespeed.web.dev/analysis/https-lacrei-sa-de-juvion-vercel-app/dqbn7l6jfz?form_factor=mobile)
* 🌎 **Production Deployment:** [lacrei-sa-de-juvion.vercel.app](https://lacrei-sa-de-juvion.vercel.app/)

#### 📱 Mobile Performance
| Metric | Score | Status |
|---|---|---|
| **Performance** | **93** | 🟢 Excellent |
| **Accessibility** | **96** | 🟢 Excellent |
| **Best Practices** | **100** | 🟢 Perfect |
| **SEO** | **100** | 🟢 Perfect |

#### 💻 Desktop Performance
| Metric | Score | Status |
|---|---|---|
| **Performance** | **100** | 🟢 Perfect |
| **Accessibility** | **96** | 🟢 Excellent |
| **Best Practices** | **100** | 🟢 Perfect |
| **SEO** | **100** | 🟢 Perfect |

---

### 🛠️ Built With
* **Framework:** Next.js (App Router)
* **Styling:** Styled-Components
* **Optimizations:** `next/dynamic` for lazy hydration, `next/image` for image optimization, full semantic HTML tags, and WAI-ARIA accessibility.

### ♿ Accessibility (NVDA)
* ♿ **Practical Verification:** The entire user interface was successfully tested and approved using the **NVDA** screen reader, ensuring seamless keyboard navigation, correct reading of structural labels, and full compliance with assistive technologies.

---

### 💻 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build the production application:**
   ```bash
   npm run build
   ```

4. **Start the production server locally:**
   ```bash
   npm run start
   ```

---

### 🌐 Deploy & CI/CD
The application is configured for continuous deployment using the **Vercel** platform linked to the GitHub repository.
* **Production Environment:** Deployments occur automatically on every `git push` or merge to the `main` branch.
* **Staging / Preview Environment:** Any secondary branch opened in a Pull Request triggers an isolated preview environment for rapid validation.

### 🔄 Rollback Procedure
If a regression occurs in production, the rollback strategy is quick and safe:
1. **Via the Vercel Dashboard:**
   * Navigate to the Vercel Dashboard → Go to **Deployments**.
   * Identify the latest stable deployment.
   * Click on the three dots (...) next to it and select **Promote to Production**. This rolls back the production version instantly without rebuilding.
2. **Via Command Line (Git):**
   * Revert the latest commit locally: `git revert HEAD` or checkout the specific stable commit.
   * Push to the `main` branch: `git push origin main`. Vercel will automatically build and deploy the reverted stable code.

### 💡 Technical Justifications & Architecture
The excellent performance and UX scores are the result of strategic architectural decisions:
1. **Componentization & Code-Splitting:** The original landing page contained over 1100 lines of code in a single file, adding significant evaluation overhead to the main thread. We modularized it into 7 focused subcomponents inside the `src/components/home/` folder.
2. **Lazy Hydration with `next/dynamic`:** We asynchronously imported components below the initial fold (such as *LocationSection*, *AboutUsSection*, and *HowItWorksSection*). This slashed **TBT (Total Blocking Time)** from 3.8s to milliseconds by preventing unnecessary JavaScript execution on initial load.
3. **Critical LCP (Largest Contentful Paint) Optimization:**
   * We replaced CSS background images with Next.js native `<Image priority fill />` tags in the Hero section, rendering the LCP image priority and discoverable immediately in the initial HTML document.
   * We removed the `loading="lazy"` attribute from profile cards on the mobile fold, adding `fetchpriority="high"`, avoiding LCP delays on smaller screens.
4. **Strict Semantic HTML:** The precise usage of structural HTML5 tags (`<header>`, `<main>`, `<section>`, `<footer>`, and heading hierarchy from `<h1>` to `<h3>`) ensured perfect SEO and Accessibility scores (100 and 96), enabling assistive screen readers to navigate seamlessly.

---
