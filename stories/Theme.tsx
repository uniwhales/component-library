export enum Color {
  'UWLBlue' = 'UWLBlue',
  'WaterBlue' = 'WaterBlue',
  'ChalkDust' = 'ChalkDust',
  'Lavendar' = 'Lavendar',
  'RainDrop' = 'RainDrop',
  'Turquoise' = 'Turquoise',
  'Fuschia' = 'Fuschia',
  'Purple' = 'Purple',
  'Tangy' = 'Tangy',
  'SystemWhite' = 'SystemWhite',
  'SystemGreen' = 'SystemGreen',
  'SystemBlack' = 'SystemBlack',
  'SystemRed' = 'SystemRed',
  'SystemAmber' = 'SystemAmber',
  'ShadeMinus3' = 'ShadeMinus3',
  'ShadeMinus2' = 'ShadeMinus2',
  'ShadeMinus1' = 'ShadeMinus1',
  'NeutralShade0' = 'NeutralShade0',
  'ShadePlus1' = 'ShadePlus1',
  'ShadePlus2' = 'ShadePlus2',
  'ShadePlus3' = 'ShadePlus3',
  'BGShadePlus4' = 'BGShadePlus4',
  'ShadeMinus3N' = 'ShadeMinus3N',
  'ShadeMinus2N' = 'ShadeMinus2N',
  'ShadeMinus1N' = 'ShadeMinus1N',
  'NeutralShade0N' = 'NeutralShade0N',
  'ShadePlus1N' = 'ShadePlus1N',
  'ShadePlus2N' = 'ShadePlus2N',
  'ShadePlus3N' = 'ShadePlus3N',
  'BGShadePlus4N' = 'BGShadePlus4N',
  'ShadeMinus4' = 'ShadeMinus4',
  'UWLDarkBlue' = 'UWLDarkBlue',
  'PastelBlue' = 'PastelBlue',
  'ChalkDustUB10' = 'ChalkDustUB10',
}

export enum Gradient {
  'SystemChalkDustG' = 'SystemChalkDustG',
  'SystemLavendarG' = 'SystemLavendarG',
  'SecondaryChalkDustG' = 'SecondaryChalkDustG',
  'SecondaryLavendarG' = 'SecondaryLavendarG',
  'SecondaryRainDropG' = 'SecondaryRainDropG',
  'BlurpleGradient' = 'BlurpleGradient',
  'BlurpleGradientHighlight' = 'BlurpleGradientHighlight',
}

export enum FontSize {
  H1Headline = 'H1Headline',
  H2Headline = 'H2Headline',
  H3Headline = 'H3Headline',
  H4Headline = 'H4Headline',
  H5Headline = 'H5Headline',
  H6Headline = 'H6Headline',
  BodyLarge = 'BodyLarge',
  Body = 'Body',
  Caption = 'Caption',
  Overline = 'Overline',
}

type Theme = {
  colors: { [key in Color]: string },
  gradients: { [key in Gradient]: string },
  sizes: { [key in FontSize]: string }
};

/**
 * All of the config for the Artsy theming system, based on the
 * design system from our design team
 */
export const THEME: Theme = {
  sizes: {
    [FontSize.H1Headline]: '54px',
    [FontSize.H2Headline]: '50px',
    [FontSize.H3Headline]: '48px',
    [FontSize.H4Headline]: '32px',
    [FontSize.H5Headline]: '24px',
    [FontSize.H6Headline]: '20px',
    [FontSize.BodyLarge]: '18px',
    [FontSize.Body]: '16px',
    [FontSize.Caption]: '10px',
    [FontSize.Overline]: '8px',
  },
  colors: {
    /* === THEME AGNOSTIC === */

    /* PRMIARY (BRAND) COLORS */

    /* Primary Blues */
    [Color.UWLBlue]: '#355DFF',
    [Color.WaterBlue]: '#2979FE',

    /* Transparencies */
    [Color.ChalkDust]: 'rgba(41, 121, 254, 0.1)',
    [Color.Lavendar]: 'rgba(41, 121, 254, 0.5)',
    [Color.RainDrop]: 'rgba(41, 121, 254, 0.8)',

    /* SECONDARY COLORS (THEME AGNOSTIC) */

    /* Secondary Hues */
    [Color.Turquoise]: '#0993EC',
    [Color.Fuschia]: '#E4599C',
    [Color.Purple]: '#B769DC',
    [Color.Tangy]: '#DD8442',

    /* SYSTEM COLORS (THEME AGNOSTIC) */

    /* System */
    [Color.SystemWhite]: '#FFFFFF',
    [Color.SystemGreen]: '#19BD64',
    [Color.SystemBlack]: '#191B20',
    [Color.SystemRed]: '#FF6B6B',
    [Color.SystemAmber]: '#FE8F29',

    /* === DYNAMIC COLORS === */

    /* SHADES (CHANGING ON LIGHT AND DARK MODE) */

    /* Day */
    /* -3 to -1 gets used for predominantly for text  */
    /* 0 to +4  gets used for predominantly for containers */
    [Color.ShadeMinus3]: '#1F2128',
    [Color.ShadeMinus2]: '#808191',
    [Color.ShadeMinus1]: '#BBBCCE',
    [Color.NeutralShade0]: '#E6EAFD',
    [Color.ShadePlus1]: '#EBEDF4',
    [Color.ShadePlus2]: '#F1F1F1',
    [Color.ShadePlus3]: '#F7F7F7',
    [Color.BGShadePlus4]: '#FFFFFF',

    /* Night */
    [Color.ShadeMinus3N]: '#F8F9FF',
    [Color.ShadeMinus2N]: '#BBBCCE',
    [Color.ShadeMinus1N]: '#666C81',
    [Color.NeutralShade0N]: '#252E4F',
    [Color.ShadePlus1N]: '#23293B',
    [Color.ShadePlus2N]: '#1F232F',
    [Color.ShadePlus3N]: '#1F2128',
    [Color.BGShadePlus4N]: '#191B20',

    /*
    ! WARNING !

    these colors below are not in the color palette on figma
    however they were used in some components there

    */
    [Color.ShadeMinus4]: '#191B20',
    [Color.UWLDarkBlue]: '#0846B5',
    [Color.PastelBlue]: '#DCE6F1',
    [Color.ChalkDustUB10]: '#2979FE1A',

  },

  gradients: {
    /* SYSTEM GRADIENTS (THEME AGNOSTIC) */
    /* Gradients */
    [Gradient.SystemChalkDustG]:
      'linear-gradient(0deg, rgba(9, 147, 236, 0) 21.81%, rgba(9, 147, 236, 0.1) 70.37%)',
    [Gradient.SystemLavendarG]:
      'linear-gradient(0deg, rgba(241, 2, 117, 0) 20.52%, rgba(241, 2, 117, 0.1) 123.83%)',

    /* SECONDARY GRADIENTS (THEME AGNOSTIC) */

    /* Gradients */
    [Gradient.SecondaryChalkDustG]:
    'linear-gradient(0deg, rgba(9, 147, 236, 0) 21.81%, rgba(9, 147, 236, 0.1) 70.37%)',
    [Gradient.SecondaryLavendarG]:
    'linear-gradient(0deg, rgba(241, 2, 117, 0) 20.52%, rgba(241, 2, 117, 0.1) 123.83%)',
    [Gradient.SecondaryRainDropG]:
    'linear-gradient(0deg, rgba(221, 132, 66, 0) -1.31%, rgba(221, 132, 66, 0.1) 80.31%)',

    /*
    ! WARNING !

    these gradients below are not in the color palette on figma
    however they were used in some components there

    */
    [Gradient.BlurpleGradient]: 'linear-gradient(180deg, #2D75E2 0%, #4A00E0 100%)',
    [Gradient.BlurpleGradientHighlight]:
      'linear-gradient(180deg, #509CF4 0%, #4A00E0 100%)',
  },
} as const;
