import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const TwitterStandard = () => (
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
    <g clipPath="url(#clip0_99_7689)">
      <path
        d="M22.8 5.303a9.231 9.231 0 01-2.552.699 4.403 4.403 0 001.948-2.448c-.855.51-1.8.871-2.808 1.072a4.427 4.427 0 00-7.66 3.028c0 .351.03.689.103 1.01-3.681-.18-6.939-1.944-9.127-4.632a4.458 4.458 0 00-.606 2.239c0 1.533.79 2.893 1.967 3.68a4.373 4.373 0 01-2.001-.546v.049a4.448 4.448 0 003.548 4.35c-.36.1-.754.147-1.161.147-.284 0-.57-.017-.839-.076.574 1.754 2.202 3.043 4.138 3.085a8.898 8.898 0 01-5.49 1.889c-.363 0-.712-.017-1.06-.061a12.467 12.467 0 006.793 1.987c8.149 0 12.604-6.75 12.604-12.6 0-.197-.007-.386-.017-.573a8.833 8.833 0 002.22-2.3z"
      />
    </g>
    <defs>
      <clipPath id="clip0_99_7689">
        <path
          d="M0 0H21.6V21.6H0z"
          transform="translate(1.2 1.2)"
        />
      </clipPath>
    </defs>
  </svg>
);
