import React from 'react';
import { StyledSubscript } from './subscript.styles';
import { Text, TextProps } from '../texts/text';

type Props = {
  before: string;
  subscript: string;
  after: string;
  subscriptProps: TextProps;
  textProps: TextProps
};

export const Subscript = ({
  after, before, subscript, textProps, subscriptProps,
}: Props) => {
  console.debug('Subscript', textProps, subscript);
  return (
    <Text size={textProps.size}>
      {before}
      <StyledSubscript size={subscriptProps.size}>
        {subscript}
      </StyledSubscript>
      {after}
    </Text>
  );
};
