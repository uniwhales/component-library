import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const RocketStandard = () => (
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
      d="M18.786 15.604l-2.433 2.228a11.65 11.65 0 01-4.311 2.367l.645 2.999a.997.997 0 00.57.701 1.008 1.008 0 00.904-.04l3.917-2.2a3.036 3.036 0 001.23-1.426c.247-.593.3-1.249.149-1.873l-.671-2.756zM6.284 7.766l2.095-2.477-2.613-.628a2.796 2.796 0 00-1.953.045A2.78 2.78 0 002.37 6.017L.163 9.912a.995.995 0 00.664 1.467l3.081.658a12.854 12.854 0 012.376-4.271zM22.665 2.06a.998.998 0 00-.715-.711 11.328 11.328 0 00-6.25.164 11.285 11.285 0 00-5.203 3.454L7.284 8.766a12.893 12.893 0 00-2.932 6.702.995.995 0 00.285.835l3.11 3.096a1.002 1.002 0 00.796.289 11.908 11.908 0 006.81-2.856l3.674-3.364a11.186 11.186 0 003.48-5.179c.643-2.019.698-4.18.158-6.228zM16.78 8.807a1.509 1.509 0 01-1.39-.925 1.491 1.491 0 01.326-1.632 1.507 1.507 0 012.569 1.059c0 .397-.16.778-.441 1.06-.282.28-.665.438-1.064.438z"
    />
  </svg>
);
