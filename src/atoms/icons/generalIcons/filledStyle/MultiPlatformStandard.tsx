import React from 'react';
import { SvgLinearGradient } from '../../svgGradientProvider';
import { SvgGradients } from '../../../../theme';

export const MultipartFormStandard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    fill="none"
    viewBox="0 0 15 16"
  >
    {SvgLinearGradient(SvgGradients.MAIN_BLUE_GRADIENT)}
    {SvgLinearGradient(SvgGradients.SKY)}
    {SvgLinearGradient(SvgGradients.TEAL)}
    {SvgLinearGradient(SvgGradients.CANARY)}
    <path
      d="M4.6 8.1c-1.68 0-3 1.32-3 3s1.32 3 3 3 3-1.32 3-3-1.32-3-3-3zm2.4-3a3.6 3.6 0 00-3.3 2.22c2.1-.54 4.2.78 4.68 2.82.18.6.18 1.26 0 1.86 1.86-.78 2.7-2.88 1.92-4.68A3.6 3.6 0 007 5.1zm6.12-.72C12.46 3 10.96 2.1 9.4 2.1S6.34 3 5.68 4.38c2.4-.72 4.92.6 5.64 2.94.3.9.3 1.8 0 2.7 2.04-1.02 2.88-3.54 1.8-5.64z"
    />
  </svg>
);
