import React from 'react';
import { CieloLogoDark } from './CieloLogoDark';
import { CieloLogoLight } from './CieloLogoLight';
import { CieloLogoSymbol } from './CieloLogoSymbol';
import { LogoContainer } from './style';
import { LogoProps } from './types';

export const CieloLogo = ({ onClick, night, noText }: LogoProps) => {
  if (noText) {
    return (
      <LogoContainer onClick={onClick}>
        <CieloLogoSymbol />
      </LogoContainer>
    );
  }
  return (
    <LogoContainer onClick={onClick}>
      {night ? <CieloLogoDark /> : <CieloLogoLight />}
    </LogoContainer>

  );
};
