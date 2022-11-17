import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const AlertBotStandard = () => (
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
      d="M12.94 5.766a2 2 0 10-2.887-2.223c-.04.115-.053.254-.053.457a2 2 0 001 1.732V7H6.545c-.868 0-1.7.316-2.314.879-.613.562-.958 1.325-.958 2.121v9c0 .796.345 1.559.958 2.121A3.43 3.43 0 006.545 22h10.91c.868 0 1.7-.316 2.314-.879.613-.562.958-1.325.958-2.121v-9c0-.796-.345-1.559-.958-2.121A3.43 3.43 0 0017.455 7H13l-.06-1.234zM15 17a1 1 0 100-2 1 1 0 000 2zm-5-1a1 1 0 11-2 0 1 1 0 012 0z"
      clipRule="evenodd"
    />
    <path
      d="M22.138 14.293c.204-.188.482-.293.771-.293.29 0 .567.105.771.293A.96.96 0 0124 15v2a.96.96 0 01-.32.707 1.143 1.143 0 01-.771.293c-.29 0-.567-.105-.771-.293a.96.96 0 01-.32-.707v-2a.96.96 0 01.32-.707zM.32 14.293c.204-.188.482-.293.77-.293.29 0 .568.105.772.293a.96.96 0 01.32.707v2a.96.96 0 01-.32.707 1.143 1.143 0 01-.771.293c-.29 0-.567-.105-.771-.293A.96.96 0 010 17v-2a.96.96 0 01.32-.707z"
    />
  </svg>
);
