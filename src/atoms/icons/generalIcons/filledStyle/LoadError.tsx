import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const LoadError = () => (
  <svg width="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {SvgLinearGradient(SvgGradients.MAIN_BLUE_GRADIENT)}
    {SvgLinearGradient(SvgGradients.SKY)}
    {SvgLinearGradient(SvgGradients.TEAL)}
    {SvgLinearGradient(SvgGradients.CANARY)}
    <path d="M18.3 7.1L19.7 5.7L21.7 3.7C22.1 3.3 22.1 2.7 21.7 2.3C21.3 1.9 20.7 1.9 20.3 2.3L18.3 4.3C14.7 1.3 9.4 1.2 5.7 4.3C5.5 4.4 5.3 4.6 5.1 4.8V3C5.1 2.4 4.7 2 4.1 2C3.5 2 3.1 2.4 3.1 3V7.5C3.1 8.1 3.5 8.5 4.1 8.5H8.6C9.2 8.5 9.6 8.1 9.6 7.5C9.6 6.9 9.2 6.5 8.6 6.5H6.2C8.7 3.9 12.7 3.2 16 5.1C16.3 5.3 16.6 5.5 16.9 5.7L5.7 16.9C4.6 15.5 4 13.8 4 12C4 11.4 3.6 11 3 11C2.4 11 2 11.4 2 12C2 14.3 2.8 16.6 4.3 18.3L2.3 20.3C2.1 20.5 2 20.7 2 21C2 21.6 2.4 22 3 22C3.3 22 3.5 21.9 3.7 21.7L5.7 19.7L7.1 18.3L18.3 7.1ZM19.9 15.5H15.4C14.8 15.5 14.4 15.9 14.4 16.5C14.4 17.1 14.8 17.5 15.4 17.5H17.8C15.6 19.9 12 20.7 8.9 19.4L7.4 20.9C8.8 21.6 10.4 22 12 22C14.6 22 17 21 18.9 19.2V21C18.9 21.6 19.3 22 19.9 22C20.5 22 20.9 21.6 20.9 21V16.5C20.9 15.9 20.4 15.5 19.9 15.5ZM19.4 8.9C19.8 9.9 20 10.9 20 12C20 12.6 20.4 13 21 13C21.6 13 22 12.6 22 12C22 10.4 21.6 8.8 20.9 7.4L19.4 8.9Z" />
  </svg>
);
