import Styled, { css } from 'styled-components';
import {
  ColorProps,
  TypographyProps,
} from 'styled-system';
import { Color, FontSize, THEME } from '../Theme';

/** BaseTextProps */
export type BaseTextProps = Omit<TypographyProps, 'fontSize'> &
Omit<ColorProps, 'color'> & {
  textColor?: Color;
  size?: FontSize;
};

/** Text */
export const Text = Styled.p<BaseTextProps>`
  && {
    ${(props) => css`
        ${props.size && css`font-size: ${THEME.sizes[props.size]};`}
        ${props.textColor && css`color: ${THEME.colors[props.textColor]};`}
      `}
  }
`;

Text.displayName = 'Text';

Text.defaultProps = {};
