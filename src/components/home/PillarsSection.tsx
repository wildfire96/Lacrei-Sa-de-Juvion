'use client';

import React from 'react';
import styled from 'styled-components';

export default function PillarsSectionComponent() {
  return (
    <PillarsSection aria-labelledby="pillars-title">
      <PillarsHeader>
        <SectionTitle id="pillars-title">Como transformamos o acolhimento</SectionTitle>
        <SectionSubtitle>Nossos três pilares para um atendimento médico livre de preconceitos e barreiras.</SectionSubtitle>
      </PillarsHeader>
      
      <PillarsGrid>
        <PillarCard>
          <IconWrapper>
            <LargeCircle aria-hidden="true">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </LargeCircle>
            <BadgeCircle>1</BadgeCircle>
          </IconWrapper>
          <CardTitle>Inclusão</CardTitle>
          <CardBody>
            Estudamos e compreendemos as necessidades reais da comunidade LGBTQIAPN+ para garantir um ecossistema médico acolhedor e integrativo.
          </CardBody>
        </PillarCard>
        
        <PillarCard>
          <IconWrapper>
            <LargeCircle aria-hidden="true">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </LargeCircle>
            <BadgeCircle>2</BadgeCircle>
          </IconWrapper>
          <CardTitle>Acolhimento</CardTitle>
          <CardBody>
            Priorizamos a escuta ativa e a empatia, garantindo que o cuidado físico e mental seja humanizado em todas as etapas da sua jornada.
          </CardBody>
        </PillarCard>
        
        <PillarCard>
          <IconWrapper>
            <LargeCircle aria-hidden="true">
              <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </LargeCircle>
            <BadgeCircle>3</BadgeCircle>
          </IconWrapper>
          <CardTitle>Segurança</CardTitle>
          <CardBody>
            Validamos criteriosamente a formação, especialização e a postura ética de todos os profissionais cadastrados em nossa base de apoio.
          </CardBody>
        </PillarCard>
      </PillarsGrid>
    </PillarsSection>
  );
}

const PillarsSection = styled.section`
  width: 100%;
  max-width: 1100px;
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.lg}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const PillarsHeader = styled.div`
  text-align: left;
  max-width: 600px;
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

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xxl};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const PillarCard = styled.article`
  background: transparent;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const IconWrapper = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  ${PillarCard}:hover & {
    transform: translateY(-6px) scale(1.04);
  }
`;

const LargeCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.emerald[60]} 0%, ${({ theme }) => theme.colors.blue[60]} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  box-shadow: 0 10px 30px rgba(40, 91, 138, 0.22);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  ${PillarCard}:hover & {
    box-shadow: 0 15px 35px rgba(1, 135, 98, 0.35);
  }
`;

const BadgeCircle = styled.div`
  position: absolute;
  bottom: 2px;
  left: 2px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.blue[60]} 0%, ${({ theme }) => theme.colors.emerald[80]} 100%);
  border: 2px solid #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  font-size: 0.9375rem;
  font-weight: 700;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  ${PillarCard}:hover & {
    transform: scale(1.1);
    border-color: ${({ theme }) => theme.colors.emerald[20]};
  }
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.headline.smHigh.fontSize};
  font-weight: ${({ theme }) => theme.typography.headline.smHigh.fontWeight};
  color: ${({ theme }) => theme.colors.text.heading};
`;

const CardBody = styled.p`
  font-size: ${({ theme }) => theme.typography.text.base.fontSize};
  color: ${({ theme }) => theme.colors.text.body};
  line-height: 1.5;
`;
