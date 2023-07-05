// import original module declarations
import 'styled-components';
import { ZIndex } from '../utils/constants';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
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
}
