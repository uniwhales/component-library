import React, { FC } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';

export type BodySizes = 'L-Regular' | 'L-Semibold' | 'L-Bold' | 'M-Regular' | 'M-Semibold' | 'M-Bold' | 'S-Regular' | 'S-Semibold' | 'S-Bold' | 'XS-Regular' | 'XS-Semibold' | 'XS-Bold';

export interface Props {
  children:React.ReactChild;
  size: BodySizes;
  cut?:string
  cutWith?: string
}

const StyledP = Styled.p<{ textType:string, textWeight:string, cut?:string, cutWith?:string }>`
  font-size: 14px;
  padding: 0;
  margin: 0;
  color: ${(props) => props.theme.colors.neutral.SHADE_4};
  line-height: 24px;
`;
export const Text:FC<Props> = ({
  children, size,
}) => {
  const [textType, textWeight] = size.split('-');
  // eslint-disable-next-line max-len
  return <StyledP textType={textType} textWeight={textWeight}>{children}</StyledP>;
};

// &--XS {
//     font-size: 12px;
//     line-height: 20px;
// }
// &--S {
//     font-size: 14px;
//     line-height: 22px;
// }
// &--M {
//     font-size: 16px;
//     line-height: 24px;
// }
// &--L {
//     font-size: 18px;
//     line-height: 26px;
// }
