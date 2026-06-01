'use client';

import React from 'react';
import styled from 'styled-components';
import MapsFacade from './MapsFacade';

export default function LocationSectionComponent() {
  return (
    <LocationSection aria-labelledby="location-title">
      <LocationContent>
        <LocationTextWrapper>
          <SectionTitle id="location-title">Onde Estamos</SectionTitle>
          <SectionSubtitle>
            Venha tomar um café conosco na nossa sede administrativa na Avenida Paulista ou conecte-se com nossa equipe online.
          </SectionSubtitle>
        </LocationTextWrapper>
        
        {/* Componente Otimizado de Iframe Facade */}
        <MapsFacade />
      </LocationContent>
    </LocationSection>
  );
}

const LocationSection = styled.section`
  width: 100%;
  max-width: 800px;
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.lg}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const LocationContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const LocationTextWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
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
