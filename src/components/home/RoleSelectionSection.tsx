'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export default function RoleSelection() {
  return (
    <SectionContainer aria-labelledby="roles-title">
      {/* Card de Paciente */}
      <RoleCard id="pacientes">
        <RoleImageFrame>
          <ClippedInner>
            <PopOutImage 
              src="/paciente.webp" 
              alt="Paciente sorrindo com bandeira LGBTQIAPN+" 
              fetchPriority="high"
            />
          </ClippedInner>
          <PopOutTopOnly>
            <PopOutImage 
              src="/paciente.webp" 
              alt="" 
              aria-hidden="true" 
              fetchPriority="high"
            />
          </PopOutTopOnly>
        </RoleImageFrame>
        <RoleContent>
          <RoleTitleGroup>
            <RoleAccentLine />
            <RoleTitle>Pacientes</RoleTitle>
          </RoleTitleGroup>
          <RoleText>
            Conecte-se a profissionais da saúde que estudam as necessidades da comunidade LGBTQIAPN+.
          </RoleText>
          <RoleButton href="/pacientes" aria-label="Ir para a página de Pacientes">Buscar atendimento</RoleButton>
        </RoleContent>
      </RoleCard>

      {/* Card de Profissional */}
      <RoleCard $reverse id="profissionais">
        <RoleImageFrame $reverse>
          <ClippedInner>
            <PopOutImage 
              src="/medica.webp" 
              alt="Profissional da saúde sorrindo com estetoscópio" 
              loading="lazy"
              decoding="async"
            />
          </ClippedInner>
          <PopOutTopOnly>
            <PopOutImage 
              src="/medica.webp" 
              alt="" 
              aria-hidden="true" 
              loading="lazy"
              decoding="async"
            />
          </PopOutTopOnly>
        </RoleImageFrame>
        <RoleContent>
          <RoleTitleGroup>
            <RoleAccentLine />
            <RoleTitle>Profissionais da saúde</RoleTitle>
          </RoleTitleGroup>
          <RoleText>
            Buscamos profissionais da saúde qualificados que priorizam o bem-estar físico e mental de pessoas LGBTQIAPN+.
          </RoleText>
          <RoleButton href="/profissionais" aria-label="Ir para a página de Profissionais">Oferecer atendimento</RoleButton>
        </RoleContent>
      </RoleCard>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.lg}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px; /* Grande espaçamento vertical para acomodar as imagens vazando */
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 900px) {
    padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.md}`};
    gap: 120px;
  }
`;

const RoleCard = styled.article<{ $reverse?: boolean }>`
  background: #FFFFFF;
  border-radius: 20px;
  width: 100%;
  max-width: 1050px;
  min-height: 260px;
  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
  align-items: stretch;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
  position: relative;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding-top: 140px; 
  }
`;

const RoleImageFrame = styled.div<{ $reverse?: boolean }>`
  width: 38%;
  min-width: 320px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.emerald[60]} 0%, ${({ theme }) => theme.colors.blue[60]} 100%);
  border-radius: 160px;
  position: relative;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
    min-width: unset;
    height: 280px;
    border-radius: 100px;
    position: relative;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const ClippedInner = styled.div`
  position: absolute;
  inset: 0;
  border-radius: inherit; 
  overflow: hidden; 
  z-index: 1;
`;

const PopOutTopOnly = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  clip-path: inset(-150% 0 40% 0); 
`;

const PopOutImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%; 
  height: 125%; 
  object-fit: cover;
  object-position: top center;
  display: block;
`;

const RoleContent = styled.div`
  flex: 1;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xxl}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 900px) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg} ${theme.spacing.xl}`};
    align-items: center;
    text-align: center;
    z-index: 3;
  }
`;

const RoleTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 900px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const RoleAccentLine = styled.div`
  width: 3px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.emerald[60]};
  border-radius: 4px;

  @media (max-width: 900px) {
    width: 48px;
    height: 3px;
  }
`;

const RoleTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.headline.lg.fontSize};
  font-weight: ${({ theme }) => theme.typography.headline.lg.fontWeight};
  color: ${({ theme }) => theme.colors.text.heading};
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const RoleText = styled.p`
  font-size: ${({ theme }) => theme.typography.text.xl.fontSize};
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.6;
  max-width: 520px;
`;

const RoleButton = styled(Link)`
  font-size: ${({ theme }) => theme.typography.text.baseHigh.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.baseHigh.fontWeight};
  color: #FFFFFF;
  background-color: ${({ theme }) => theme.colors.emerald[60]};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(1, 135, 98, 0.2);
  margin-top: ${({ theme }) => theme.spacing.xs};

  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald[70]};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(1, 135, 98, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;
