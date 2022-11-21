import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const DownloadStandard = () => (
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
    <mask
      id="mask0_5914_522669"
      style={{ maskType: 'alpha' }}
      width="20"
      height="20"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <path
        d="M10.455 12.948l2.424-2.473a.659.659 0 00-.002-.922.635.635 0 00-.907.002l-1.328 1.354v-8.59A.647.647 0 0010 1.667a.646.646 0 00-.64.651v8.59L8.03 9.556a.635.635 0 00-.907-.002.656.656 0 00-.001.922l2.424 2.473c.12.123.284.192.454.192.17 0 .334-.07.455-.192z"
      />
      <path
        d="M13.773 11.349a1.909 1.909 0 00-.006-2.675l-.002-.001a1.886 1.886 0 00-1.873-.484V5.664h2.736c2.043 0 3.705 1.716 3.705 3.826v4.193c0 2.105-1.658 3.817-3.696 3.817H5.373c-2.043 0-3.707-1.716-3.707-3.825V9.48c0-2.104 1.66-3.817 3.699-3.817h2.744V8.19a1.886 1.886 0 00-1.873.483l-.003.003a1.906 1.906 0 00-.005 2.673l2.427 2.476a1.888 1.888 0 002.69 0l-.736-.726.739.724 2.425-2.474z"
      />
    </mask>
    <g mask="url(#mask0_5914_522669)">
      <path d="M0 0H21.667V21.667H0z" />
    </g>
  </svg>

);
