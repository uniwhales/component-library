import React, { FC } from 'react';
import { SliderProps } from './types';
import { Container, SliderInput, MaxButton } from './slider.styles';

export const Slider: FC<SliderProps> = ({
  value, onInput, onMax,
}) => (
  <Container>
    <SliderInput
      type="range"
      min={0}
      max={100}
      value={value}
      onInput={onInput}
    />
    <MaxButton onClick={onMax}>MAX</MaxButton>
  </Container>
);
