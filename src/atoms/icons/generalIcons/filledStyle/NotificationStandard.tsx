import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const NotificationStandard = () => (
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
      d="M20.27 11.645c-.731-.853-1.063-1.592-1.063-2.848V8.37c0-1.636-.377-2.69-1.195-3.745C16.748 2.987 14.624 2 12.544 2h-.088c-2.037 0-4.095.942-5.379 2.513-.864 1.075-1.284 2.175-1.284 3.857v.427c0 1.256-.31 1.995-1.063 2.848-.553.629-.73 1.437-.73 2.31 0 .876.287 1.705.864 2.379a4.532 4.532 0 002.9 1.413c1.571.179 3.142.246 4.737.246 1.593 0 3.164-.112 4.736-.246a4.532 4.532 0 002.9-1.413A3.614 3.614 0 0021 13.956c0-.874-.177-1.682-.73-2.31zM14.509 19.228c-.5-.106-3.546-.106-4.046 0-.428.1-.89.329-.89.832.025.48.306.905.696 1.174h-.001a3.635 3.635 0 001.714.733c.33.045.666.043 1.008 0 .618-.09 1.21-.34 1.714-.732l-.001-.001c.39-.27.67-.693.695-1.174 0-.503-.462-.733-.89-.832z"
    />
  </svg>
);
