import baseStyled, { ThemedStyledInterface, createGlobalStyle, useTheme } from 'styled-components';
import { ZIndex } from './utils/constants';

// const PoppinsRegular = require('./fonts/Poppins-Regular.ttf');
// const PoppinsSemiBold = require('./fonts/Poppins-SemiBold.ttf');
// const OpenSansSemiBold = require('./fonts/OpenSans-SemiBold.ttf');
// const OpenSansRegular = require('./fonts/OpenSans-Regular.ttf');
// const OpenSansBold = require('./fonts/OpenSans-Bold.ttf');
// const LeagueSpartanBold = require('./fonts/LeagueSpartan-Bold.otf');

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
    LOW_CONTRAST: '#BBBCCE',
  },
  inverseContrastColor: {
    INVERSE_HIGH_CONTRAST: '#F8F9FF',
    INVERSE_LOW_CONTRAST: '#BBBCCE',
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
    NEUTRAL_SHADE_0: '#D1DAFF',
    SHADE_PLUS_1: '#FFFFFF',
    SHADE_PLUS_2: '#FDFDFF',
    SHADE_PLUS_3: '#F9FAFF',
    BG_SHADE_PLUS_4: '#EFF1F8',
  },
  contrastColor: {
    HIGH_CONTRAST: '#355DFF',
    LOW_CONTRAST: '#0993EC',
  },
  inverseContrastColor: {
    INVERSE_HIGH_CONTRAST: '#355DFF',
    INVERSE_LOW_CONTRAST: '#0993EC',
  },
  dropShadow: {
    REGULAR: '',
  },
};

const Theme = {
  ...DarkTheme,
  colors: {
    primary: {
      UWL_BLUE: '#355DFF',
      WATER_BLUE: '#2979FE',
      DARK_BLUE: '#0846B5',
    },
    secondary: {
      TURQUOISE: '#0993EC',
      FUSCHIA: '#E4599C',
      TANGY: '#DD8442',
      PURPLE: '#B769DC',
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
    primary: {
      BLURPLE: 'linear-gradient(180deg, #2D75E2 0%, #4A00E0 100%)',
      BLURPLE_FLIPPED: 'linear-gradient(180deg, #4A00E0 0%, #2D75E2 94.73%)',
      BLURPLE_HIGHLIGHTED: 'linear-gradient(180deg, #509CF4 0%, #4A00E0 100%)',
    },
    secondary: {
      TURQUOISE: 'linear-gradient(0deg, rgba(9, 147, 236, 0) 21.81%, rgba(9, 147, 236, 0.1) 70.37%)',
      FUSCHIA: 'linear-gradient(0deg, rgba(241, 2, 117, 0) 20.52%, rgba(241, 2, 117, 0.1) 123.83%)',
      TANGY: 'linear-gradient(0deg, rgba(221, 132, 66, 0) -1.31%, rgba(221, 132, 66, 0.1) 80.31%) ',
    },
    system: {
      CHALK_DUST: 'linear-gradient(180deg, #FF6B6B 0%, rgba(255, 107, 107, 0) 100%)',
      LAVENDAR: 'linear-gradient(180deg, #1DD1A1 0%, rgba(29, 209, 161, 0) 100%)',
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
  GlobalStyle, Theme, colors, gradients, LightTheme, DarkTheme, localTheme,
};
export const Styled = baseStyled as ThemedStyledInterface<typeof Theme>;
