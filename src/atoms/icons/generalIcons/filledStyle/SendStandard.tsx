import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const SendStandard = () => (
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
      d="M20.84 3.445a.467.467 0 00-.488-.602l-.08.016-17.1 4.975c-.355.104-.443.561-.183.798l.072.054 6.69 4.117 5.729-5.767a.82.82 0 011.066-.082l.092.079a.82.82 0 01.083 1.066l-.079.092-5.737 5.774 4.028 6.673c.192.317.64.286.8-.026l.032-.084L20.84 3.445z"
    />
  </svg>
);
