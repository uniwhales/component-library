import React from 'react';
import { Text } from '../texts/text';
import { FooterComponent } from './Footer.styles';
import { localTheme } from '../../theme';

export const Footer = () => {
  const theme = localTheme();
  return (
    <FooterComponent>
      <Text color={theme.textShades.SHADE_MINUS_2} size="10-Regular">Cielo | ©2023</Text>
    </FooterComponent>
  );
};
