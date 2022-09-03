import React from 'react';
import { Text } from '../texts/text';
import { FooterComponent } from './Footer.styles';
import { localTheme } from '../../theme';
import { FooterLogo } from './FooterLogo';

export const Footer = () => {
  const theme = localTheme();
  return (
    <FooterComponent>
      <FooterLogo />
      <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">UniWhales DAO ©2022</Text>
    </FooterComponent>
  );
};
