import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.gray[10]};
    color: ${({ theme }) => theme.colors.text.body};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  /* Imagens Responsivas */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Elementos Interativos */
  input, button, textarea, select {
    font: inherit;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Acessibilidade: Estado de Foco Nítido e Altamente Visível (WCAG AAA) */
  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.emerald[60]};
    outline-offset: 4px;
  }

  /* Suporte a preferências de movimento reduzido (Acessibilidade) */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray[20]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.emerald[30]};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    
    &:hover {
      background: ${({ theme }) => theme.colors.emerald[50]};
    }
  }
`;
