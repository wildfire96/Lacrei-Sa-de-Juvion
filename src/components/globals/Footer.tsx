'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';

// Ícones Minimalistas em SVG (Stroke)
const FacebookIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const EmailIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const footerData = [
  {
    title: 'Lacrei Saúde',
    links: [
      { name: 'Quem Somos', href: '#about-us' },
      { name: 'Nosso Propósito', href: '#about-us' },
      { name: 'Missão, Visão e Valor', href: '#about-us' },
      { name: 'Acessibilidade', href: '/' },
    ],
  },
  {
    title: 'Saúde',
    links: [
      { name: 'Buscar atendimento', href: '/' },
      { name: 'Oferecer atendimento', href: '/' },
    ],
  },
  {
    title: 'Segurança e Privacidade',
    links: [
      { name: 'Política de Privacidade', href: '/' },
      { name: 'Termos de Uso', href: '/' },
      { name: 'Direitos de Titular', href: '/' },
    ],
  },
];

export default function Footer() {
  const [openCol, setOpenCol] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenCol(openCol === index ? null : index);
  };

  return (
    <FooterContainer role="contentinfo">
      <FooterContent>
        {/* Identidade e Sociais */}
        <BrandSection>
          <Logo height={32} />
          <SocialGroup aria-label="Redes Sociais">
            <SocialButton href="#" aria-label="Facebook">
              <FacebookIcon />
            </SocialButton>
            <SocialButton href="#" aria-label="Instagram">
              <InstagramIcon />
            </SocialButton>
            <SocialButton href="#" aria-label="LinkedIn">
              <LinkedInIcon />
            </SocialButton>
            <SocialButton href="#" aria-label="Email">
              <EmailIcon />
            </SocialButton>
          </SocialGroup>
        </BrandSection>

        {/* Navegação e Links */}
        <NavColumns>
          {footerData.map((col, index) => {
            const isOpen = openCol === index;
            return (
              <Column key={index}>
                <ColumnTitle 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleAccordion(index);
                    }
                  }}
                >
                  {col.title}
                  <AccordionChevron $isOpen={isOpen}>
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </AccordionChevron>
                </ColumnTitle>
                <LinksList $isOpen={isOpen} id={`footer-nav-${index}`}>
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <AnimatedLink href={link.href}>
                        {link.name}
                      </AnimatedLink>
                    </li>
                  ))}
                </LinksList>
              </Column>
            );
          })}
        </NavColumns>
      </FooterContent>
    </FooterContainer>
  );
}

// Estilização

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray[10]}; /* Super claro, minimalista */
  border-top: 1px solid ${({ theme }) => theme.colors.emerald[20]}; /* Toque sutil da marca */
  padding: ${({ theme }) => `${theme.spacing.xxxl} ${theme.spacing.xl}`};
  margin-top: auto;
  padding-bottom: 8rem; /* Evita sobreposição do BottomHeader */

  @media (max-width: 900px) {
    padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.md}`};
    padding-bottom: 7rem;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xxxl};

  @media (max-width: 900px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xxl};
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 300px;
`;

const SocialGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.emerald[60]};
  background: transparent;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); /* Animação suave (impeccable) */

  &:hover {
    transform: scale(1.08) translateY(-2px); /* Efeito pulso sutil */
    background: ${({ theme }) => theme.colors.emerald[20]}; /* Fundo delicado */
    color: ${({ theme }) => theme.colors.emerald[70]};
  }
`;

const NavColumns = styled.nav`
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    gap: 0; /* O espaçamento no mobile é ditado pelos itens do accordion */
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[20]};
    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.colors.gray[20]};
    }
  }
`;

const ColumnTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.text.base.fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.emerald[70]}; /* Identidade forte na tipografia */
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 900px) {
    margin-bottom: 0;
    padding: ${({ theme }) => theme.spacing.lg} 0;
    cursor: pointer;
    font-size: ${({ theme }) => theme.typography.text.xl.fontSize};
  }
`;

const AccordionChevron = styled.div<{ $isOpen: boolean }>`
  display: none;
  color: ${({ theme }) => theme.colors.gray[50]};
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};

  @media (max-width: 900px) {
    display: flex;
  }
`;

const LinksList = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 900px) {
    /* Lógica da Sanfona no Mobile */
    max-height: ${({ $isOpen }) => ($isOpen ? '400px' : '0')};
    overflow: hidden;
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    gap: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ $isOpen, theme }) => ($isOpen ? theme.spacing.xl : '0')};
  }
`;

/* O "Impeccable" slide-underline effect */
const AnimatedLink = styled(Link)`
  font-size: ${({ theme }) => theme.typography.text.base.fontSize};
  color: ${({ theme }) => theme.colors.text.body};
  text-decoration: none;
  position: relative;
  display: inline-block;
  padding-bottom: 2px;
  transition: color 0.3s ease;

  /* Pseudo-elemento para a linha que cresce */
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1.5px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.emerald[60]};
    transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.emerald[70]};
    &::after {
      width: 100%; /* Faz a linha deslizar até 100% no hover */
    }
  }
`;
