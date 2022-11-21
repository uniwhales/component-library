import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const Announcements = () => (
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
      d="M20.608 1.076A.999.999 0 0121.991 2v16a1 1 0 11-2 0v-.637a9.026 9.026 0 00-6.357-3.325L8 13.998V6h4.991a9.036 9.036 0 007-3.363V2a1.001 1.001 0 01.617-.924zM4.666 13.998A2.667 2.667 0 012 11.332V8.665a2.67 2.67 0 012.666-2.667H6v8H4.666zM4.938 20.974L8 15.998h5l-3.707 6.024a1 1 0 01-.852.476H5.79a1 1 0 01-.852-1.524z"
    />
  </svg>
);
