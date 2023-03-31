import React from 'react';
import { shortenAddressTo11Chars } from '../../utils/shortenAddress';
import { ShortenText } from '../shortenText/shortenText';
import { Text } from '../texts/text';
import { Container } from './styles';
import { WalletLabelProps } from './types';

export const WalletLabel = (
  {
    label, address, size, color, charactersToDisplay, width,
  }: WalletLabelProps,
) => {
  const labelHasSpaces = label?.includes(' ') ?? false;

  if (label && label.length > charactersToDisplay) {
    return (
      <Container width={width} breakWord={labelHasSpaces}>
        <ShortenText
          text={label}
          size={size}
          color={color}
          chars={charactersToDisplay}
        />
      </Container>
    );
  }
  if (label) {
    return (
      <Container width={width} breakWord={labelHasSpaces}>
        <Text size={size} color={color}>{label}</Text>
      </Container>
    );
  }
  return (
    <Container width={width} breakWord={labelHasSpaces}>
      <Text size={size} color={color}>{shortenAddressTo11Chars(address)}</Text>
    </Container>
  );
};
