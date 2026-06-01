# Lacrei Saúde - Instruções e Diretrizes de Desenvolvimento

## Propósito do Projeto
Este projeto tem como objetivo desenvolver duas páginas institucionais para a **Lacrei Saúde**, conectando pessoas da comunidade LGBTQIAPN+ a profissionais de saúde de forma segura, inclusiva e empática. O foco é uma interface limpa, altamente acessível e extremamente performática.

---

## 🏗️ 1. Pilares Arquiteturais
- **Tecnologias:** Next.js (App Router), TypeScript, Styled-Components.
- **Tipagem:** Rigorosa. Proibido uso de `any`.
- **Estilização:** CSS-in-JS via `styled-components` com Server-Side Rendering (SSR) devidamente configurado para prevenir hidratação incorreta.

---

## ♿ 2. Acessibilidade (Obrigatório - Meta 90+ Lighthouse)
A interface deve poder ser utilizada por todas as pessoas, sem barreiras.
- **HTML Semântico:** Uso obrigatório de tags de conteúdo (`<main>`, `<article>`, `<section>`, `<nav>`, `<header>`, `<footer>`).
- **Aria Attributes:** Elementos interativos não nativos devem conter rótulos claros (ex: `aria-label`, `aria-hidden`, `aria-expanded`).
- **Navegação por Teclado:** Foco de tabulação linear e estados de `:focus-visible` explícitos e bem contrastados em todos os links e botões.
- **Contraste de Cores:** O contraste texto/fundo deve seguir padrão WCAG AA/AAA rigoroso.
- **Imagens:** Toda imagem deve obrigatoriamente possuir um atributo `alt` descritivo quando informativa, ou `alt=""` quando puramente decorativa.

---

## ⚡ 3. Performance (Obrigatório - Meta 80+ Lighthouse)
A aplicação deve ser leve, ideal para acessos mobile em redes mais lentas.
- **Imagens Otimizadas:** Uso irrestrito da tag `<Image>` do `next/image` para todos os recursos visuais não-CSS.
- **Lazy Loading:** Componentes ou seções pesadas abaixo da "primeira dobra" da página devem ser carregadas dinamicamente (`next/dynamic`).
- **Fontes:** As fontes do projeto devem ser pré-carregadas (Preload) utilizando o utilitário nativo do Next.js (ex: `next/font/google`).

---

## 🎨 4. Design System - Tokens Iniciais (Marsha)

> **Referência Oficial:** [Figma: Guia de Estilo - Marsha P. Johnson](https://www.figma.com/design/P4fEHULnr9okeGIT7p3P0G/Guia-de-Estilo---Marsha-P.-Johnson?node-id=16298-82&p=f&t=MPydvKXaF074ZGEp-0) (Apoio primário para componentes e diretrizes visuais da Lacrei Saúde).

**Escala Primária (Emerald):**
- Emerald-20: `#B2DFD0`
- Emerald-30: `#80CAB1`
- Emerald-40: `#4FB494`
- Emerald-50: `#29A480`
- Emerald-60: `#018762`
- Emerald-70: `#007756`
- Emerald-80: `#014C37`

**Escala Secundária (Green - Sucesso):**
- Green-30: `#9CE2B2`
- Green-40: `#75D693`
- Green-50: `#4ECB74`
- Green-60: `#00B15C`
- Green-70: `#298A46`
- Green-80: `#113B1E`

**Escala Neutra (Gray):**
- Gray-20: `#F0F0F0`
- Gray-30: `#CFCFCF`
- Gray-40: `#BFBFBF`
- Gray-50: `#737373`
- Gray-60: `#515151`
- Gray-70: `#2D2D2D`
- Gray-80: `#131313`

**Escala de Alerta/Erro (Red/Orange/Blue):**
- Red-30: `#F5BCBC`
- Red-40: `#EE9090`
- Red-50: `#D63D1D`
- Red-60: `#BC1C1C`
- Red-70: `#9B1717`
- Red-80: `#6F1111`
- Orange-90: `#B95113`
- Escala Blue (Informativo): Blue-10 (`#EBF2F9`) a Blue-60 (`#285B8A`).

**Tokens Semânticos (Uso Geral):**
- **Texto:** `$color-text-heading` (gray-80), `$color-text-body` (gray-70), `$color-text-accent` (emerald-60), `$color-text-error` (red-60).
- **Ícones:** `$color-icon-accent` (emerald-60), `$color-icon-success` (green-70), `$color-icon-error` (red-60), `$color-icon-warning` (orange-90), `$color-icon-info` (blue-50).
- **Bordas:** `$color-border-default` (gray-80), `$color-border-subtle` (gray-70), `$color-border-success` (green-70), `$color-border-divider` (emerald-20).

---

## 🖋️ 5. Tipografia (Marsha System)

As fontes devem seguir os tamanhos, pesos e line-heights estritos do design system.

### Headline (Títulos)
- **Headline-xl:** 48px / Bold / Line height: 120% (Títulos principais de telas e páginas).
- **Headline-lg:** 40px / Bold / Line height: 120% (Títulos de blocos de texto ou seções).
- **Headline-base:** 32px / Bold / Line height: 120% (Títulos secundários).
- **Headline-sm:** 24px / Regular / Line height: 150%
- **Headline-sm-high200:** 24px / Bold / Line height: 150%

### Text (Corpo de Texto e Parágrafos)
- **Text-xl-high200:** 18px / Bold / Line height: 150%
- **Text-xl:** 18px / Regular / Line height: 150%
- **Text-base:** 16px / Regular / Line height: 150% (Padrão para a maioria dos parágrafos longos/curtos).
- **Text-base-high200:** 16px / Bold / Line height: 150%
- **Text-sm:** 14px / Regular / Line height: 150% (Usado em tags).
- **Text-sm-high200:** 14px / Semibold / Line height: 150%
- **Text-xs:** 12px / Regular / Line height: 150% (Helper text).
- **Text-xs-high200:** 12px / Bold / Line height: 150% (Labels).

---

## 🧪 6. Testes Automatizados e Resiliência
- Setup base de testes com **Jest** e **React Testing Library**.
- Componentes obrigatórios a serem testados:
  1. Componentes de roteamento/links.
  2. Elementos estruturais globais (`Header` / `Footer`).
  3. Pelo menos um componente interativo de exibição (ex: os Cards).

---

## 📦 6. Rollback e Deploy
- **Ambiente:** Vercel.
- **Estratégia de Rollback:** Em caso de quebra em produção (Production Build), a documentação do projeto (README.md) orientará o time a utilizar o recurso "Instant Rollback" no dashboard da Vercel para restaurar imediatamente o último build funcional conhecido.

---

## 🧩 7. Estrutura de Diretórios Proposta

```text
src/
├── app/
│   ├── layout.tsx         # Root layout (Header + Footer globais, registry do styled-components)
│   ├── page.tsx           # Home Page (Landing principal)
│   └── (nova-pagina)/     # Segunda página a ser definida
├── components/
│   ├── globals/           # Header, Footer, Container, Typography
│   ├── ui/                # Buttons, Cards, Inputs
│   └── home/              # Hero, Pillars, About
├── styles/
│   ├── theme.ts           # Configuração de design tokens (cores, espaçamentos)
│   └── global.ts          # Estilos globais e reset
└── lib/
    ├── registry.tsx       # Styled-components SSR registry
    └── utils.ts           # Funções utilitárias e formatadores
```

> **Nota:** Nenhuma implementação em código avançado será iniciada até a confirmação total dos tokens (tipografia, espaçamento) e autorização clara para prosseguir ("comando claro" do desenvolvedor líder).
