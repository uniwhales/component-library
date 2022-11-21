import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const AllStandard = () => (
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
      d="M7.314 2h9.372C19.962 2 22 4.312 22 7.585v8.83C22 19.688 19.962 22 16.686 22H7.314C4.038 22 2 19.688 2 16.415v-8.83C2 4.312 4.048 2 7.314 2zm1.662 11.936H6.752L6.384 15H5.208l2.008-5.592H8.52L10.528 15H9.344l-.368-1.064zm-.304-.896l-.808-2.336-.808 2.336h1.616zm3.967 1.072h1.84V15h-2.96V9.416h1.12v4.696zm5.751 0h-1.84V9.416h-1.12V15h2.96v-.888z"
      clipRule="evenodd"
    />
  </svg>
);
