/** Available fonts */
export const TEXT_FONTS = {
  poppins: '"Poppins", sans-serif',
  leagueSpartan: '"League Spartan", sans-serif',
  openSans: '"Open Sans", sans-serif',
};

export interface TextTreatment {
  fontSize: string;
  lineHeight: TextLineHeight;
  letterSpacing?: TextLetterSpacing;
  fontWeight?: 'normal' | 'bold';
}

/** font-size scale */

export enum TextFontSize {
  'size12' = 'size12',
  'size11' = 'size11',
  'size10' = 'size10',
  'size9' = 'size9',
  'size8' = 'size8',
  'size7' = 'size7',
  'size6' = 'size6',
  'size5' = 'size5',
  'size4' = 'size4',
  'size3' = 'size3',
  'size2' = 'size2',
  'size1' = 'size1',
}

export const TEXT_FONT_SIZES: { [key in keyof typeof TextFontSize]: string } = {
  [TextFontSize.size12]: '62px',
  [TextFontSize.size11]: '55px',
  [TextFontSize.size10]: '48px',
  [TextFontSize.size9]: '32px',
  [TextFontSize.size8]: '28px',
  [TextFontSize.size7]: '24px',
  [TextFontSize.size6]: '18px',
  [TextFontSize.size5]: '16px',
  [TextFontSize.size4]: '15px',
  [TextFontSize.size3]: '14px',
  [TextFontSize.size2]: '13px',
  [TextFontSize.size1]: '12px',
};

/** line-height scale */
export enum TextLineHeight {
  'solid' = 'solid',
  'title' = 'title',
  'body' = 'body',
}
export const TEXT_LINE_HEIGHTS: { [key in keyof typeof TextLineHeight]: number } = {
  [TextLineHeight.solid]: 1,
  [TextLineHeight.title]: 1.25,
  [TextLineHeight.body]: 1.5,
};

/** letter-spacing scale */
export enum TextLetterSpacing {
  tight = 'tight',
  tightest = 'tightest',
}
export const TEXT_LETTER_SPACING: { [key in keyof typeof TextLetterSpacing]: string } = {
  tight: '-0.02em',
  tightest: '-0.03em',
};

/** Names of typographic treatments */
export enum TextVariantName {
  'largeTitle' = 'largeTitle',
  'title' = 'title',
  'subtitle' = 'subtitle',
  'text' = 'text',
  'mediumText' = 'mediumText',
  'caption' = 'caption',
  'small' = 'small',
}

export enum TextVariant {
  'large' = 'large',
  'small' = 'small',
}

/** Available typographic treatments */
export const TEXT_VARIANTS: Record<
TextVariant,
Record<TextVariantName, TextTreatment>
> = {
  [TextVariant.large]: {
    [TextVariantName.largeTitle]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size9],
      lineHeight: TextLineHeight.title,
      letterSpacing: TextLetterSpacing.tight,
      fontWeight: 'normal',
    },
    [TextVariantName.title]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size7],
      lineHeight: TextLineHeight.title,
      letterSpacing: TextLetterSpacing.tight,
      fontWeight: 'normal',
    },
    [TextVariantName.subtitle]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size6],
      lineHeight: TextLineHeight.title,
      fontWeight: 'normal',
    },
    [TextVariantName.text]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size3],
      lineHeight: TextLineHeight.body,
      fontWeight: 'normal',
    },
    [TextVariantName.mediumText]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size3],
      lineHeight: TextLineHeight.body,
      fontWeight: 'bold',
    },
    [TextVariantName.caption]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size2],
      lineHeight: TextLineHeight.body,
      fontWeight: 'normal',
    },
    [TextVariantName.small]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size1],
      lineHeight: TextLineHeight.body,
      fontWeight: 'normal',
    },
  },
  [TextVariant.small]: {
    [TextVariantName.largeTitle]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size8],
      lineHeight: TextLineHeight.title,
      letterSpacing: TextLetterSpacing.tight,
      fontWeight: 'normal',
    },
    [TextVariantName.title]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size6],
      lineHeight: TextLineHeight.title,
      letterSpacing: TextLetterSpacing.tight,
      fontWeight: 'normal',
    },
    [TextVariantName.subtitle]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size5],
      lineHeight: TextLineHeight.title,
      fontWeight: 'normal',
    },
    [TextVariantName.text]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size4],
      lineHeight: TextLineHeight.body,
      fontWeight: 'normal',
    },
    [TextVariantName.mediumText]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size4],
      lineHeight: TextLineHeight.body,
      fontWeight: 'bold',
    },
    [TextVariantName.caption]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size3],
      lineHeight: TextLineHeight.body,
      fontWeight: 'normal',
    },
    [TextVariantName.small]: {
      fontSize: TEXT_FONT_SIZES[TextFontSize.size2],
      lineHeight: TextLineHeight.body,
      fontWeight: 'normal',
    },
  },
};

/**
 * Type definition for font objects
 */
export interface FontDefinition {
  fontFamily: string;
  fontWeight?: string | number;
  fontStyle?: string;
}

/**
 * Type definition for font value properties which can either
 * be an object for complex definitions or a string for single entries.
 */
export type FontValue = string | FontDefinition;

/**
 * Defines the shape of the font family
 */
export interface FontFamily {
  sans: {
    regular: FontValue;
    italic: FontValue;
    medium: FontValue;
    mediumItalic: FontValue;
  };
  serif: {
    regular: FontValue;
    italic: FontValue;
    semibold: FontValue;
  };
  poppins: {
    regular: FontValue;
    semibold: FontValue;
  };
  leagueSpartan: {
    bold: FontValue;
  }
  display: {
    regular: FontValue;
  };
}

const sansFallback = '"Helvetica Neue", Helvetica, Arial, sans-serif';
const poppins = `'Poppins', ${sansFallback}`;

/**
 * A map of the font families and their settings
 */
export const fontFamily: FontFamily = {
  leagueSpartan: {
    bold: {
      fontFamily: `League Spartan, ${sansFallback}`,
      fontWeight: 'bold',
    },
  },
  poppins: {
    regular: poppins,
    semibold: {
      fontFamily: poppins,
      fontWeight: 500,
    },
  },
  sans: {
    regular: `Unica77LLWebRegular, ${sansFallback}`,
    italic: {
      fontFamily: `Unica77LLWebItalic, ${sansFallback}`,
      fontStyle: 'italic',
    },
    medium: {
      fontFamily: `Unica77LLWebMedium, ${sansFallback}`,
      fontWeight: 500,
    },
    mediumItalic: {
      fontFamily: `Unica77LLWebMediumItalic, ${sansFallback}`,
      fontWeight: 500,
      fontStyle: 'italic',
    },
  },
  serif: {
    regular:
      '\'Adobe Garamond W08\', \'adobe-garamond-pro\', \'AGaramondPro-Regular\', \'Times New Roman\', Times, serif',
    italic: {
      fontFamily:
        '\'Adobe Garamond W08\', \'adobe-garamond-pro\', \'AGaramondPro-Regular\', \'Times New Roman\', Times, serif',
      fontStyle: 'italic',
    },
    semibold: {
      fontFamily:
        '\'Adobe Garamond W08\', \'adobe-garamond-pro\', \'AGaramondPro-Regular\', \'Times New Roman\', Times, serif',
      fontWeight: 600,
    },
  },
  display: {
    regular:
      '\'ITC Avant Garde Gothic W04\',\'AvantGardeGothicITCW01D 731075\', AvantGardeGothicITCW01Dm, Helvetica, sans-serif',
  },
};
