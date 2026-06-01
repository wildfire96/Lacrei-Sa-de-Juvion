import type { Metadata } from 'next';
import React from 'react';
import FaqAccordion from '../../components/ajuda/FaqAccordion';

export const metadata: Metadata = {
  title: 'Ajuda & FAQ | Lacrei Saúde',
  description: 'Tire suas dúvidas sobre o funcionamento da plataforma Lacrei Saúde e veja como facilitamos a busca por atendimento médico acolhedor e humanizado.',
  keywords: ['Ajuda Lacrei Saúde', 'FAQ Lacrei Saúde', 'dúvidas Lacrei Saúde', 'como funciona a Lacrei Saúde'],
};

export default function AjudaPage() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
      
      {/* 1. SEÇÃO CABEÇALHO */}
      <header style={{ 
        width: '100%', 
        backgroundColor: '#F0F0F0', 
        borderBottom: '1px solid #CFCFCF', 
        padding: '4rem 1.5rem 3rem 1.5rem', 
        display: 'flex', 
        justifyContent: 'center' 
      }}>
        <div style={{ maxWidth: '800px', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#018762', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Central de Ajuda
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#131313', letterSpacing: '-0.02em', margin: 0 }}>
            Como podemos ajudar?
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#2D2D2D', lineHeight: 1.5, margin: 0 }}>
            Tire suas dúvidas sobre o funcionamento da Lacrei Saúde e veja como facilitamos a busca por atendimento médico acolhedor, inclusivo e seguro.
          </p>
        </div>
      </header>

      {/* 2. SEÇÃO FAQ ACCORDION */}
      <section style={{ 
        width: '100%', 
        maxWidth: '800px', 
        padding: '4rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }} aria-labelledby="faq-section-title">
        <h2 id="faq-section-title" style={{ fontSize: '2.0rem', fontWeight: 700, color: '#131313', letterSpacing: '-0.02em', margin: 0 }}>
          Dúvidas Frequentes
        </h2>
        <FaqAccordion />
      </section>

      {/* 3. SEÇÃO AJUDA ADICIONAL */}
      <section style={{ 
        width: '100%', 
        backgroundColor: '#F0F0F0', 
        borderTop: '1px solid #CFCFCF',
        borderBottom: '1px solid #CFCFCF',
        padding: '3.5rem 1.5rem',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
      }} aria-labelledby="contact-section-title">
        <div style={{ maxWidth: '600px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h3 id="contact-section-title" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#131313', margin: 0 }}>
            Ainda ficou com alguma dúvida?
          </h3>
          <p style={{ fontSize: '1rem', color: '#2D2D2D', lineHeight: 1.5, margin: 0 }}>
            Nossa equipe de suporte está sempre disponível para ajudar você. Mande uma mensagem e responderemos o mais rápido possível.
          </p>
          <style dangerouslySetInnerHTML={{__html: `
            .support-btn {
              transition: background-color 0.2s ease;
            }
            .support-btn:hover {
              background-color: #007756 !important;
            }
          `}} />
          <a 
            href="mailto:contato@lacreisaude.com.br" 
            className="support-btn"
            style={{ 
              fontSize: '1rem', 
              fontWeight: 700, 
              color: '#FFFFFF', 
              backgroundColor: '#018762', 
              padding: '0.75rem 2rem', 
              borderRadius: '4px',
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(1, 135, 98, 0.15)'
            }}
            aria-label="Enviar um e-mail para o suporte da Lacrei Saúde"
          >
            Falar com Suporte
          </a>
        </div>
      </section>

    </div>
  );
}
