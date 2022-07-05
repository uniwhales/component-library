import React from 'react';
import { Text } from '../texts/text';
import { FooterComponent } from './Footer.styles';
import { localTheme } from '../../theme';

export const Footer = () => {
  const theme = localTheme();
  return (
    <FooterComponent>
      <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Copyright UniWhales ©2022</Text>
    </FooterComponent>
  );
};
