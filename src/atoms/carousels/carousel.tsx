import React, { FC } from 'react';
import { CustomCarousel } from './carousel.styles';
import { CarouselProps } from './types';

export const Carousel: FC<CarouselProps> = ({ children, onChange, borderRadius }) => (
  <CustomCarousel
    borderRadius={borderRadius}
    autoPlay
    interval={5000}
    showThumbs={false}
    onChange={(i) => {
      onChange(i);
    }}
  >
    {children}
  </CustomCarousel>
);
