import React from 'react';
import { SvgGradients } from '../../../theme';
import { SvgLinearGradient } from '../svgGradientProvider';

export const RevokeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    fill="none"
    viewBox="0 0 20 20"
  >
    {SvgLinearGradient(SvgGradients.MAIN_BLUE_GRADIENT)}
    {SvgLinearGradient(SvgGradients.SKY)}
    {SvgLinearGradient(SvgGradients.TEAL)}
    {SvgLinearGradient(SvgGradients.CANARY)}
    {SvgLinearGradient(SvgGradients.TANGY)}
    <mask
      id="mask0_9867_491479"
      style={{ maskType: 'alpha' }}
      width="20"
      height="20"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <path
        fillRule="evenodd"
        d="M10 1.667a12.452 12.452 0 01-8.16 3.181 12.585 12.585 0 00-.173 2.085c0 5.443 3.478 10.073 8.333 11.789 4.855-1.716 8.333-6.347 8.333-11.789 0-.71-.06-1.407-.173-2.085A12.452 12.452 0 0110 1.667zM6.91 6.91a.833.833 0 011.18 0L10 8.82l1.91-1.91a.833.833 0 111.18 1.178L11.177 10l1.911 1.91a.833.833 0 01-1.178 1.18L10 11.178l-1.91 1.91a.833.833 0 11-1.18-1.178L8.822 10l-1.91-1.912a.833.833 0 010-1.178z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#mask0_9867_491479)">
      <path d="M0 0H21.667V21.667H0z" />
    </g>
  </svg>

);
