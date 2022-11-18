import React from 'react';
import { SvgGradients } from '../../../theme';
import { SvgLinearGradient } from '../svgGradientProvider';

export const FloatingClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    fill="none"
    viewBox="0 0 24 24"
  >
    {SvgLinearGradient(SvgGradients.MAIN_BLUE_GRADIENT)}
    {SvgLinearGradient(SvgGradients.SKY)}
    {SvgLinearGradient(SvgGradients.TEAL)}
    {SvgLinearGradient(SvgGradients.CANARY)}
    <path
      d="M13.225 12l5.513-5.513a.846.846 0 000-1.224.846.846 0 00-1.226 0L12 10.774 6.487 5.262a.846.846 0 00-1.224 0 .846.846 0 000 1.226L10.774 12l-5.513 5.512a.794.794 0 00-.262.613c0 .525.35.875.875.875a.794.794 0 00.612-.262L12 13.225l5.512 5.513c.175.175.35.262.613.262a.794.794 0 00.613-.262.846.846 0 000-1.226L13.225 12z"
    />
  </svg>
);