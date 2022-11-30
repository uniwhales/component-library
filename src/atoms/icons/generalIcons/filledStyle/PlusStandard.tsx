import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const PlusStandard = () => (
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
      d="M7.314 2h9.372C19.962 2 22 4.312 22 7.585v8.83C22 19.688 19.962 22 16.686 22H7.314C4.038 22 2 19.688 2 16.415v-8.83C2 4.312 4.048 2 7.314 2zM12 7.577a.75.75 0 01.75.75v2.913h2.917a.75.75 0 010 1.5H12.75v2.913a.75.75 0 11-1.5 0V12.74H8.333a.75.75 0 010-1.5h2.917V8.327a.75.75 0 01.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);
