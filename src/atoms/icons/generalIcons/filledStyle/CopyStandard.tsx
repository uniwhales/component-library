import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const CopyStandard = () => (
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
      d="M18.545 8.727h-7.363c-1.391 0-2.455 1.064-2.455 2.455v7.364c0 1.39 1.064 2.454 2.455 2.454h7.363C19.936 21 21 19.936 21 18.546v-7.364c0-1.391-1.064-2.455-2.455-2.455z"
    />
    <path
      d="M19.364 18.545c0 .491-.328.818-.818.818h-7.364c-.491 0-.818-.327-.818-.818v-7.363c0-.491.327-.819.818-.819h7.364c.49 0 .818.328.818.819v7.363z"
    />
    <path
      d="M14.454 7.091H8.727c-.818 0-1.636.977-1.636 1.636v5.728H5.454c-.49 0-.818-.328-.818-.819V5.456c0-.491.327-.819.818-.819h8.182c.491 0 .818.328.818.819V7.09z"
    />
    <path
      d="M7.09 14.454c0 .491-.326.819-.817.819h-.818C4.064 15.273 3 14.209 3 12.818V5.455C3 4.064 4.064 3 5.455 3h7.363c1.391 0 2.455 1.064 2.455 2.455v.818c0 .49-.328.818-.819.818-.49 0-.818-.327-.818-.818v-.818c0-.491-.327-.819-.818-.819H5.455c-.491 0-.819.328-.819.819v7.363c0 .491.328.818.819.818h.818c.49 0 .818.328.818.819z"
    />
  </svg>
);
