import baseStyled, { ThemedStyledInterface, createGlobalStyle, useTheme } from 'styled-components';
import { ZIndex } from './utils/constants';

// const PoppinsRegular = require('./fonts/Poppins-Regular.ttf');
// const PoppinsSemiBold = require('./fonts/Poppins-SemiBold.ttf');
// const OpenSansSemiBold = require('./fonts/OpenSans-SemiBold.ttf');
// const OpenSansRegular = require('./fonts/OpenSans-Regular.ttf');
// const OpenSansBold = require('./fonts/OpenSans-Bold.ttf');
// const LeagueSpartanBold = require('./fonts/LeagueSpartan-Bold.otf');

enum SvgGradients {
  'MAIN_BLUE_GRADIENT' = 'MAIN_BLUE_GRADIENT',
  'MAIN_BLUE_GRADIENT_FLIPPED' = 'MAIN_BLUE_GRADIENT_FLIPPED',
  'MAIN_HIGHLIGHT_GRADIENT' = 'MAIN_HIGHLIGHT_GRADIENT',
  'TEAL' = 'TEAL',
  'CANARY' = 'CANARY',
  'TANGY' = 'TANGY',
  'SKY' = 'SKY',
  'GREEN' = 'GREEN',
}

const DarkTheme = {
  OVERLAY: 'rgba(17,17,17,0.50)',
  textShades: {
    SHADE_MINUS_3: '#F8F9FF',
    SHADE_MINUS_2: '#BBBCCE',
    SHADE_MINUS_1: '#666C81',
  },
  containerAndCardShades: {
    NEUTRAL_SHADE_0: '#252E4F',
    SHADE_PLUS_1: '#23293B',
    SHADE_PLUS_2: '#1F232F',
    SHADE_PLUS_3: '#1F2128',
    BG_SHADE_PLUS_4: '#191B20',
  },
  contrastColor: {
    HIGH_CONTRAST: '#F8F9FF',
    LOW_CONTRAST: '#6A7382',
  },
  dropShadow: {
    REGULAR: '',
  },
};

const LightTheme = {
  OVERLAY: 'rgba(255,255,255,0.50)',
  textShades: {
    SHADE_MINUS_3: '#1F2128',
    SHADE_MINUS_2: '#575761',
    SHADE_MINUS_1: '#797A84',
  },
  containerAndCardShades: {
    NEUTRAL_SHADE_0: '#C1E1FF',
    SHADE_PLUS_1: '#FFFFFF',
    SHADE_PLUS_2: '#F7F8FA',
    SHADE_PLUS_3: '#F0F1F5',
    BG_SHADE_PLUS_4: '#E2E4EB',
  },
  contrastColor: {
    HIGH_CONTRAST: '#1D86E8',
    LOW_CONTRAST: '#80C6E4',
  },
  dropShadow: {
    REGULAR: '',
  },
};

const Theme = {
  ...DarkTheme,
  colors: {
    primary: {
      MAIN_BLUE: '#1D86E8',
      MANGO: '#CBAA00',
      DARK_BLUE: '#142A63',
    },
    secondary: {
      TEAL: '#01C5E0',
      CANARY: '#CED225',
      TANGY: '#DD8442',
      SKY: '#2A5ABA',
    },
    system: {
      RED: '#FF6B6B',
      AMBER: '#FE8F29',
      GREEN: '#19BD64',
      WHITE: '#FFFFFF',
      BLACK: '#131313',
      GREY: '#A5A6B8',
      DISABLED: '#23293B',
    },
  },
  gradients: {
    svg: SvgGradients,
    primary: {
      MAIN_BLUE_GRADIENT: 'linear-gradient(180deg, #5AD7F9 0%, #255296 100%)',
      MAIN_BLUE_GRADIENT_FLIPPED: 'linear-gradient(180deg, #255296 0%, #5AD7F9 100%)',
      MAIN_HIGHLIGHT_GRADIENT: 'linear-gradient(180deg, #255296 0%, #95E6FF 100%)',
    },
    secondary: {
      TEAL: 'linear-gradient(180deg, #OlAAEO 0%, #COFBFF 100%)',
      CANARY: 'linear-gradient(180deg, ##EEFF41 0%, #DB9C00 100%)',
      TANGY: 'linear-gradient(180deg, #AD3B72 0%, #DD8442 100%)',
      SKY: 'linear-gradient(180deg, #489BFC 0%, #2D467F 100%)',

    },
    system: {
      GREEN: 'linear-gradient(180deg, #1DD1A1 0%, #CEFF41 100%)',
    },
  },
  zIndex: ZIndex,
};

LightTheme.dropShadow.REGULAR = `0px 4px 30px 0px ${Theme.colors.system.GREY}`;
DarkTheme.dropShadow.REGULAR = `0px 4px 30px 0px ${Theme.colors.system.BLACK}`;

const { colors, gradients } = Theme;
const localTheme = () => useTheme() as typeof Theme;
const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    font-family: Poppins,sans-serif;
  }
`;

export {
  GlobalStyle, Theme, colors, gradients, LightTheme, DarkTheme, localTheme, SvgGradients,
};
export const Styled = baseStyled as ThemedStyledInterface<typeof Theme>;
