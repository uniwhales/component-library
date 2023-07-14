import React from 'react';
import { CieloLogoDark } from './CieloLogoDark';
import { CieloLogoLight } from './CieloLogoLight';
import { CieloLogoSymbol } from './CieloLogoSymbol';
import { LogoContainer } from './style';
import { LogoProps } from './types';
import { CieloLogoDarkBeta } from './CieloLogoDarkBeta';
import { CieloLogoLightBeta } from './CieloLogoLightBeta';

export const CieloLogo = ({
  onClick, night, noText, isBeta,
}: LogoProps) => {
  if (noText) {
    return (
      <LogoContainer onClick={onClick}>
        <CieloLogoSymbol />
      </LogoContainer>
    );
  }
  if (isBeta) {
    return (
      <LogoContainer onClick={onClick}>
        {night ? <CieloLogoDarkBeta /> : <CieloLogoLightBeta />}
      </LogoContainer>
    );
  }
  return (
    <LogoContainer onClick={onClick}>
      {night ? <CieloLogoDark /> : <CieloLogoLight />}
    </LogoContainer>

  );
};
