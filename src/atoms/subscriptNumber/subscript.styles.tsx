import { styled } from 'styled-components';
import { variant } from 'styled-system';
import { TextProps, textMixin } from '../texts/text';
import { TEXT_VARIANTS } from '../../theme';

export const StyledSubscript = styled.sub<TextProps>`
  padding: 0px 2px;
  color: ${({ theme }) => theme.colors.SHADE_MINUS_3};
  ${variant({ variants: TEXT_VARIANTS })}
  ${textMixin}
`;
