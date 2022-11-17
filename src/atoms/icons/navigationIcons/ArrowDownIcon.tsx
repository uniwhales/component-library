import React from 'react';
import { SvgGradients } from '../../../theme';
import { SvgLinearGradient } from '../svgGradientProvider';

export const ArrowDownIcon = () => (
  <svg
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
      d="M12.274 4a.75.75 0 01.75.75v15a.75.75 0 01-1.5 0v-15a.75.75 0 01.75-.75z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M5.72 13.169a.75.75 0 011.061.002l5.494 5.516 5.492-5.516a.75.75 0 011.063 1.058l-6.024 6.05a.75.75 0 01-1.063 0l-6.025-6.05a.75.75 0 01.003-1.06z"
      clipRule="evenodd"
    />
  </svg>
);
