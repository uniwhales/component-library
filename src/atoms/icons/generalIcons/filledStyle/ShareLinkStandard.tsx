import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const ShareLinkStandard = () => (
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
      d="M17.668 14.678a3.67 3.67 0 00-2.823 1.355l-4.673-2.984c.22-.672.22-1.396 0-2.068l4.673-2.984a3.667 3.667 0 006.266-1.081 3.657 3.657 0 00-1.62-4.43 3.67 3.67 0 00-4.646.84 3.658 3.658 0 00-.779 3.014L9.229 9.397A3.667 3.667 0 003 12.015a3.657 3.657 0 002.244 3.374 3.67 3.67 0 003.984-.757l4.838 3.057c-.04.215-.06.432-.064.65a3.658 3.658 0 002.263 3.382 3.67 3.67 0 003.995-.793 3.659 3.659 0 00-2.592-6.25z"
    />
  </svg>
);
