import { styled } from 'styled-components';
import {
  ColorProps, FontSizeProps, ResponsiveValue,
  TypographyProps, color, compose, style, system, typography, variant,
} from 'styled-system';
import { Color, TEXT_VARIANTS, TextVariant } from '../../theme';

/** BaseTextProps */
export type BaseTextProps = TypographyProps &
Omit<ColorProps, 'color'> & Omit<FontSizeProps, 'fontSize'> & {
  /**
     * @description
     * Variants of the text. Possible to pass an array that
     * behaves accordingly to the media breakpoints ["sm", "md", "lg"]
     * @example
     * "10-Bold"
     * "12-Regular"
     * "16-Regular"
     * ["10-Bold", "12-Regular", "16-Regular"]
     * @see {@link TextVariant}
     */
  size?: ResponsiveValue<TextVariant>
  textColor?: ResponsiveValue<Color>
};

const textColor = style({
  prop: 'textColor',
  cssProperty: 'color',
  key: 'colors',
});

export type TextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'initial'
  | 'inherit';

const textTransform = system({ textTransform: true });

/** styled functions for Text */
export const textMixin = compose(typography, color, textColor, textTransform);

/** TextProps */
export type TextProps = BaseTextProps &
{
  textTransform?: ResponsiveValue<TextTransform>
  href?: string
  target?: string
  $removeLineHeight?: boolean
};

export const Text = styled.p<TextProps>`
/*   Adding unknown here as TS thinks we are making a mistake converting to a string
  because we are not using numbers instead of regular string */
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.SHADE_MINUS_3};
  ${variant({ variants: TEXT_VARIANTS, prop: 'size' })}
  ${textMixin}
`;

export type HrefTextProps = TextProps & {
  disabled?: boolean
};

export const Href = styled.a<HrefTextProps>`
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  padding: 0;
  margin: 0;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.TEAL};
  text-decoration: none;
  ${variant({ variants: TEXT_VARIANTS, prop: 'size' })}
  ${textMixin}
`;
