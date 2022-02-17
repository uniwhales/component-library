import { TEXT_FONTS, TEXT_VARIANTS } from './typography/text';

/** A list of breakpoints accessible by key/value. */
export const breakpoints = {
  /** Above 1920 */
  lg: '1920px',
  /** Between 1280 and 1919 */
  md: '1280px',
  /** Between 768 and  1279 */
  sm: '768px',
  /** Below 767 */
  xs: '767px',
};

/** Copy of `breakpoints` as integers */
export const unitlessBreakpoints = {
  /** Above 1920 */
  lg: parseInt(breakpoints.lg, 10),
  /** Between 1280 and 1919 */
  md: parseInt(breakpoints.md, 10),
  /** Between 768 and  1279 */
  sm: parseInt(breakpoints.sm, 10),
  /** Below 767 */
  xs: parseInt(breakpoints.xs, 10),
};

/**
 * We alias breakpoints onto the scale so that styled-system has access
 * to the named breakpoints as well as the scale
 */
const BREAKPOINTS_SCALE = Object.assign(
  [breakpoints.sm, breakpoints.md, breakpoints.lg],
  breakpoints,
);

/**
 * All of the config for the Artsy theming system, based on the
 * design system from our design team
 */
export const THEME = {
  breakpoints: BREAKPOINTS_SCALE,

  colors: {
    /* === THEME AGNOSTIC === */

    /* PRMIARY (BRAND) COLORS */

    /* Primary Blues */
    '--UWLBlue': '#355DFF',
    '--WaterBlue': '#2979FE',

    /* Transparencies */
    '--ChalkDust': 'rgba(41, 121, 254, 0.1)',
    '--Lavendar': 'rgba(41, 121, 254, 0.5)',
    '--RainDrop': 'rgba(41, 121, 254, 0.8)',

    /* SECONDARY COLORS (THEME AGNOSTIC) */

    /* Secondary Hues */
    '--Turquoise': '#0993EC',
    '--Fuschia': '#E4599C',
    '--Purple': '#B769DC',
    '--Tangy': '#DD8442',

    /* SYSTEM COLORS (THEME AGNOSTIC) */

    /* System */
    '--SystemWhite': '#FFFFFF',
    '--SystemGreen': '#19BD64',
    '--SystemBlack': '#191B20',
    '--SystemRed': '#FF6B6B',
    '--SystemAmber': '#FE8F29',

    /* === DYNAMIC COLORS === */

    /* SHADES (CHANGING ON LIGHT AND DARK MODE) */

    /* Day */
    /* -3 to -1 gets used for predominantly for text  */
    /* 0 to +4  gets used for predominantly for containers */
    '--Shade-3': '#1F2128',
    '--Shade-2': '#808191',
    '--Shade-1': '#BBBCCE',
    '--NeutralShade0': '#E6EAFD',
    '--ShadePlus1': '#EBEDF4',
    '--ShadePlus2': '#F1F1F1',
    '--ShadePlus3': '#F7F7F7',
    '--BGShadePlus4': '#FFFFFF',

    /* Night */
    '--Shade-3N': '#F8F9FF',
    '--Shade-2N': '#BBBCCE',
    '--Shade-1N': '#666C81',
    '--NeutralShade0N': '#252E4F',
    '--ShadePlus1N': '#23293B',
    '--ShadePlus2N': '#1F232F',
    '--ShadePlus3N': '#1F2128',
    '--BGShadePlus4N': '#191B20',

    /*
    ! WARNING !

    these colors below are not in the color palette on figma
    however they were used in some components there

    */
    '--Shade-4': '#191B20',
    '--UWLDarkBlue': '#0846B5',
    '--PastelBlue': '#DCE6F1',
    '--ChalkDustUB10': '#2979FE1A',

    '--BlurpleGradient': 'linear-gradient(180deg, #2D75E2 0%, #4A00E0 100%)',
    '--BlurpleGradientHighlight':
      'linear-gradient(180deg, #509CF4 0%, #4A00E0 100%)',
  },

  gradients: {
    /* SYSTEM GRADIENTS (THEME AGNOSTIC) */
    /* Gradients */
    '--SystemChalkDustG':
      'linear-gradient(0deg, rgba(9, 147, 236, 0) 21.81%, rgba(9, 147, 236, 0.1) 70.37%)',
    '--SystemLavendarG':
      'linear-gradient(0deg, rgba(241, 2, 117, 0) 20.52%, rgba(241, 2, 117, 0.1) 123.83%)',

    /* SECONDARY GRADIENTS (THEME AGNOSTIC) */

    /* Gradients */
    '--SecondaryChalkDustG':
    'linear-gradient(0deg, rgba(9, 147, 236, 0) 21.81%, rgba(9, 147, 236, 0.1) 70.37%)',
    '--SecondaryLavendarG':
    'linear-gradient(0deg, rgba(241, 2, 117, 0) 20.52%, rgba(241, 2, 117, 0.1) 123.83%)',
    '--SecondaryRainDropG':
    'linear-gradient(0deg, rgba(221, 132, 66, 0) -1.31%, rgba(221, 132, 66, 0.1) 80.31%)',

    /*
    ! WARNING !

    these gradients below are not in the color palette on figma
    however they were used in some components there

    */
    '--Shade-4': '#191B20',
    '--UWLDarkBlue': '#0846B5',
    '--PastelBlue': '#DCE6F1',
    '--ChalkDustUB10': '#2979FE1A',

    '--BlurpleGradient': 'linear-gradient(180deg, #2D75E2 0%, #4A00E0 100%)',
    '--BlurpleGradientHighlight':
      'linear-gradient(180deg, #509CF4 0%, #4A00E0 100%)',
  },

  fonts: TEXT_FONTS,

  // prettier-ignore
  // Media queries to work with in web
  mediaQueries: {
    lg: `(min-width: ${breakpoints.lg})`,
    md: `(min-width: ${breakpoints.md}) and (max-width: ${parseInt(breakpoints.lg, 10) - 1}px)`,
    sm: `(min-width: ${breakpoints.sm}) and (max-width: ${parseInt(breakpoints.md, 10) - 1}px)`,
    xs: `(max-width: ${parseInt(breakpoints.sm, 10) - 1}px)`,
    /** Determines if the input device has the notion of hover, e.g. mouse. */
    hover: `not all and (pointer: coarse), not all and (-moz-touch-enabled: 1)`,
  },

  // Empty grid object to prevent `Grid` component from throwing
  grid: {
    breakpoints: {},
  },

  space: {
    // unit: px value
    /** Equivalent to 5px  */
    0.5: '5px',
    /** Equivalent to 10px  */
    1: '10px',
    /** Equivalent to 20px  */
    2: '20px',
    /** Equivalent to 40px  */
    4: '40px',
    /** Equivalent to 60px  */
    6: '60px',
    /** Equivalent to 120px  */
    12: '120px',
  },

  textVariants: TEXT_VARIANTS,
} as const;

/** All available px spacing maps */
export type SpacingUnit = keyof typeof THEME['space'];
/** All available color keys */
export type Color = keyof typeof THEME['colors'];
/** All available width breakpoint */
export type Breakpoint = keyof typeof breakpoints;
