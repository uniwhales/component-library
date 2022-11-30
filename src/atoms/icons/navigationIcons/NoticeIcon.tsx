import React from 'react';
import { SvgGradients } from '../../../theme';
import { SvgLinearGradient } from '../svgGradientProvider';

export const NoticeIcon = () => (
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
      d="M3.952 21.982a.573.573 0 00.043.001h16.052a3.09 3.09 0 002.151-1.024c.557-.617.84-1.414.798-2.246a3.159 3.159 0 00-.273-1.108l-8-14a3.116 3.116 0 00-4.231-1.216 3.095 3.095 0 00-1.21 1.205l-8.053 14.11a3.116 3.116 0 002.723 4.278zM12 8.76a.964.964 0 00-.963.962v3.11a.964.964 0 001.925 0v-3.11A.964.964 0 0012 8.76zm0 6.868a.964.964 0 000 1.93c.53 0 .962-.432.962-.974a.96.96 0 00-.962-.956z"
      clipRule="evenodd"
    />
  </svg>
);
