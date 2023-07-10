import React from 'react';
import { Text } from '../texts/text';
import { FooterComponent } from './Footer.styles';
import { FooterLogo } from './FooterLogo';
import useBreakpoint, { Breakpoints } from '../../hooks/useBreakpoint';
import { FooterLogoMobile } from './FooterLogoMobile';

export const Footer = () => {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint <= Breakpoints.Phone;
  return (
    <FooterComponent $isMobile={isMobile}>
      {isMobile ? <FooterLogoMobile /> : <FooterLogo />}
      <Text textColor="SHADE_MINUS_2" size={isMobile ? '9-Regular' : '10-Regular'}>Cielo | © Copyright 2023</Text>
    </FooterComponent>
  );
};
