import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const ArticleStandard = () => (
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
      d="M16.584 2.567a.477.477 0 00-.821.334v2.637c0 1.106.91 2.016 2.017 2.016.697.008 1.665.01 2.487.008a.477.477 0 00.343-.808l-4.026-4.187z"
    />
    <path
      fillRule="evenodd"
      d="M18.631 9.017c.254.002.48.004.678.004.222 0 .547-.003.87-.005l.369-.003a.453.453 0 01.452.458v8.031C21 19.987 19.006 22 16.546 22H8.67C6.09 22 4 19.889 4 17.284V6.509C4 4.026 5.995 2 8.464 2h5.289c.25 0 .453.206.453.459v3.216c0 1.833 1.493 3.336 3.309 3.336.418 0 .79.003 1.116.006zm-9.157.37h3.385a.745.745 0 100-1.488H9.474a.745.745 0 000 1.489zm0 3.995h5.444a.745.745 0 100-1.49H9.474a.745.745 0 000 1.49zm5.444 4H9.474a.744.744 0 110-1.49h5.444a.746.746 0 010 1.49z"
      clipRule="evenodd"
    />
  </svg>
);
