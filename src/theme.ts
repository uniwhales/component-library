import { createGlobalStyle, useTheme } from 'styled-components';
import { ZIndex } from './utils/constants';

// const PoppinsRegular = require('./fonts/Poppins-Regular.ttf');
// const PoppinsSemiBold = require('./fonts/Poppins-SemiBold.ttf');
// const OpenSansSemiBold = require('./fonts/OpenSans-SemiBold.ttf');
// const OpenSansRegular = require('./fonts/OpenSans-Regular.ttf');
// const OpenSansBold = require('./fonts/OpenSans-Bold.ttf');
// const LeagueSpartanBold = require('./fonts/LeagueSpartan-Bold.otf');
// const LeagueSpartanBold = require('./fonts/LeagueSpartan-Bold.otf');

interface CieloThemeInterface {
  OVERLAY: string;
  textShades: {
    SHADE_MINUS_3: string;
    SHADE_MINUS_2: string;
    SHADE_MINUS_1: string;
  },
  containerAndCardShades: {
    NEUTRAL_SHADE_0: string;
    SHADE_PLUS_1: string;
    SHADE_PLUS_2: string;
    SHADE_PLUS_3: string;
    BG_SHADE_PLUS_4: string;
  },
  contrastColor: {
    HIGH_CONTRAST: string;
    LOW_CONTRAST: string;
    SIDEBAR_HIGHLIGHT: string;
  },
  dropShadow: {
    REGULAR: string;
  },
  colors: {
    primary: {
      MAIN_BLUE: string;
      MEDIUM_BLUE: string;
      LIGHT_BLUE: string;
      MANGO: string;
      DARK_BLUE: string;
      YELLOW: string;
    },
    secondary: {
      TEAL: string;
      CANARY: string;
      TANGY: string;
      SKY: string;
      FUSCIA: string;
      GREEN: string;
    },
    system: {
      RED: string;
      AMBER: string;
      GREEN: string;
      WHITE: string;
      BLACK: string;
      GREY: string;
    },
  },
  zIndex: {
    [key in ZIndex]: number;
  };
}

const DarkTheme = {
  OVERLAY: 'rgba(17,17,17,0.50)',
  textShades: {
    SHADE_MINUS_3: '#F8F9FF',
    SHADE_MINUS_2: '#C2C3D4',
    SHADE_MINUS_1: '#777D92',
  },
  containerAndCardShades: {
    NEUTRAL_SHADE_0: '#262C3F',
    SHADE_PLUS_1: '#595E71',
    SHADE_PLUS_2: '#282C36',
    SHADE_PLUS_3: '#1E1F23',
    BG_SHADE_PLUS_4: '#151517',
  },
  contrastColor: {
    HIGH_CONTRAST: '#F8F9FF',
    LOW_CONTRAST: '#6A7382',
    SIDEBAR_HIGHLIGHT: '#FCD547',
  },
  dropShadow: {
    REGULAR: '',
  },
};

const LightTheme = {
  OVERLAY: 'rgba(255,255,255,0.50)',
  textShades: {
    SHADE_MINUS_3: '#1F2128',
    SHADE_MINUS_2: '#70717C',
    SHADE_MINUS_1: '#91929F',
  },
  containerAndCardShades: {
    NEUTRAL_SHADE_0: '#CCD0E2',
    SHADE_PLUS_1: '#FFFFFF',
    SHADE_PLUS_2: '#E4E4E8',
    SHADE_PLUS_3: '#F1F2F4',
    BG_SHADE_PLUS_4: '#F7F8FA',
  },
  contrastColor: {
    HIGH_CONTRAST: '#1D86E8',
    LOW_CONTRAST: '#80C6E4',
    SIDEBAR_HIGHLIGHT: '#1B82E2',
  },
  dropShadow: {
    REGULAR: '',
  },
};

const Theme: CieloThemeInterface = {
  ...DarkTheme,
  colors: {
    primary: {
      MAIN_BLUE: '#1D86E8',
      MEDIUM_BLUE: '#374475',
      LIGHT_BLUE: '#85C4FF',
      MANGO: '#CBAA00',
      DARK_BLUE: '#142A63',
      YELLOW: '#FCD547',
    },
    secondary: {
      TEAL: '#01C5E0',
      CANARY: '#CED225',
      TANGY: '#DD8442',
      SKY: '#2A5ABA',
      FUSCIA: '#E4599C',
      GREEN: '#1DD1A1',
    },
    system: {
      RED: '#FF6B6B',
      AMBER: '#FE8F29',
      GREEN: '#19BD64',
      WHITE: '#FFFFFF',
      BLACK: '#131313',
      GREY: '#A5A6B8',
    },
  },
  zIndex: {
    [ZIndex.BACKDROP]: 0,
    [ZIndex.SAFE_LAYER]: 1,
    [ZIndex.STICKY]: 2,
    [ZIndex.TOOLTIP]: 3,
    [ZIndex.OVERLAY]: 4,
    [ZIndex.MODAL]: 5,
    [ZIndex.TUTORIAL_TIMELINE]: 6,
  },
};

LightTheme.dropShadow.REGULAR = `0px 4px 30px 0px ${Theme.colors.system.GREY}`;
DarkTheme.dropShadow.REGULAR = `0px 4px 30px 0px ${Theme.colors.system.BLACK}`;

const { colors } = Theme;
const localTheme = () => useTheme() as typeof Theme;
const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    font-family: Poppins,sans-serif;
  }
  textarea {
    font-family: Poppins,sans-serif;
  }
`;

export {
  GlobalStyle, Theme, colors, LightTheme, DarkTheme, localTheme, CieloThemeInterface,
};
