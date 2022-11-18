import React from 'react';
import { SvgGradients } from '../../../theme';
import { SvgLinearGradient } from '../svgGradientProvider';

export const Kebab = () => (
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {SvgLinearGradient(SvgGradients.MAIN_BLUE_GRADIENT)}
    {SvgLinearGradient(SvgGradients.SKY)}
    {SvgLinearGradient(SvgGradients.TEAL)}
    {SvgLinearGradient(SvgGradients.CANARY)}
    <path d="M11.7778 7.55556C12.1294 7.55556 12.4731 7.45129 12.7655 7.25595C13.0578 7.0606 13.2857 6.78295 13.4202 6.4581C13.5548 6.13326 13.59 5.77581 13.5214 5.43095C13.4528 5.0861 13.2835 4.76933 13.0349 4.5207C12.7862 4.27207 12.4695 4.10276 12.1246 4.03416C11.7798 3.96556 11.4223 4.00077 11.0975 4.13533C10.7726 4.26988 10.495 4.49774 10.2996 4.7901C10.1043 5.08245 10 5.42617 10 5.77778C10 6.24927 10.1873 6.70146 10.5207 7.03486C10.8541 7.36825 11.3063 7.55556 11.7778 7.55556ZM11.7778 16.4444C11.4262 16.4444 11.0825 16.5487 10.7901 16.7441C10.4977 16.9394 10.2699 17.217 10.1353 17.5419C10.0008 17.8667 9.96556 18.2242 10.0342 18.569C10.1028 18.9139 10.2721 19.2307 10.5207 19.4793C10.7693 19.7279 11.0861 19.8972 11.431 19.9658C11.7758 20.0344 12.1333 19.9992 12.4581 19.8647C12.783 19.7301 13.0606 19.5023 13.2559 19.2099C13.4513 18.9175 13.5556 18.5738 13.5556 18.2222C13.5556 17.7507 13.3683 17.2985 13.0349 16.9651C12.7015 16.6317 12.2493 16.4444 11.7778 16.4444ZM11.7778 10.2222C11.4262 10.2222 11.0825 10.3265 10.7901 10.5218C10.4977 10.7172 10.2699 10.9948 10.1353 11.3197C10.0008 11.6445 9.96556 12.002 10.0342 12.3468C10.1028 12.6917 10.2721 13.0085 10.5207 13.2571C10.7693 13.5057 11.0861 13.675 11.431 13.7436C11.7758 13.8122 12.1333 13.777 12.4581 13.6425C12.783 13.5079 13.0606 13.28 13.2559 12.9877C13.4513 12.6953 13.5556 12.3516 13.5556 12C13.5556 11.5285 13.3683 11.0763 13.0349 10.7429C12.7015 10.4095 12.2493 10.2222 11.7778 10.2222Z" />
  </svg>

);