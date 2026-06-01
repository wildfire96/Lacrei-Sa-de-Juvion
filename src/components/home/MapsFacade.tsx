'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

export default function MapsFacade() {
  const [isActive, setIsActive] = useState(false);

  const handleActivateMap = () => {
    setIsActive(true);
  };

  return (
    <Container aria-label="Localização da sede">
      {!isActive ? (
        /* Estado Inativo: Exibe a imagem de fachada e o botão */
        <FacadeWrapper>
          <StyledImage
            src="/map-facade.png"
            alt="Ilustração do mapa de localização da Lacrei Saúde"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            priority={false}
          />
          <Overlay>
            <InfoCard>
              <InfoTitle>Nossa Sede</InfoTitle>
              <InfoText>Avenida Paulista, São Paulo - SP</InfoText>
              <ActivateButton 
                onClick={handleActivateMap}
                aria-label="Ativar e carregar o mapa interativo do Google Maps"
              >
                Visualizar Mapa Interativo
              </ActivateButton>
            </InfoCard>
          </Overlay>
        </FacadeWrapper>
      ) : (
        /* Estado Ativo: Carrega o Iframe real de forma assíncrona */
        <IframeWrapper>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197590805562!2d-46.6564943!3d-23.5613497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa interativo mostrando a localização da sede da Lacrei Saúde na Avenida Paulista"
          />
        </IframeWrapper>
      )}
    </Container>
  );
}

// Estilização

const Container = styled.section`
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.gray[20]};
  border: 1.5px solid ${({ theme }) => theme.colors.emerald[20]};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  position: relative;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const FacadeWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  ${FacadeWrapper}:hover & {
    transform: scale(1.03);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(1, 76, 55, 0.22); /* Emerald-80 com opacidade */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const InfoCard = styled.div`
  background: #FFFFFF;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1px solid ${({ theme }) => theme.colors.gray[30]};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  max-width: 380px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.headline.smHigh.fontSize};
  font-weight: ${({ theme }) => theme.typography.headline.smHigh.fontWeight};
  color: ${({ theme }) => theme.colors.text.heading};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.typography.text.base.fontSize};
  color: ${({ theme }) => theme.colors.text.body};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ActivateButton = styled.button`
  font-size: ${({ theme }) => theme.typography.text.smHigh.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.smHigh.fontWeight};
  color: ${({ theme }) => theme.colors.gray[10]};
  background-color: ${({ theme }) => theme.colors.emerald[60]};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.sharp};
  border: 1.5px solid transparent;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald[70]};
    transform: translateY(-1px);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.emerald[80]};
    transform: translateY(0);
  }
`;

const IframeWrapper = styled.div`
  width: 100%;
  height: 100%;
  animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
