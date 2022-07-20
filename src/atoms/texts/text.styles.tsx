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
  color: ${(props) => (props.color ? props.color : props.theme.colors.secondary.TURQUOISE)};
  text-decoration-thickness: 2px;
  
  ${({ theme }) => {
    const HYPER_STYLE: HyperLinkStyle = {
      [HyperLinkVariation.Default]: {
        color: {
          idle: theme.colors.primary.WATER_BLUE,
          hover: theme.textShades.SHADE_MINUS_3,
          pressed: theme.textShades.SHADE_MINUS_3,
        },
        underline: {
          idle: theme.colors.primary.WATER_BLUE,
          hover: theme.textShades.SHADE_MINUS_3,
          pressed: theme.colors.primary.WATER_BLUE,
        },
      },
      [HyperLinkVariation.Purple]: {
        color: {
          idle: theme.textShades.SHADE_MINUS_3,
        },
        underline: {
          idle: theme.colors.secondary.PURPLE,
          hover: theme.colors.secondary.PURPLE,
          pressed: theme.colors.primary.WATER_BLUE,
        },
      },
      [HyperLinkVariation.Tangy]: {
        color: {
          idle: theme.textShades.SHADE_MINUS_3,
        },
        underline: {
          idle: theme.colors.secondary.TANGY,
          hover: theme.colors.secondary.TANGY,
          pressed: theme.colors.primary.WATER_BLUE,
        },
      },
      [HyperLinkVariation.Turquoise]: {
        color: {
          idle: theme.textShades.SHADE_MINUS_3,
        },
        underline: {
          idle: theme.colors.secondary.TURQUOISE,
          hover: theme.colors.secondary.TURQUOISE,
          pressed: theme.colors.primary.WATER_BLUE,
        },
      },
      [HyperLinkVariation.Fuschia]: {
        color: {
          idle: theme.textShades.SHADE_MINUS_3,
        },
        underline: {
          idle: theme.colors.secondary.FUSCHIA,
          hover: theme.colors.secondary.FUSCHIA,
          pressed: theme.colors.primary.WATER_BLUE,
        },
      },
      [HyperLinkVariation.Inverse]: {
        color: {
          idle: theme.contrastColor.LOW_CONTRAST,
          hover: theme.contrastColor.HIGH_CONTRAST,
          pressed: theme.colors.primary.WATER_BLUE,
        },
        underline: {
          idle: theme.contrastColor.LOW_CONTRAST,
          hover: theme.contrastColor.HIGH_CONTRAST,
          pressed: theme.colors.primary.WATER_BLUE,
        },
      },
      [HyperLinkVariation.InverseNoLine]: {
        color: {
          idle: theme.contrastColor.LOW_CONTRAST,
          hover: theme.contrastColor.HIGH_CONTRAST,
          pressed: theme.colors.primary.WATER_BLUE,
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
