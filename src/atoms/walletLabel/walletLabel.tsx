import React from 'react';
import { shortenAddressTo11Chars } from '../../utils/shortenAddress';
import { ShortText } from '../shortText/shortText';
import { Text } from '../texts/text';
import { Container } from './styles';
import { WalletLabelProps } from './types';

export const WalletLabel = (
  {
    label, address, size, color, chars = 5, width,
  }: WalletLabelProps,
) => {
  const labelHasSpaces = !!label?.trim().includes(' ');
  const limit = labelHasSpaces ? (chars * 2) : chars;

  if (label && label.length > limit) {
    return (
      <Container width={width} breakWord={labelHasSpaces}>
        <ShortText
          text={label}
          size={size ?? '14-Regular'}
          color={color}
          chars={limit}
        />
      </Container>
    );
  }
  if (label) {
    return (
      <Container width={width} breakWord={labelHasSpaces}>
        <Text size={size ?? '14-Regular'} color={color}>{label}</Text>
      </Container>
    );
  }
  return (
    <Container width={width} breakWord={labelHasSpaces}>
      <Text size={size ?? '14-Regular'} color={color}>{shortenAddressTo11Chars(address)}</Text>
    </Container>
  );
};
