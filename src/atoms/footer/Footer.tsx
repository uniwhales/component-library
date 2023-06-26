import React from 'react';
import { Text } from '../texts/text';
import { FooterComponent } from './Footer.styles';
import { localTheme } from '../../theme';
import { FooterLogo } from './FooterLogo';
import useBreakpoint, { Breakpoints } from '../../hooks/useBreakpoint';
import { FooterLogoMobile } from './FooterLogoMobile';

export const Footer = () => {
  const theme = localTheme();
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint <= Breakpoints.Phone;
  return (
    <FooterComponent isMobile={isMobile}>
      {isMobile ? <FooterLogoMobile /> : <FooterLogo />}
      <Text color={theme.textShades.SHADE_MINUS_2} size={isMobile ? '9-Regular' : '10-Regular'}>UniWhales DAO ©2023</Text>
    </FooterComponent>
  );
};
