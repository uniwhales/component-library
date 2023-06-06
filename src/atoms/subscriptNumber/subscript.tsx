import React from 'react';
import { StyledP } from '../texts/text.styles';
import { BodySizes } from '../texts/types';
import { StyledSubscript } from './subscript.styles';

type Props = {
  size?: BodySizes;
  color?: string;
  beforeSubscript: string;
  subscript: string
  afterSubscript: string;
};

export const Subscript = ({
  size = '14-Regular', color, beforeSubscript, subscript, afterSubscript,
}: Props) => {
  const [textType, textWeight] = size.split('-');
  const subscriptSize = parseInt(textType, 10) - 2;
  if ((['8', '10', '11', '12', '14', '16'].includes(textType))) {
    return (
      <StyledP
        textType={textType}
        color={color}
        textWeight={textWeight}
      >
        {beforeSubscript}
        <StyledSubscript
          size={subscriptSize}
          color={color}
        >
          {subscript}
        </StyledSubscript>
        {afterSubscript}
      </StyledP>
    );
  }
  return null;
};
