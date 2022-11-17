import React from 'react';
import { SvgGradients } from '../../../theme';
import { SvgLinearGradient } from '../svgGradientProvider';

export const LinkIcon = () => (
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
      d="M17.4 10.938a.9.9 0 00-.9.9V18.3a.9.9 0 01-.9.9H5.7a.9.9 0 01-.9-.9V8.4a.9.9 0 01.9-.9h6.462a.9.9 0 000-1.8H5.7A2.7 2.7 0 003 8.4v9.9A2.7 2.7 0 005.7 21h9.9a2.7 2.7 0 002.7-2.7v-6.462a.9.9 0 00-.9-.9zm3.528-7.38a.9.9 0 00-.486-.486A.9.9 0 0020.1 3h-5.4a.9.9 0 000 1.8h3.231l-9.27 9.261a.9.9 0 000 1.278.9.9 0 001.278 0l9.261-9.27V9.3a.9.9 0 101.8 0V3.9a.9.9 0 00-.072-.342z"
    />
  </svg>
);
