import React from 'react';
import { SvgGradients } from '../../../theme';
import { SvgLinearGradient } from '../svgGradientProvider';

export const CrossIcon = () => (
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
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11zM7.366 7.366a1.25 1.25 0 011.768 0L12 10.232l2.866-2.866a1.25 1.25 0 011.768 1.768L13.768 12l2.866 2.866a1.25 1.25 0 01-1.768 1.768L12 13.768l-2.866 2.866a1.25 1.25 0 01-1.768-1.768L10.232 12 7.366 9.134a1.25 1.25 0 010-1.768z"
      clipRule="evenodd"
    />
  </svg>
);
