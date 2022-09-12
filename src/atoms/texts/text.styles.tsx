import { css } from 'styled-components';
import { Styled } from '../../theme';
import {
  FONTWEIGHT, H_FONTSIZE, H_LINE_HEIGHT, P_FONTSIZE, P_LINE_HEIGHT,
} from './textGenerator';
import { HyperLinkStyle, HyperLinkVariation } from './types';

export const StyledP = Styled.p<{ textType: string, textWeight: string, textDecoration?: string }>`
  font-size: ${(props) => P_FONTSIZE[props.textType as keyof typeof P_FONTSIZE]}px;
  font-weight: ${(props) => FONTWEIGHT[props.textWeight as keyof typeof FONTWEIGHT]};
  padding: 0;
  margin: 0;
  color: ${(props) => (props.color ? props.color : props.theme.textShades.SHADE_MINUS_3)};
  line-height: ${(props) => P_LINE_HEIGHT[props.textType as keyof typeof P_LINE_HEIGHT]}px;
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'none')};
`;
export const StyledHeading = Styled.div<{ textType: string, textWeight: string, textDecoration?: string }>`
  padding: 0;
  margin: 0;
  line-height: ${(props) => H_LINE_HEIGHT[props.textType as keyof typeof H_LINE_HEIGHT]}px;
  color: ${(props) => (props.color ? props.color : props.theme.textShades.SHADE_MINUS_3)};
  font-size: ${(props) => H_FONTSIZE[props.textType as keyof typeof H_FONTSIZE]}px;
  font-weight: ${(props) => FONTWEIGHT[props.textWeight as keyof typeof FONTWEIGHT]};
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'none')};
  `;

export const StyledA = Styled.a<{ textType: string, textWeight: string, textDecoration?: string, hyperLinkVariation?: HyperLinkVariation }>`
  padding: 0;
  margin: 0;
  line-height: 24px;
  font-size: ${(props) => P_FONTSIZE[props.textType as keyof typeof P_FONTSIZE]}px;
  font-weight: ${(props) => FONTWEIGHT[props.textWeight as keyof typeof FONTWEIGHT]};
  color: ${(props) => (props.color ? props.color : props.theme.colors.secondary.TEAL)};
  text-decoration-thickness: 2px;

  ${({ theme }) => {
    const HYPER_STYLE: HyperLinkStyle = {
      [HyperLinkVariation.Default]: {
        color: {
          idle: theme.colors.primary.MANGO,
          hover: theme.textShades.SHADE_MINUS_3,
          pressed: theme.textShades.SHADE_MINUS_3,
        },
        underline: {
          idle: theme.colors.primary.MANGO,
          hover: theme.textShades.SHADE_MINUS_3,
          pressed: theme.colors.primary.MANGO,
        },
      },
      [HyperLinkVariation.Sky]: {
        color: {
          idle: theme.textShades.SHADE_MINUS_3,
        },
        underline: {
          idle: theme.colors.secondary.SKY,
          hover: theme.colors.secondary.SKY,
          pressed: theme.colors.primary.MANGO,
        },
      },
      [HyperLinkVariation.Tangy]: {
        color: {
          idle: theme.textShades.SHADE_MINUS_3,
        },
        underline: {
          idle: theme.colors.secondary.TANGY,
          hover: theme.colors.secondary.TANGY,
          pressed: theme.colors.primary.MANGO,
        },
      },
      [HyperLinkVariation.Teal]: {
        color: {
          idle: theme.textShades.SHADE_MINUS_3,
        },
        underline: {
          idle: theme.colors.secondary.TEAL,
          hover: theme.colors.secondary.TEAL,
          pressed: theme.colors.primary.MANGO,
        },
      },
      [HyperLinkVariation.Canary]: {
        color: {
          idle: theme.textShades.SHADE_MINUS_3,
        },
        underline: {
          idle: theme.colors.secondary.CANARY,
          hover: theme.colors.secondary.CANARY,
          pressed: theme.colors.primary.MANGO,
        },
      },
      [HyperLinkVariation.Inverse]: {
        color: {
          idle: theme.contrastColor.LOW_CONTRAST,
          hover: theme.contrastColor.HIGH_CONTRAST,
          pressed: theme.colors.primary.MANGO,
        },
        underline: {
          idle: theme.contrastColor.LOW_CONTRAST,
          hover: theme.contrastColor.HIGH_CONTRAST,
          pressed: theme.colors.primary.MANGO,
        },
      },
      [HyperLinkVariation.InverseNoLine]: {
        color: {
          idle: theme.contrastColor.LOW_CONTRAST,
          hover: theme.contrastColor.HIGH_CONTRAST,
          pressed: theme.colors.primary.MANGO,
        },
      },
    };

    return css<{ hyperLinkVariation?: HyperLinkVariation }>`
      text-decoration: ${({ hyperLinkVariation }) => (!hyperLinkVariation || hyperLinkVariation === HyperLinkVariation.InverseNoLine ? 'none' : 'underline')};
      text-decoration-color: ${({ hyperLinkVariation }) => hyperLinkVariation && HYPER_STYLE[hyperLinkVariation].underline?.idle};
      color: ${({ hyperLinkVariation }) => hyperLinkVariation && HYPER_STYLE[hyperLinkVariation].color.idle};
      &:hover {
        text-decoration-color: ${({ hyperLinkVariation }) => hyperLinkVariation && (HYPER_STYLE[hyperLinkVariation].underline?.hover ?? HYPER_STYLE[hyperLinkVariation].underline?.idle)};
        color: ${({ hyperLinkVariation }) => hyperLinkVariation && (HYPER_STYLE[hyperLinkVariation].color.hover ?? HYPER_STYLE[hyperLinkVariation].color.idle)};
      };
      &:active {
        text-decoration-color: ${({ hyperLinkVariation }) => hyperLinkVariation && (HYPER_STYLE[hyperLinkVariation].underline?.pressed ?? HYPER_STYLE[hyperLinkVariation].underline?.idle)};
        color: ${({ hyperLinkVariation }) => hyperLinkVariation && (HYPER_STYLE[hyperLinkVariation].color.pressed ?? HYPER_STYLE[hyperLinkVariation].color.idle)};
      };
    `;
  }}
`;
