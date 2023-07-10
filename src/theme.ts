import { createGlobalStyle, useTheme } from 'styled-components';
import { ZIndex } from './utils/constants';

// const PoppinsRegular = require('./fonts/Poppins-Regular.ttf');
// const PoppinsSemiBold = require('./fonts/Poppins-SemiBold.ttf');
// const OpenSansSemiBold = require('./fonts/OpenSans-SemiBold.ttf');
// const OpenSansRegular = require('./fonts/OpenSans-Regular.ttf');
// const OpenSansBold = require('./fonts/OpenSans-Bold.ttf');
// const LeagueSpartanBold = require('./fonts/LeagueSpartan-Bold.otf');
// const LeagueSpartanBold = require('./fonts/LeagueSpartan-Bold.otf');

export interface TextTreatment {
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  fontWeight?: 'normal' | 'bold';
}

/** A list of breakpoints accessible by key/value. */
const breakpoints = {
  /** Above 1280 */
  lg: '1280px',
  /** Between 768 and  1279 */
  md: '768px',
  /** Below 767 */
  sm: '480px',
};

/** All available width breakpoint */
type Breakpoint = keyof typeof breakpoints;

/** Copy of `breakpoints` as integers */
const unitlessBreakpoints = {
  /** Above 1280 */
  lg: parseInt(breakpoints.lg, 10),
  /** Between 768 and  1279 */
  md: parseInt(breakpoints.md, 10),
  /** Below 480 */
  sm: parseInt(breakpoints.sm, 10),
};

/**
 * We alias breakpoints onto the scale so that styled-system has access
 * to the named breakpoints as well as the scale
 */
const BREAKPOINTS_SCALE = Object.assign(
  [breakpoints.sm, breakpoints.md, breakpoints.lg],
  breakpoints,
);

/** Available text variant names */
const TEXT_VARIANT_NAMES = [
  'H1-Regular',
  'H1-Bold',
  'H2-Regular',
  'H2-Bold',
  'H3-Regular',
  'H3-Bold',
  'H4-Regular',
  'H4-Bold',
  'H5-Regular',
  'H5-Bold',
  'H6-Regular',
  'H6-Bold',
  '16-Regular',
  '16-Bold',
  '14-Regular',
  '14-Bold',
  '12-Regular',
  '12-Bold',
  '11-Regular',
  '11-Bold',
  '10-Regular',
  '10-Bold',
  '9-Regular',
  '9-Bold',
  '8-Regular',
  '8-Bold',
] as const;

/** Available text variants */
const TEXT_VARIANTS: Record<
  typeof TEXT_VARIANT_NAMES[number],
TextTreatment
> = {
  'H1-Regular': {
    fontSize: '44px',
    lineHeight: '54px',
  },
  'H1-Bold': {
    fontSize: '44px',
    lineHeight: '54px',
    fontWeight: 'bold',
  },
  'H2-Regular': {
    fontSize: '40px',
    lineHeight: '54px',
  },
  'H2-Bold': {
    fontSize: '40px',
    lineHeight: '54px',
    fontWeight: 'bold',
  },
  'H3-Regular': {
    fontSize: '32px',
    lineHeight: '44px',
  },
  'H3-Bold': {
    fontSize: '32px',
    lineHeight: '44px',
    fontWeight: 'bold',
  },
  'H4-Regular': {
    fontSize: '24px',
    lineHeight: '32px',
  },
  'H4-Bold': {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 'bold',
  },
  'H5-Regular': {
    fontSize: '20px',
    lineHeight: '24px',
  },
  'H5-Bold': {
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 'bold',
  },
  'H6-Regular': {
    fontSize: '16px',
    lineHeight: '24px',
  },
  'H6-Bold': {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'bold',
  },
  '16-Regular': {
    fontSize: '16px',
    lineHeight: '20px',
  },
  '16-Bold': {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: 'bold',
  },
  '14-Regular': {
    fontSize: '14px',
    lineHeight: '18px',
  },
  '14-Bold': {
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: 'bold',
  },
  '12-Regular': {
    fontSize: '12px',
    lineHeight: '16px',
  },
  '12-Bold': {
    fontSize: '12px',
    lineHeight: '16px',
    fontWeight: 'bold',
  },
  '11-Regular': {
    fontSize: '11px',
    lineHeight: '16px',
  },
  '11-Bold': {
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: 'bold',
  },
  '10-Regular': {
    fontSize: '10px',
    lineHeight: '16px',
  },
  '10-Bold': {
    fontSize: '10px',
    lineHeight: '16px',
    fontWeight: 'bold',
  },
  '9-Regular': {
    fontSize: '9px',
    lineHeight: '16px',
  },
  '9-Bold': {
    fontSize: '9px',
    lineHeight: '16px',
    fontWeight: 'bold',
  },
  '8-Regular': {
    fontSize: '8px',
    lineHeight: '16px',
  },
  '8-Bold': {
    fontSize: '8px',
    lineHeight: '16px',
    fontWeight: 'bold',
  },
};

/** Name of typographic treatment */
type TextVariant = keyof typeof TEXT_VARIANTS;

interface CieloThemeInterface {
  OVERLAY: string;
  BREAKPOINTS_SCALE: typeof BREAKPOINTS_SCALE,
  textVariants: typeof TEXT_VARIANTS,
  grid: {
    breakpoints: {},
  }
  colors: {
    NEUTRAL_SHADE_0: string;
    SHADE_PLUS_1: string;
    SHADE_PLUS_2: string;
    SHADE_PLUS_3: string;
    BG_SHADE_PLUS_4: string;
    HIGH_CONTRAST: string;
    LOW_CONTRAST: string;
    SIDEBAR_HIGHLIGHT: string;
    SHADE_MINUS_3: string;
    SHADE_MINUS_2: string;
    SHADE_MINUS_1: string;
    MAIN_BLUE: string
    MEDIUM_BLUE: string
    LIGHT_BLUE: string
    MANGO: string
    DARK_BLUE: string
    YELLOW: string
    TEAL: string
    CANARY: string
    TANGY: string
    SKY: string
    FUSCIA: string
    CARRIBEAN_GREEN: string
    RED: string
    AMBER: string
    CRAYOLA_GREEN: string
    WHITE: string
    BLACK: string
    GREY: string
  },
  dropShadow: {
    REGULAR: string;
  },
  zIndex: {
    [key in ZIndex]: number;
  };
}

const DarkThemeColor = {
  SHADE_MINUS_3: '#F8F9FF',
  SHADE_MINUS_2: '#C2C3D4',
  SHADE_MINUS_1: '#777D92',
  NEUTRAL_SHADE_0: '#262C3F',
  SHADE_PLUS_1: '#595E71',
  SHADE_PLUS_2: '#282C36',
  SHADE_PLUS_3: '#1E1F23',
  BG_SHADE_PLUS_4: '#151517',
  HIGH_CONTRAST: '#F8F9FF',
  LOW_CONTRAST: '#6A7382',
  SIDEBAR_HIGHLIGHT: '#FCD547',
};

const DarkTheme = {
  OVERLAY: 'rgba(17,17,17,0.50)',
  dropShadow: {
    REGULAR: '',
  },
};

const LightTheme = {
  OVERLAY: 'rgba(255,255,255,0.50)',
  colors: {
    SHADE_MINUS_3: '#1F2128',
    SHADE_MINUS_2: '#70717C',
    SHADE_MINUS_1: '#91929F',
    NEUTRAL_SHADE_0: '#CCD0E2',
    SHADE_PLUS_1: '#FFFFFF',
    SHADE_PLUS_2: '#E4E4E8',
    SHADE_PLUS_3: '#F1F2F4',
    BG_SHADE_PLUS_4: '#F7F8FA',
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
    // colors.GREEN: '#1DD1A1',
    // system.GREEN: '#19BD64',
    ...DarkThemeColor,
    MAIN_BLUE: '#1D86E8',
    MEDIUM_BLUE: '#374475',
    LIGHT_BLUE: '#85C4FF',
    MANGO: '#CBAA00',
    DARK_BLUE: '#142A63',
    YELLOW: '#FCD547',
    TEAL: '#01C5E0',
    CANARY: '#CED225',
    TANGY: '#DD8442',
    SKY: '#2A5ABA',
    FUSCIA: '#E4599C',
    CARRIBEAN_GREEN: '#1DD1A1',
    RED: '#FF6B6B',
    AMBER: '#FE8F29',
    CRAYOLA_GREEN: '#19BD64',
    WHITE: '#FFFFFF',
    BLACK: '#131313',
    GREY: '#A5A6B8',
  },
  BREAKPOINTS_SCALE,
  textVariants: TEXT_VARIANTS,
  // Empty grid object to prevent `Grid` component from throwing
  grid: {
    breakpoints: {},
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

LightTheme.dropShadow.REGULAR = `0px 4px 30px 0px ${Theme.colors.GREY}`;
DarkTheme.dropShadow.REGULAR = `0px 4px 30px 0px ${Theme.colors.BLACK}`;

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

/** All available color keys */
type Color = keyof typeof Theme['colors'];

export {
  GlobalStyle, Theme, colors, LightTheme, DarkTheme, localTheme, CieloThemeInterface,
  Breakpoint, breakpoints, unitlessBreakpoints, TEXT_VARIANTS, TextVariant, TEXT_VARIANT_NAMES,
  Color,
};
