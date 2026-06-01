'use client';

import React, { useState, useRef, KeyboardEvent } from 'react';
import styled from 'styled-components';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'O que é a Lacrei Saúde?',
    answer: 'A Lacrei Saúde é uma iniciativa social que conecta pessoas da comunidade LGBTQIAPN+ a profissionais de saúde de diversas especialidades. Nosso objetivo é garantir que o atendimento médico, psicológico e terapêutico seja realizado com total segurança, empatia e livre de preconceitos.',
  },
  {
    question: 'Como funciona a validação dos profissionais de saúde?',
    answer: 'Nossa equipe realiza uma triagem rigorosa de todos os profissionais cadastrados. Validamos os registros nos conselhos profissionais ativos (como CRM, CRP, COFFITO, etc.) e avaliamos sua formação e histórico de atuação para garantir o alinhamento com os valores de humanização e respeito à comunidade.',
  },
  {
    question: 'A busca por atendimento é gratuita para os pacientes?',
    answer: 'Sim, a busca e a conexão com profissionais através do portal da Lacrei Saúde são 100% gratuitas para os pacientes. O nosso propósito é quebrar barreiras econômicas e sociais no acesso a cuidados especializados.',
  },
  {
    question: 'Como posso me cadastrar como profissional de saúde?',
    answer: 'Profissionais de saúde interessados em se juntar à nossa rede de apoio podem clicar no botão "Oferecer Atendimento" ou acessar nossa área de parcerias. O processo consiste no preenchimento de um formulário inicial e envio de comprovantes de registro ativo.',
  },
  {
    question: 'Quais especialidades estão disponíveis na plataforma?',
    answer: 'Contamos com uma ampla gama de especialidades cadastradas, cobrindo áreas essenciais como Psicologia, Psiquiatria, Endocrinologia, Ginecologia, Infectologia, Clínica Médica, Terapia Ocupacional, Nutrição e Assistência Social, todas integradas para um suporte completo.',
  },
];

export default function FaqAccordion() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggleItem = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const totalItems = faqItems.length;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = (index + 1) % totalItems;
        triggerRefs.current[nextIndex]?.focus();
        break;
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = (index - 1 + totalItems) % totalItems;
        triggerRefs.current[prevIndex]?.focus();
        break;
      case 'Home':
        event.preventDefault();
        triggerRefs.current[0]?.focus();
        break;
      case 'End':
        event.preventDefault();
        triggerRefs.current[totalItems - 1]?.focus();
        break;
      default:
        break;
    }
  };

  return (
    <AccordionContainer>
      {faqItems.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <AccordionItem key={index}>
            <AccordionHeader>
              <TriggerButton
                ref={(el) => {
                  triggerRefs.current[index] = el;
                }}
                id={`faq-trigger-${index}`}
                aria-expanded={isOpen}
                aria-controls={`faq-content-${index}`}
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                $isOpen={isOpen}
              >
                <span>{item.question}</span>
                <ChevronIcon $isOpen={isOpen} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ChevronIcon>
              </TriggerButton>
            </AccordionHeader>

            <ContentPanel
              id={`faq-content-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              $isOpen={isOpen}
            >
              <PanelBody>{item.answer}</PanelBody>
            </ContentPanel>
          </AccordionItem>
        );
      })}
    </AccordionContainer>
  );
}

// Estilizações com styled-components

const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const AccordionItem = styled.div`
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.gray[30]};
  background-color: #FFFFFF;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.emerald[40]};
  }
`;

const AccordionHeader = styled.h3`
  margin: 0;
`;

const TriggerButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.lg} 0`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: ${({ theme }) => theme.typography.text.xlHigh.fontSize};
  font-weight: ${({ theme }) => theme.typography.text.xlHigh.fontWeight};
  color: ${({ theme, $isOpen }) => ($isOpen ? theme.colors.emerald[60] : theme.colors.text.heading)};
  transition: all 0.2s ease;
  gap: ${({ theme }) => theme.spacing.md};

  &:hover {
    color: ${({ theme }) => theme.colors.emerald[60]};
  }

  @media (max-width: 480px) {
    font-size: 1.05rem;
    padding: ${({ theme }) => `${theme.spacing.md} 0`};
  }
`;

const ChevronIcon = styled.div<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $isOpen }) => ($isOpen ? theme.colors.emerald[60] : theme.colors.gray[50])};
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ContentPanel = styled.div<{ $isOpen: boolean }>`
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? '260px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1),
              visibility 0.35s cubic-bezier(0.4, 0, 0.2, 1);
`;

const PanelBody = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.text.base.fontSize};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.body};
`;
