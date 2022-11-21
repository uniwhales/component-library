import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const CoinStandard = () => (
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
      fillRule="evenodd"
      d="M5.889 21.146A11 11 0 1018.11 2.854 11 11 0 005.89 21.146zm9.778-12.813h-4.89a1.222 1.222 0 100 2.445h2.445a3.667 3.667 0 110 7.333v1.222a1.222 1.222 0 11-2.444 0v-1.222H8.333a1.222 1.222 0 010-2.444h4.89a1.222 1.222 0 000-2.445h-2.445a3.667 3.667 0 110-7.333V4.667a1.222 1.222 0 012.444 0v1.222h2.445a1.222 1.222 0 010 2.444z"
      clipRule="evenodd"
    />
  </svg>
);
