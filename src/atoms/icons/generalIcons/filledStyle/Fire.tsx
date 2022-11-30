import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const Fire = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    fill="none"
    viewBox="0 0 12 15"
  >
    {SvgLinearGradient(SvgGradients.MAIN_BLUE_GRADIENT)}
    {SvgLinearGradient(SvgGradients.SKY)}
    {SvgLinearGradient(SvgGradients.TEAL)}
    {SvgLinearGradient(SvgGradients.CANARY)}
    <path
      d="M10.281 4.846a.825.825 0 00-.153-.116.668.668 0 00-.933.273c-.23.45-.546.85-.932 1.178a5.754 5.754 0 00-.696-3.908A5.794 5.794 0 005.418.153a.67.67 0 00-.994.534 4.633 4.633 0 01-1.647 3.277l-.154.124a5.663 5.663 0 00-1.325 1.235A5.942 5.942 0 00.197 10.54c.236.896.68 1.723 1.293 2.418a5.99 5.99 0 002.245 1.587.67.67 0 00.84-.302.66.66 0 00.045-.52 4.601 4.601 0 01-.126-1.71 5.99 5.99 0 002.875 2.663c.15.067.32.076.476.025a6 6 0 002.547-1.611 5.933 5.933 0 00-.11-8.244z"
    />
  </svg>
);
