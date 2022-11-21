import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const UnfollowStandard = () => (
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
      d="M22 11h-4a1 1 0 000 2h4a1 1 0 000-2zM10.5 15c-4.584 0-8.5.697-8.5 3.487S5.891 22 10.5 22c4.584 0 8.5-.696 8.5-3.487C19 15.723 15.11 15 10.5 15zM10.5 13A5.48 5.48 0 0016 7.5 5.48 5.48 0 0010.5 2 5.481 5.481 0 005 7.5c0 3.052 2.448 5.5 5.5 5.5z"
    />
  </svg>
);
