import React from 'react';
import { CieloLogoSymbol } from './CieloLogoSymbol';
import { LogoContainer } from './style';
import { LogoProps } from './types';
import { CieloLogoDarkBeta } from './CieloLogoDarkBeta';
import { CieloLogoLightBeta } from './CieloLogoLightBeta';

export const CieloLogoBeta = ({ onClick, night, noText }: LogoProps) => {
  if (noText) {
    return (
      <LogoContainer onClick={onClick}>
        <CieloLogoSymbol />
      </LogoContainer>
    );
  }
  return (
    <LogoContainer onClick={onClick}>
      {night ? <CieloLogoDarkBeta /> : <CieloLogoLightBeta />}
    </LogoContainer>

  );
};
