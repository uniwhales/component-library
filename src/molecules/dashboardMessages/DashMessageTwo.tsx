import React from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { CieloLogo } from '../../atoms/cieloLogo/CieloLogo';
import { Text } from '../../atoms/texts/text';
import { localTheme } from '../../theme';
import { Container } from './style';
import { DashMessageTwoProps } from './types';

export const DashMessageTwo = ({
  title,
  message,
  buttonText,
  onClick,
  buttonIcon,
  night,
}: DashMessageTwoProps) => {
  const { textShades } = localTheme();
  return (
    <Container>
      <CieloLogo night={night} />
      <Text color={textShades.SHADE_MINUS_2} size="H5-Regular">{title}</Text>
      <Text size="M-Regular" color={textShades.SHADE_MINUS_2}>{message}</Text>
      <ButtonAtom buttonVariant="secondary" onClick={onClick}>
        <>
          {buttonIcon && buttonIcon}
          {buttonText}
        </>
      </ButtonAtom>
    </Container>
  );
};
