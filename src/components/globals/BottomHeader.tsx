'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Logo from './Logo';

export default function BottomHeader() {
  const pathname = usePathname();

  return (
    <HeaderContainer role="banner">
      <NavContainer aria-label="Navegação principal">
        {/* Logomarca */}
        <LogoLink href="/" aria-label="Lacrei Saúde - Início">
          <Logo height={32} />
        </LogoLink>

        {/* Links de Navegação */}
        <NavLinks>
          <NavLinkItem>
            <StyledLink href="/" $active={pathname === '/'} aria-current={pathname === '/' ? 'page' : undefined}>
              Home
            </StyledLink>
          </NavLinkItem>
          <NavLinkItem>
            <StyledLink href="/ajuda" $active={pathname === '/ajuda'} aria-current={pathname === '/ajuda' ? 'page' : undefined}>
              Ajuda
            </StyledLink>
          </NavLinkItem>
        </NavLinks>

        {/* Botão de Entrar */}
        <ActionButton href="#entrar" aria-label="Entrar no portal da Lacrei Saúde">
          Entrar
        </ActionButton>
      </NavContainer>
    </HeaderContainer>
  );
}

// Estilização com styled-components

const HeaderContainer = styled.header`
  position: fixed;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 2rem);
  max-width: 680px;
  height: 4.5rem;
  z-index: 1000;
  
  /* Efeito de Vidro (Glassmorphism de Alto Contraste) */
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: blur(16px) saturate(120%);
  -webkit-backdrop-filter: blur(16px) saturate(120%);
  border: 1.5px solid rgba(1, 135, 98, 0.22); /* Emerald-60 com opacidade sutil */
  border-radius: ${({ theme }) => theme.borderRadius.medium}; /* 4px geometric */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(1, 135, 98, 0.4);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 480px) {
    padding: 0 ${({ theme }) => theme.spacing.md};
    height: 4rem;
    bottom: 1rem;
  }
`;

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;


const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.md};
  background: rgba(0, 0, 0, 0.03);
  padding: 4px;
  border-radius: ${({ theme }) => theme.borderRadius.sharp}; /* 2px */

  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const NavLinkItem = styled.li``;

const StyledLink = styled(Link)<{ $active: boolean }>`
  font-size: ${({ theme }) => theme.typography.text.smHigh.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.smHigh.fontWeight};
  color: ${({ theme, $active }) => ($active ? theme.colors.emerald[60] : theme.colors.gray[60])};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.sharp};
  transition: all 0.2s ease;
  position: relative;
  display: block;
  text-align: center;
  background: ${({ $active }) => ($active ? '#FFFFFF' : 'transparent')};
  box-shadow: ${({ $active }) => ($active ? '0 2px 8px rgba(0, 0, 0, 0.05)' : 'none')};

  &:hover {
    color: ${({ theme }) => theme.colors.emerald[60]};
    background: ${({ $active }) => ($active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)')};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.sm}`};
    font-size: 0.8125rem;
  }
`;

const ActionButton = styled(Link)`
  font-size: ${({ theme }) => theme.typography.text.smHigh.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.smHigh.fontWeight};
  color: ${({ theme }) => theme.colors.gray[10]};
  background-color: ${({ theme }) => theme.colors.emerald[60]};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: 1.5px solid transparent;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald[70]};
    transform: translateY(-1px);
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.emerald[80]};
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: 0.8125rem;
  }
`;
