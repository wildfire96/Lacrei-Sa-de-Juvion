'use client';

import React from 'react';
import styled from 'styled-components';

interface LogoProps {
  height?: number;
  showText?: boolean;
}

export default function Logo({ height = 40, showText = true }: LogoProps) {
  // O logotipo oficial possui uma proporção de largura baseada na altura
  const width = showText ? height * 2.85 : height * 1.05;

  return (
    <LogoSvg
      width={width}
      height={height}
      viewBox={showText ? "0 0 240 84" : "0 0 84 84"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lacrei Saúde"
      role="img"
    >
      {/* Monograma LS (Símbolo Oficial) */}
      <path
        d="M 18 10 
           L 18 56 
           C 18 69, 29 80, 42 80 
           L 66 80 
           C 79 80, 90 69, 90 56 
           L 90 38 
           C 90 25, 79 14, 66 14 
           L 46 14 
           C 33 14, 22 25, 22 38
           L 22 10"
        stroke="#018762"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {showText && (
        <g id="lacrei-saude-text">
          {/* Lacrei */}
          <text
            x="110"
            y="35"
            fill="#018762"
            fontFamily="var(--font-inter), 'Inter', sans-serif"
            fontSize="28px"
            fontWeight="700"
            letterSpacing="-0.03em"
          >
            Lacrei
          </text>
          {/* Saúde */}
          <text
            x="110"
            y="68"
            fill="#018762"
            fontFamily="var(--font-inter), 'Inter', sans-serif"
            fontSize="28px"
            fontWeight="700"
            letterSpacing="-0.03em"
          >
            Saúde
          </text>
        </g>
      )}
    </LogoSvg>
  );
}

const LogoSvg = styled.svg`
  display: block;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.95;
  }
`;
