import React, { FC } from 'react';
import { CarouselProps } from './types';
import { CustomCarousel } from './carousel.styles';

export const Carousel: FC<CarouselProps> = ({ children, onChange, borderRadius }) => (
  <CustomCarousel
    borderRadius={borderRadius}
    autoPlay
    interval={5000}
    showThumbs={false}
    onChange={(i) => {
      onChange(i);
    }}
    preventMovementUntilSwipeScrollTolerance
    swipeScrollTolerance={60}
  >
    {children}
  </CustomCarousel>
);
