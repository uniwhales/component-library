import React from 'react';
import { SvgGradients } from '../../../theme';
import { SvgLinearGradient } from '../svgGradientProvider';

export const HamburgerIcon = () => (
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
      d="M22.25 10.25h-20c-.75 0-1.25.5-1.25 1.25s.5 1.25 1.25 1.25h20c.75 0 1.25-.5 1.25-1.25s-.5-1.25-1.25-1.25zm-20-3.75h20c.75 0 1.25-.5 1.25-1.25S23 4 22.25 4h-20C1.5 4 1 4.5 1 5.25S1.5 6.5 2.25 6.5zm20 10h-20C1.5 16.5 1 17 1 17.75S1.5 19 2.25 19h20c.75 0 1.25-.5 1.25-1.25s-.5-1.25-1.25-1.25z"
    />
  </svg>

);
