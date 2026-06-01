'use client';

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutUsSectionComponent() {
  const aboutUsRef = useRef<HTMLElement>(null);
  const [isAboutUsVisible, setIsAboutUsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAboutUsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (aboutUsRef.current) {
      observer.observe(aboutUsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AboutUsSection id="about-us" ref={aboutUsRef} aria-labelledby="about-us-title" $visible={isAboutUsVisible}>
      <AboutUsContent>
        <AboutUsImageWrapper $visible={isAboutUsVisible}>
          <StyledImage
            src="/about-us-pride.jpg"
            alt="Dois jovens sorrindo sob o céu azul e segurando orgulhosamente a bandeira LGBTQIAPN+ em um evento de Orgulho"
            fill
            sizes="(max-width: 900px) 100vw, 580px"
            priority={false}
          />
        </AboutUsImageWrapper>
        <AboutUsTextContent $visible={isAboutUsVisible}>
          <AboutUsTitle id="about-us-title">O que é a Lacrei Saúde?</AboutUsTitle>
          <AboutUsParagraph>
            Existir na saúde é um direito fundamental. Nós construímos pontes de empatia para que nenhuma pessoa da comunidade LGBTQIAPN+ precise ocultar sua identidade para receber cuidados médicos de excelência.
          </AboutUsParagraph>
          <AboutUsParagraph>
            Unimos pacientes que buscam um atendimento seguro a profissionais de saúde que entendem que o acolhimento e o respeito são as bases de qualquer diagnóstico. Isso é mais do que medicina: é validação, segurança e dignidade de ponta a ponta.
          </AboutUsParagraph>
          <CreativeButton href="/ajuda" aria-label="Conhecer mais sobre a história e tirar dúvidas no FAQ">
            Conhecer Nossa História
          </CreativeButton>
        </AboutUsTextContent>
      </AboutUsContent>
    </AboutUsSection>
  );
}

const AboutUsSection = styled.section<{ $visible: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[20]};
  border-top: 1px solid ${({ theme }) => theme.colors.gray[30]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[30]};
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.lg}`};
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.md}`};
  }
`;

const AboutUsContent = styled.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr; /* Asymmetry: image column is wider */
  gap: ${({ theme }) => theme.spacing.xxxl};
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const AboutUsImageWrapper = styled.div<{ $visible: boolean }>`
  position: relative;
  width: 100%;
  aspect-ratio: 1.18; /* Modern geometric aspect ratio */
  border-radius: 8px; /* High-end visual clean geometric styling */
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.05);
  border: 1.5px solid rgba(1, 135, 98, 0.15); /* Clean borderline theme visual */
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateX(0)' : 'translateX(-40px)')};
  transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(1, 135, 98, 0.12) 0%, rgba(40, 91, 138, 0.12) 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
    img {
      transform: scale(1.025);
    }
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
`;

const AboutUsTextContent = styled.div<{ $visible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 500px;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? 'translateX(0)' : 'translateX(40px)')};
  transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.15s;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

const AboutUsTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.headline.lg.fontSize};
  font-weight: ${({ theme }) => theme.typography.headline.lg.fontWeight};
  line-height: ${({ theme }) => theme.typography.headline.lg.lineHeight};
  color: ${({ theme }) => theme.colors.text.heading};
  letter-spacing: -0.02em;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 48px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.emerald[50]};
    margin-top: ${({ theme }) => theme.spacing.sm};
    border-radius: 2px;
  }
`;

const AboutUsParagraph = styled.p`
  font-size: ${({ theme }) => theme.typography.text.base.fontSize};
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.text.body};
  max-width: 65ch; /* Strict readability measure */
`;

const CreativeButton = styled(Link)`
  font-size: ${({ theme }) => theme.typography.text.baseHigh.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.baseHigh.fontWeight};
  color: ${({ theme }) => theme.colors.emerald[60]};
  background-color: transparent;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 2px solid ${({ theme }) => theme.colors.emerald[60]};
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 12px rgba(1, 135, 98, 0.05);
  margin-top: ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  
  &:hover {
    color: #FFFFFF;
    background-color: ${({ theme }) => theme.colors.emerald[60]};
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(1, 135, 98, 0.18);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.emerald[70]};
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;
