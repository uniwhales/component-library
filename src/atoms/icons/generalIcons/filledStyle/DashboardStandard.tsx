import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const DashboardStandard = () => (
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
      d="M4.125 3h15.75C20.55 3 21 3.45 21 4.125V7.5H3V4.125C3 3.45 3.45 3 4.125 3zM3 19.875V9.75h4.5V21H4.125C3.45 21 3 20.55 3 19.875zM19.875 21H9.75V9.75H21v10.125C21 20.55 20.55 21 19.875 21z"
    />
  </svg>
);
