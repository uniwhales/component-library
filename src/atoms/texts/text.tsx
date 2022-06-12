import React, { FC } from 'react';
import { Styled } from '../../theme';
import {
  FONTWEIGHT, H_FONTSIZE, H_LINE_HEIGHT, P_FONTSIZE,
} from './textGenerator';

export type BodySizes =
  'L-Regular'
  | 'L-Semibold'
  | 'L-Bold'
  | 'M-Regular'
  | 'M-Semibold'
  | 'M-Bold'
  | 'S-Regular'
  | 'S-Semibold'
  | 'S-Bold'
  | 'XS-Regular'
  | 'XS-Semibold'
  | 'XS-Bold';
export type HeaderSizes =
  'H1-Regular' |
  'H1-Semibold'
  | 'H1-Bold'
  | 'H2-Regular'
  | 'H2-Semibold'
  | 'H2-Bold'
  | 'H3-Regular'
  | 'H3-Semibold'
  | 'H3-Bold'
  | 'H4-Regular'
  | 'H4-Semibold'
  | 'H4-Bold'
  | 'H5-Regular'
  | 'H5-Semibold'
  | 'H5-Bold'
  | 'H6-Regular'
  | 'H6-Semibold'
  | 'H6-Bold';

export interface TextProps {
  children: React.ReactChild;
  size: BodySizes | HeaderSizes;
  color?: string;
  textDecoration?: string;
  href?: string;
}

const StyledP = Styled.p<{ textType: string, textWeight: string, textDecoration?: string }>`
  font-size: ${(props) => P_FONTSIZE[props.textType as keyof typeof P_FONTSIZE]}px;
  font-weight: ${(props) => FONTWEIGHT[props.textWeight as keyof typeof FONTWEIGHT]};;
  padding: 0;
  margin: 0;
  color: ${(props) => (props.color ? props.color : props.theme.textShades.SHADE_MINUS_3)};
  line-height: 24px;
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'none')};
`;
const StyledHeading = Styled.div<{ textType: string, textWeight: string, textDecoration?: string }>`
  padding: 0;
  margin: 0;
  line-height: ${(props) => H_LINE_HEIGHT[props.textType as keyof typeof H_LINE_HEIGHT]}px;
  color: ${(props) => (props.color ? props.color : props.theme.textShades.SHADE_MINUS_3)};
  font-size: ${(props) => H_FONTSIZE[props.textType as keyof typeof H_FONTSIZE]}px;
  font-weight: ${(props) => FONTWEIGHT[props.textWeight as keyof typeof FONTWEIGHT]};;
  text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'none')};
`;

const StyledA = Styled.a<{ textType: string, textWeight: string }>`
  padding: 0;
  margin: 0;
  line-height: 24px;
  font-size: ${(props) => P_FONTSIZE[props.textType as keyof typeof P_FONTSIZE]}px;
  font-weight: ${(props) => FONTWEIGHT[props.textWeight as keyof typeof FONTWEIGHT]};
  text-decoration: underline;
  color: ${(props) => props.theme.colors.secondary.TURQUOISE};
`;

export const Text: FC<TextProps> = ({
  children, size, color, textDecoration, href,
}) => {
  const [textType, textWeight] = size.split('-');
  if (href) {
    return (
      <StyledA textType={textType} textWeight={textWeight} href={href}>{children}</StyledA>
    );
  }
  if ((['L', 'M', 'S', 'XS'].includes(textType))) {
    return (
      <StyledP
        textDecoration={textDecoration}
        textType={textType}
        color={color}
        textWeight={textWeight}
      >
        {children}
      </StyledP>
    );
  }
  if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(textType)) {
    return (
      <StyledHeading
        textDecoration={textDecoration}
        color={color}
        as={textType.toLowerCase() as never}
        textType={textType}
        textWeight={textWeight}
      >
        {children}
      </StyledHeading>
    );
  }
  return null;
};
