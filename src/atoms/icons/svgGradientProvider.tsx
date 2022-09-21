import React from 'react';
import { SvgGradients } from '../../theme';

const GradientLookup: { [key in SvgGradients]: { first: string, second: string } } = {
  [SvgGradients.CANARY]: {
    first: '#EEFF41',
    second: '#DB9C00',
  },
  [SvgGradients.MAIN_BLUE_GRADIENT]: {
    first: '#5AD7F9',
    second: '#255296',
  },
  [SvgGradients.MAIN_BLUE_GRADIENT_FLIPPED]: {
    first: '#255296',
    second: '#5AD7F9',
  },
  [SvgGradients.MAIN_HIGHLIGHT_GRADIENT]: {
    first: '#255296',
    second: '#95E6FF',
  },
  [SvgGradients.TANGY]: {
    first: '#AD3B72',
    second: '#DD8442',
  },
  [SvgGradients.SKY]: {
    first: '#2D467F',
    second: '#489BFC',
  },
  [SvgGradients.GREEN]: {
    first: '#2D467F',
    second: '#489BFC',
  },
  [SvgGradients.TEAL]: {
    first: '#2D467F',
    second: '#489BFC',
  },
};

export const SvgLinearGradient = (fill: SvgGradients) => {
  const gradient = GradientLookup[fill];
  return (
    <linearGradient id={fill} x1=".5" x2=".5" y2="1">
      <stop stopColor={gradient.first} />
      <stop offset="1" stopColor={gradient.second} />
    </linearGradient>
  );
};
