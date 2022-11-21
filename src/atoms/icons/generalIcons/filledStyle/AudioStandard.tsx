import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const AudioStandard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    fill="none"
    viewBox="0 0 24 24"
  >
    {SvgLinearGradient(SvgGradients.CANARY)}
    {SvgLinearGradient(SvgGradients.MAIN_BLUE_GRADIENT)}
    {SvgLinearGradient(SvgGradients.SKY)}
    {SvgLinearGradient(SvgGradients.TEAL)}
    <path
      d="M17.657 5.343A8 8 0 0120 11v3h-2v-3a6 6 0 10-12 0v3H4v-3a8 8 0 0113.657-5.657z"
    />
    <path
      d="M2.553 14.273A3 3 0 014 13.18L6 13h2a1 1 0 011 1v6a1 1 0 01-1 1H5a3 3 0 01-3-3v-2a3 3 0 01.553-1.727zM16 13h2l2 .18A3 3 0 0122 16v2a3 3 0 01-3 3h-3a1 1 0 01-1-1v-6a1 1 0 011-1z"
    />
  </svg>
);
