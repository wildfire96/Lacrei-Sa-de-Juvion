'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Hero Section (Above the fold) - carrega imediatamente
import HeroSection from '../components/home/HeroSection';

// Componentes Lazy Loaded (Below the fold) - defer hydration para zerar TBT
const RoleSelectionSection = dynamic(() => import('../components/home/RoleSelectionSection'), {
  ssr: true, // Queremos SSR para SEO, mas a hidratação será deferida no client
});
const PillarsSection = dynamic(() => import('../components/home/PillarsSection'), {
  ssr: true,
});
const AboutUsSection = dynamic(() => import('../components/home/AboutUsSection'), {
  ssr: true,
});
const HowItWorksSection = dynamic(() => import('../components/home/HowItWorksSection'), {
  ssr: true,
});
const LocationSection = dynamic(() => import('../components/home/LocationSection'), {
  ssr: true,
});

export default function Home() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
      {/* 1. SEÇÃO HERO */}
      <HeroSection />

      {/* 2. SEÇÃO DE PERFIS (PACIENTES E PROFISSIONAIS) */}
      <RoleSelectionSection />

      {/* 3. SEÇÃO DE PILARES */}
      <PillarsSection />

      {/* 4. SEÇÃO SOBRE NÓS */}
      <AboutUsSection />

      {/* 5. SEÇÃO COMO FUNCIONA (JORNADA DO PACIENTE) */}
      <HowItWorksSection />

      {/* 6. SEÇÃO DE LOCALIZAÇÃO (MAPA FACADE) */}
      <LocationSection />
    </div>
  );
}
