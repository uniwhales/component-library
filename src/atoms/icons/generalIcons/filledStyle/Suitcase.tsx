import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const Suitcase = () => (
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
      d="M19.7 5.333h-3.3v-1.11C16.4 3 15.41 2 14.2 2H9.8C8.59 2 7.6 3 7.6 4.222v1.111H4.3C2.43 5.333 1 6.778 1 8.667v10C1 20.556 2.43 22 4.3 22h15.4c1.87 0 3.3-1.444 3.3-3.333v-10c0-1.89-1.43-3.334-3.3-3.334zm-9.9-1.11h4.4v1.11H9.8v-1.11zm11 14.444c0 .666-.44 1.11-1.1 1.11H4.3c-.66 0-1.1-.444-1.1-1.11v-6.223l5.17 1.778h6.93c.11 0 .22 0 .33-.11l5.17-1.779v6.334z"
    />
  </svg>
);
