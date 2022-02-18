import Styled, { css } from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  ResponsiveValue,
  system,
  typography,
  TypographyProps,
} from 'styled-system';
import { Color, THEME } from '../Theme';
import { TextTreatment, TextVariant, TEXT_VARIANTS } from '../typography/text';

/** BaseTextProps */
export type BaseTextProps = TypographyProps &
Omit<ColorProps, 'color'> & {
  /**
     * @description
     * Variants of the text. Possible to pass an array that
     * behaves accordingly to the media breakpoints ["sm", "md", "lg", "xl"]
     * @example
     * "sm"
     * "md"
     * ["md", "sm"]
     * @see {@link TextVariant}
   */
  variant?: ResponsiveValue<TextTreatment>;
  textColor?: Color;
  /*
    Max number of lines before truncating the content with an ellipsis at the end of the last line.
    Overwriting display is required for this.
  */
  lineClamp?: number;
};

// const textColor = style({
//   prop: 'textColor',
//   cssProperty: 'color',
//   key: 'colors',
// });

export type TextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'initial'
  | 'inherit';

const textTransform = system({ textTransform: true });

/** styled functions for Text */
export const textMixin = compose(typography, color, textTransform);

/** Adds ellipsis to overflowing text */
export const overflowEllipsisMixin = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

/** TextProps */
export type TextProps = BaseTextProps & {
  overflowEllipsis?: boolean;
  textTransform?: ResponsiveValue<TextTransform>;
  lineClamp?: ResponsiveValue<number>;
};

/** Text */
export const Text = Styled.p<TextProps>`
  && {
    ${(props) => css`
        ${props.textColor && css`color: ${THEME.colors[props.textColor]}`}
        ${props.overflowEllipsis && overflowEllipsisMixin}
        ${props.lineClamp
        && css`
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${props.lineClamp};
          line-clamp: ${props.lineClamp};
          overflow: hidden;
        `}
      `}
  }
`;

Text.displayName = 'Text';

Text.defaultProps = {
  fontFamily: 'Poppins',
  variant: [TEXT_VARIANTS.small.text],
};
