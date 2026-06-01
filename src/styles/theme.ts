export const theme = {
  colors: {
    // Escala Primária (Emerald)
    emerald: {
      20: '#B2DFD0',
      30: '#80CAB1',
      40: '#4FB494',
      50: '#29A480',
      60: '#018762', // Cor principal de destaques/interativos
      70: '#007756', // Hover de botões primários
      80: '#014C37', // pressed states / contrastes profundos
    },
    // Escala Secundária (Green - Sucesso)
    green: {
      30: '#9CE2B2',
      40: '#75D693',
      50: '#4ECB74',
      60: '#00B15C',
      70: '#298A46',
      80: '#113B1E',
    },
    // Escala Neutra (Gray)
    gray: {
      10: '#FFFFFF',
      20: '#F0F0F0',
      30: '#CFCFCF',
      40: '#BFBFBF',
      50: '#737373',
      60: '#515151',
      70: '#2D2D2D',
      80: '#131313',
    },
    // Escala de Alerta/Erro (Red/Orange/Blue)
    red: {
      30: '#F5BCBC',
      40: '#EE9090',
      50: '#D63D1D',
      60: '#BC1C1C',
      70: '#9B1717',
      80: '#6F1111',
    },
    orange: {
      90: '#B95113',
    },
    blue: {
      10: '#EBF2F9',
      20: '#C5D8EB',
      30: '#A0BEDD',
      40: '#6693BE',
      50: '#3D719F',
      60: '#285B8A',
    },
    // Tokens Semânticos
    text: {
      heading: '#131313', // gray-80
      body: '#2D2D2D',    // gray-70
      accent: '#018762',  // emerald-60
      error: '#BC1C1C',   // red-60
      light: '#FFFFFF',
    },
    border: {
      default: '#131313',  // gray-80
      subtle: '#2D2D2D',   // gray-70
      success: '#298A46',  // green-70
      divider: '#B2DFD0',  // emerald-20
    },
    icon: {
      accent: '#018762',
      success: '#298A46',
      error: '#BC1C1C',
      warning: '#B95113',
      info: '#3D719F',
    }
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    headline: {
      xl: {
        fontSize: '3rem', // 48px
        fontWeight: '700',
        lineHeight: '1.2',
      },
      lg: {
        fontSize: '2.5rem', // 40px
        fontWeight: '700',
        lineHeight: '1.2',
      },
      base: {
        fontSize: '2rem', // 32px
        fontWeight: '700',
        lineHeight: '1.2',
      },
      sm: {
        fontSize: '1.5rem', // 24px
        fontWeight: '400',
        lineHeight: '1.5',
      },
      smHigh: {
        fontSize: '1.5rem', // 24px
        fontWeight: '700',
        lineHeight: '1.5',
      },
    },
    text: {
      xlHigh: {
        fontSize: '1.125rem', // 18px
        fontWeight: '700',
        lineHeight: '1.5',
      },
      xl: {
        fontSize: '1.125rem', // 18px
        fontWeight: '400',
        lineHeight: '1.5',
      },
      base: {
        fontSize: '1rem', // 16px
        fontWeight: '400',
        lineHeight: '1.5',
      },
      baseHigh: {
        fontSize: '1rem', // 16px
        fontWeight: '700',
        lineHeight: '1.5',
      },
      sm: {
        fontSize: '0.875rem', // 14px
        fontWeight: '400',
        lineHeight: '1.5',
      },
      smHigh: {
        fontSize: '0.875rem', // 14px
        fontWeight: '600',
        lineHeight: '1.5',
      },
      xs: {
        fontSize: '0.75rem', // 12px
        fontWeight: '400',
        lineHeight: '1.5',
      },
      xsHigh: {
        fontSize: '0.75rem', // 12px
        fontWeight: '700',
        lineHeight: '1.5',
      },
    },
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    xxl: '3rem',     // 48px
    xxxl: '4rem',    // 64px
  },
  borderRadius: {
    none: '0px',
    sharp: '2px',
    medium: '4px', // Raio máximo de 4px para preservar a estética geométrica
    circle: '9999px',
  },
};

export type ThemeType = typeof theme;
