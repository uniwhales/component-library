import React from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../texts/text';
import { FooterComponent } from './Footer.styles';

export const Footer = () => {
  const theme: any = useTheme();
  return (
    <FooterComponent>
      <Text color={theme.textShades.SHADE_MINUS_2} size="M-Regular">Copyright UniWhales ©2022</Text>
    </FooterComponent>
  );
};
