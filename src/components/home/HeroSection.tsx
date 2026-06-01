'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSectionComponent() {
  return (
    <HeroSection aria-labelledby="hero-title">
      <HeroBackground>
        <Image
          src="/hero-bg.jpg"
          alt="Médica acolhendo paciente"
          fill
          priority
          sizes="100vw"
          quality={85}
          style={{ objectFit: 'cover', objectPosition: '80% center' }}
        />
        <HeroGradientOverlay />
      </HeroBackground>

      <HeroContent>
        <PrideBadge>
          <RainbowHeart />
          <span>Espaço Seguro & Acolhedor</span>
        </PrideBadge>
        <HeroTitle id="hero-title">
          Olá, você está na <span>Lacrei Saúde!</span>
        </HeroTitle>
        <HeroSubtitle>
          Conectamos pessoas da comunidade LGBTQIAPN+ a profissionais de saúde de forma acolhedora, inclusiva e com total segurança.
        </HeroSubtitle>
        <ButtonGroup>
          <PrimaryButton href="#pacientes" aria-label="Acessar serviços para pacientes">
            Para Pacientes
          </PrimaryButton>
          <SecondaryButton href="#profissionais" aria-label="Acessar serviços para profissionais de saúde">
            Para Profissionais
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  width: 100%;
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => `${theme.spacing.xxxl} 4% ${theme.spacing.xxxl} 8%`};
  position: relative;
  background-color: #FFFFFF;
  
  @media (max-width: 900px) {
    padding-left: 6%;
  }

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.md}`};
    justify-content: center;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const HeroGradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 35%, rgba(255, 255, 255, 0) 65%);

  @media (max-width: 900px) {
    background-image: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0) 75%);
  }

  @media (max-width: 768px) {
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.96) 0%,
      rgba(255, 255, 255, 0.82) 100%
    );
  }
`;

const HeroContent = styled.div`
  max-width: 500px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  animation: heroFade 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 600px;
    text-align: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.95); 
    backdrop-filter: blur(12px);
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    border: 1px solid rgba(1, 135, 98, 0.18);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  }

  @keyframes heroFade {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.headline.xl.fontSize};
  font-weight: ${({ theme }) => theme.typography.headline.xl.fontWeight};
  line-height: ${({ theme }) => theme.typography.headline.xl.lineHeight};
  color: ${({ theme }) => theme.colors.text.heading};
  letter-spacing: -0.02em;

  span {
    color: ${({ theme }) => theme.colors.emerald[60]};
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.text.xl.fontSize};
  line-height: ${({ theme }) => theme.typography.text.xl.lineHeight};
  color: ${({ theme }) => theme.colors.text.body};
  max-width: 680px;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const PrimaryButton = styled(Link)`
  font-size: ${({ theme }) => theme.typography.text.baseHigh.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.baseHigh.fontWeight};
  color: ${({ theme }) => theme.colors.gray[10]};
  background-color: ${({ theme }) => theme.colors.emerald[60]};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 2px solid transparent;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px rgba(1, 135, 98, 0.15);

  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald[70]};
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(1, 135, 98, 0.25);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.emerald[80]};
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const SecondaryButton = styled(Link)`
  font-size: ${({ theme }) => theme.typography.text.baseHigh.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.baseHigh.fontWeight};
  color: ${({ theme }) => theme.colors.emerald[60]};
  background-color: transparent;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 2px solid ${({ theme }) => theme.colors.emerald[60]};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgba(1, 135, 98, 0.05);
    transform: translateY(-1px);
  }

  &:active {
    background-color: rgba(1, 135, 98, 0.1);
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const PrideBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(1, 135, 98, 0.15);
  padding: 6px 14px;
  border-radius: 24px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.emerald[70]};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
  margin-bottom: 4px;
  backdrop-filter: blur(4px);
  
  @media (max-width: 768px) {
    background: rgba(255, 255, 255, 0.95);
    margin-bottom: 8px;
  }
`;

const RainbowHeart = () => (
  <HeartSvg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="pride-rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF5C5C" />
        <stop offset="20%" stopColor="#FFA85C" />
        <stop offset="40%" stopColor="#FFEC5C" />
        <stop offset="60%" stopColor="#5CFF7B" />
        <stop offset="80%" stopColor="#5C97FF" />
        <stop offset="100%" stopColor="#C55CFF" />
      </linearGradient>
    </defs>
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="url(#pride-rainbow-gradient)"
    />
  </HeartSvg>
);

const HeartSvg = styled.svg`
  display: inline-block;
  vertical-align: middle;
  animation: heartbeat 1.8s ease-in-out infinite;

  @keyframes heartbeat {
    0% { transform: scale(1); }
    14% { transform: scale(1.12); }
    28% { transform: scale(1); }
    42% { transform: scale(1.12); }
    70% { transform: scale(1); }
  }
`;
