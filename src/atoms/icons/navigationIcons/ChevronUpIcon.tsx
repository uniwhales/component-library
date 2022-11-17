import React from 'react';
import { SvgGradients } from '../../../theme';
import { SvgLinearGradient } from '../svgGradientProvider';

export const ChevronUpIcon = () => (
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
      d="M19.773 16.547a.774.774 0 01-1.095 0L12 9.87l-6.678 6.678a.774.774 0 11-1.095-1.095l7.226-7.225a.774.774 0 011.094 0l7.226 7.226a.774.774 0 010 1.094z"
      clipRule="evenodd"
    />
  </svg>
);
