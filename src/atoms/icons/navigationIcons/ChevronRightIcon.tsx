import React from 'react';
import { SvgGradients } from '../../../theme';
import { SvgLinearGradient } from '../svgGradientProvider';

export const ChevronRightIcon = () => (
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
      d="M8.227 19.773a.774.774 0 010-1.095L14.905 12 8.227 5.322a.774.774 0 111.095-1.095l7.225 7.226a.774.774 0 010 1.094l-7.225 7.226a.774.774 0 01-1.095 0z"
      clipRule="evenodd"
    />
  </svg>
);
