import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const CrownStandard = () => (
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
      d="M19.569 16.929H4.431c-.791 0-1.432.713-1.432 1.594v1.788c0 .88.64 1.594 1.432 1.594h15.136c.791 0 1.432-.714 1.432-1.594v-1.788c0-.88-.64-1.594-1.431-1.594z"
    />
    <path
      fillRule="evenodd"
      d="M21.05 7.255c.39.331.864.565 1.387.664l-1.572 7.01a.61.61 0 01-.6.496H3.774a.61.61 0 01-.601-.496L1.6 7.912a2.996 2.996 0 001.379-.683c2.08 2.177 5.603 1.853 7.435-.693l.005-.007c.459.284 1 .447 1.58.447.592 0 1.144-.17 1.608-.465l.039.053c1.836 2.522 5.329 2.839 7.403.691z"
      clipRule="evenodd"
    />
    <path
      d="M1.5 6.976c.828 0 1.5-.668 1.5-1.493C3 4.66 2.328 3.99 1.5 3.99S0 4.66 0 5.483c0 .825.672 1.493 1.5 1.493zM12 5.981c1.105 0 2-.891 2-1.99C14 2.89 13.105 2 12 2s-2 .891-2 1.99c0 1.1.895 1.991 2 1.991z"
    />
    <path
      d="M12 5.981c1.105 0 2-.891 2-1.99C14 2.89 13.105 2 12 2s-2 .891-2 1.99c0 1.1.895 1.991 2 1.991zM22.5 6.976c.828 0 1.5-.668 1.5-1.493 0-.824-.672-1.493-1.5-1.493S21 4.66 21 5.483c0 .825.672 1.493 1.5 1.493z"
    />
  </svg>
);
