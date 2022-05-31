import React, { FC, ChangeEvent, MouseEvent } from 'react';
import { SliderProps } from './types';
import { Container, Input, MaxButton } from './slider.styles';

export const Slider: FC<SliderProps> = ({ value, onInput, onClick }: SliderProps) => (
  <Container>
    <Input
      type="range"
      min={0}
      max={100}
      value={value}
      onInput={(e: ChangeEvent<HTMLInputElement>) => onInput(e)}
    />
    <MaxButton
      value={value}
      onClick={(e: MouseEvent<HTMLButtonElement>) => onClick(e)}
    >
      Max

    </MaxButton>
  </Container>
);
