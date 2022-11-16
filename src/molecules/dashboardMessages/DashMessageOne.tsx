import React from 'react';
import { CieloLogo } from '../../atoms/cieloLogo/CieloLogo';
import { SocialButtonGroup } from '../../atoms/socialButtonGroup/SocialButtonGroup';
import { Text } from '../../atoms/texts/text';
import { localTheme } from '../../theme';
import { Container } from './style';
import { DashMessageOneProps } from './types';

export const DashMessageOne = ({
  title, message, night, secondaryMessage,
}: DashMessageOneProps) => {
  const { textShades } = localTheme();
  return (
    <Container>
      <CieloLogo night={night} />
      <Text color={textShades.SHADE_MINUS_2} size="H5-Regular">{title}</Text>
      <Text size="S-Regular" color={textShades.SHADE_MINUS_2}>{message}</Text>
      <SocialButtonGroup
        onTelegramClick={() => {}}
        onTwitterClick={() => {}}
      />
      {secondaryMessage && (
        <Text size="S-Regular" color={textShades.SHADE_MINUS_1}>{secondaryMessage}</Text>
      )}
    </Container>
  );
};
