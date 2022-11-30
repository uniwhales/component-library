import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const NftSidebarStandard = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    fill="none"
    viewBox="0 0 25 24"
  >
    {SvgLinearGradient(SvgGradients.MAIN_BLUE_GRADIENT)}
    {SvgLinearGradient(SvgGradients.SKY)}
    {SvgLinearGradient(SvgGradients.TEAL)}
    {SvgLinearGradient(SvgGradients.CANARY)}
    <mask
      id="mask0_12025_254443"
      style={{ maskType: 'alpha' }}
      width="25"
      height="24"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <path
        fillRule="evenodd"
        d="M22.616 6c-.63-.927-8.592-6-10.392-6-1.8 0-9.6 4.8-10.393 6-.792 1.2-.792 10.8 0 12 .793 1.2 8.78 6 10.393 6 1.612 0 9.72-5.012 10.392-6 .671-.988.63-11.073 0-12zM9.673 15.6H8.08l-2.664-4.441v4.44H3.824V8.4h1.592l2.664 4.461V8.4h1.593v7.2zm5.41-7.2v1.405H12.42v1.518h1.993v1.364H12.42V15.6h-1.593V8.4h4.256zm5.54 1.405V8.4h-5.057v1.405H17.3V15.6h1.592V9.805h1.733z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#mask0_12025_254443)">
      <path d="M0.237 0H26.237V26H0.237z" />
    </g>
  </svg>
);
