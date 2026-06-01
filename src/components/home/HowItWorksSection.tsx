'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function HowItWorksSectionComponent() {
  return (
    <HowItWorksSection aria-labelledby="how-it-works-title">
      <HowItWorksHeader>
        <SectionTitle id="how-it-works-title">Como Funciona</SectionTitle>
        <SectionSubtitle>Conectamos você a profissionais de forma rápida, segura e acolhedora em 4 etapas simples.</SectionSubtitle>
      </HowItWorksHeader>
      
      <JourneyGrid>
        {/* Card 1: Cadastro */}
        <JourneyCard>
          <IconContainer>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
          </IconContainer>
          <JourneyTitle>Cadastro</JourneyTitle>
          <JourneyText>Cadastre-se na plataforma, que é a primeira etapa para acessar a rede.</JourneyText>
          <JourneyButton href="/cadastro" aria-label="Ir para a página de Cadastro">Cadastro</JourneyButton>
        </JourneyCard>

        {/* Card 2: Pesquisa */}
        <JourneyCard>
          <IconContainer>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </IconContainer>
          <JourneyTitle>Pesquisa</JourneyTitle>
          <JourneyText>Sistema de buscas inteligente para encontrar o profissional ideal.</JourneyText>
          <JourneyButton href="/busca" aria-label="Fazer uma pesquisa por profissional">Pesquisa</JourneyButton>
        </JourneyCard>

        {/* Card 3: Validação */}
        <JourneyCard>
          <IconContainer>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              <polyline points="9 16 11 18 15 14" />
            </svg>
          </IconContainer>
          <JourneyTitle>Validação</JourneyTitle>
          <JourneyText>Validação do contato via SMS garantindo total segurança do paciente.</JourneyText>
          <JourneyButton href="/seguranca" aria-label="Saber mais sobre a Validação">Validação</JourneyButton>
        </JourneyCard>

        {/* Card 4: Contato */}
        <JourneyCard>
          <IconContainer>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </IconContainer>
          <JourneyTitle>Contato</JourneyTitle>
          <JourneyText>Ato de entrar em contato pelo telefone de forma descomplicada para consulta.</JourneyText>
          <JourneyButton href="/contato" aria-label="Entrar em contato com o profissional">Entrar em contato</JourneyButton>
        </JourneyCard>
      </JourneyGrid>
    </HowItWorksSection>
  );
}

const HowItWorksSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.lg}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const HowItWorksHeader = styled.div`
  text-align: center;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.headline.lg.fontSize};
  font-weight: ${({ theme }) => theme.typography.headline.lg.fontWeight};
  color: ${({ theme }) => theme.colors.text.heading};
  letter-spacing: -0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.text.xl.fontSize};
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.5;
`;

const JourneyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const JourneyCard = styled.article`
  background: #FCF9FF; /* Fundo lavanda muito suave como na imagem */
  border: none;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center; /* Alinhamento central idêntico à imagem */
  text-align: center;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(1, 135, 98, 0.08);
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  background: transparent; /* Removemos o fundo sólido para deixar igual à imagem */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.emerald[60]}; /* Cor principal do ícone */
  margin-bottom: ${({ theme }) => theme.spacing.md};
  transition: all 0.3s ease;

  svg {
    width: 48px;
    height: 48px;
  }

  ${JourneyCard}:hover & {
    transform: scale(1.08);
  }
`;

const JourneyTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.headline.sm.fontSize};
  font-weight: ${({ theme }) => theme.typography.headline.sm.fontWeight};
  color: ${({ theme }) => theme.colors.emerald[60]}; /* Título na cor verde como na imagem */
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const JourneyText = styled.p`
  font-size: ${({ theme }) => theme.typography.text.sm.fontSize};
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.5;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-grow: 1;
`;

const JourneyButton = styled(Link)`
  font-size: ${({ theme }) => theme.typography.text.smHigh.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.smHigh.fontWeight};
  color: ${({ theme }) => theme.colors.emerald[60]};
  background: transparent;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: 1.5px solid ${({ theme }) => theme.colors.emerald[60]};
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s ease;
  width: 100%;
  text-align: center;
  margin-top: auto;

  &:hover {
    background: ${({ theme }) => theme.colors.emerald[60]};
    color: #FFFFFF;
  }
`;
