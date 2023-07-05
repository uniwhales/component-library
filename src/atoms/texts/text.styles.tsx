import { css, styled } from 'styled-components';
import {
  FONTWEIGHT, H_FONTSIZE, H_LINE_HEIGHT, P_FONTSIZE, P_LINE_HEIGHT,
} from './textGenerator';
import { HyperLinkVariation } from './types';

export const StyledP = styled.p<{ textType: string, textWeight: string, textDecoration?: string, removeLineHeight?:boolean }>`
  // Adding unknown here as TS thinks we are making a mistake converting to a string
  // because we are not using numbers instead of regular string
  font-size: ${(props) => P_FONTSIZE[props.textType as unknown as keyof typeof P_FONTSIZE]}px;
  font-weight: ${(props) => FONTWEIGHT[props.textWeight as keyof typeof FONTWEIGHT]};
  padding: 0;
  margin: 0;
  color: ${(props) => (props.color ? props.color : props.theme.textShades.SHADE_MINUS_3)};
  line-height: ${(props) => (!props.removeLineHeight && `${P_LINE_HEIGHT[props.textType as unknown as keyof typeof P_LINE_HEIGHT]}px`)};
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'none')};
`;
export const StyledHeading = styled.div<{ textType: string, textWeight: string, textDecoration?: string }>`
  padding: 0;
  margin: 0;
  line-height: ${(props) => H_LINE_HEIGHT[props.textType as keyof typeof H_LINE_HEIGHT]}px;
  color: ${(props) => (props.color ? props.color : props.theme.textShades.SHADE_MINUS_3)};
  font-size: ${(props) => H_FONTSIZE[props.textType as keyof typeof H_FONTSIZE]}px;
  font-weight: ${(props) => FONTWEIGHT[props.textWeight as keyof typeof FONTWEIGHT]};
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'none')};
  `;

export const StyledA = styled.a<{ textType: string, textWeight: string, textDecoration?: string, hyperLinkVariation?: HyperLinkVariation, disabled?:boolean }>`
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  padding: 0;
  margin: 0;
  line-height: 24px;
  font-size: ${(props) => P_FONTSIZE[props.textType as unknown as keyof typeof P_FONTSIZE]}px;
  font-weight: ${(props) => FONTWEIGHT[props.textWeight as keyof typeof FONTWEIGHT]};
  color: ${(props) => (props.color ? props.color : props.theme.colors.secondary.TEAL)};
  text-decoration: none;
`;
