import React from 'react';
import { SvgGradients } from '../../../../theme';
import { SvgLinearGradient } from '../../svgGradientProvider';

export const FetchError = () => (
  <svg width="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    {SvgLinearGradient(SvgGradients.MAIN_BLUE_GRADIENT)}
    {SvgLinearGradient(SvgGradients.SKY)}
    {SvgLinearGradient(SvgGradients.TEAL)}
    {SvgLinearGradient(SvgGradients.CANARY)}
    <path d="M12 13C12.6 13 13 12.6 13 12V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V12C11 12.6 11.4 13 12 13ZM11 15C11 15.5 11.5 16 12 16C12.5 16 13 15.5 13 15C13 14.7 12.9 14.5 12.7 14.3C12.4 14 12 13.9 11.6 14.1C11.5 14.1 11.4 14.2 11.3 14.3C11.1 14.5 11 14.7 11 15ZM17 3.3C13.1 1.1 8.3 1.8 5.1 4.7V3C5.1 2.4 4.7 2 4.1 2C3.5 2 3.1 2.4 3.1 3V7.5C3.1 7.6 3.1 7.7 3.2 7.8V7.9C3.3 8.1 3.5 8.3 3.7 8.4C3.9 8.5 4 8.5 4.1 8.5H8.6C9.2 8.5 9.6 8.1 9.6 7.5C9.6 6.9 9.2 6.5 8.6 6.5H6.2C7.7 4.9 9.8 4 12 4C16.4 4 20 7.6 20 12C20 12.6 20.4 13 21 13C21.6 13 22 12.6 22 12C22 8.4 20.1 5.1 17 3.3ZM19.9 15.5H15.4C14.8 15.5 14.4 15.9 14.4 16.5C14.4 17.1 14.8 17.5 15.4 17.5H17.8C16.3 19.1 14.2 20 12 20C7.6 20 4 16.4 4 12C4 11.4 3.6 11 3 11C2.4 11 2 11.4 2 12C2 17.5 6.5 22 12 22C14.6 22 17 21 18.9 19.2V21C18.9 21.6 19.3 22 19.9 22C20.5 22 20.9 21.6 20.9 21V16.5C20.9 15.9 20.4 15.5 19.9 15.5Z" />
  </svg>
);
