import React from 'react';
import { SvgGradients } from '../../../theme';
import { SvgLinearGradient } from '../svgGradientProvider';

export const WalletIcon = () => (
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
      d="M17.026 1.878H6.974c-2.888 0-5.23 2.52-5.23 5.63v8.984c0 3.11 2.342 5.63 5.23 5.63h10.052c2.888 0 5.23-2.52 5.23-5.63v-.35H18.42c-2.21 0-4.001-1.928-4.002-4.307 0-2.3 1.674-4.177 3.783-4.301l.22-.007h3.835v-.019c0-3.11-2.342-5.63-5.23-5.63zm5.23 7.527H18.42c-1.248 0-2.26 1.088-2.26 2.43.002 1.278.918 2.325 2.083 2.423l.176.007h3.836v-4.86zM12.425 5.68c.481 0 .872.42.872.939 0 .475-.328.868-.754.93l-.118.009H6.146c-.481 0-.872-.42-.872-.94 0-.474.328-.867.754-.93l.119-.008h6.278zm7.4 6.077c0-.518-.39-.939-.872-.939h-.363l-.118.009c-.426.062-.754.455-.754.93 0 .519.39.939.872.939h.363l.118-.008c.426-.063.754-.456.754-.93z"
      clipRule="evenodd"
    />
  </svg>
);
