import React from 'react';
import { CieloLogoDark } from './CieloLogoDark';
import { CieloLogoLight } from './CieloLogoLight';
import { CieloLogoSqDark } from './CieloLogoSqDark';
import { CieloLogoSqLight } from './CieloLogoSqLight';
import { CieloLogoSymbol } from './CieloLogoSymbol';
import { LogoContainer } from './style';
import { LogoProps } from './types';

export const CieloLogo = ({ onClick, night, variant = 'default' }: LogoProps) => {
  switch (variant) {
    case 'square':
      return (
        <LogoContainer onClick={onClick}>
          {night ? <CieloLogoSqDark /> : <CieloLogoSqLight />}
        </LogoContainer>
      );
    case 'noText':
      return (
        <LogoContainer onClick={onClick}>
          <CieloLogoSymbol />
        </LogoContainer>
      );
    default:
      return (
        <LogoContainer onClick={onClick}>
          {night ? <CieloLogoDark /> : <CieloLogoLight />}
        </LogoContainer>
      );
  }
};
