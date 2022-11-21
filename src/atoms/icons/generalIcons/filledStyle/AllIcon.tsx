import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const AllIcon = () => (
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
      d="M3 21h6.75v-6.75H3V21zM14.25 9.75H21V3h-6.75v6.75zm0 11.25H21v-6.75h-6.75V21zM3 9.75h6.75V3H3v6.75z"
      clipRule="evenodd"
    />
  </svg>
);
