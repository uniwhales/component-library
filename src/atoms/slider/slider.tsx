import React, { FC } from 'react';
import { SliderProps } from './types';
import { Container, Input, MaxButton } from './slider.styles';

export const Slider: FC<SliderProps> = (props) => {
  const { value, onInput, onClick } = props;
  return (
    <Container>
      <Input
        type="range"
        min={0}
        max={100}
        value={value}
        onInput={onInput}
      />
      <MaxButton {...props} value={value} onClick={onClick}>Max</MaxButton>
    </Container>
  );
};
