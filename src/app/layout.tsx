import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StyledComponentsRegistry from '../lib/registry';
import ThemeProviderWrapper from '../lib/ThemeProviderWrapper';
import BottomHeader from '../components/globals/BottomHeader';
import Footer from '../components/globals/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Lacrei Saúde | Conexão Segura e Acolhimento LGBTQIAPN+',
  description: 'Conectamos pessoas da comunidade LGBTQIAPN+ a profissionais de saúde qualificados que priorizam o bem-estar físico e mental com empatia e segurança.',
  keywords: ['Lacrei Saúde', 'LGBTQIA+', 'saúde inclusiva', 'acolhimento', 'atendimento médico', 'psicologia inclusiva'],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`} suppressHydrationWarning>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            {/* Header Flutuante Inferior */}
            <BottomHeader />
            
            {/* Conteúdo Principal */}
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {children}
            </main>
            
            {/* Rodapé */}
            <Footer />
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
