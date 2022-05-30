import React, { FC, ChangeEvent, MouseEvent } from 'react';
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
        onInput={(e: ChangeEvent<HTMLInputElement>) => onInput(e)}
      />
      <MaxButton
        {...props}
        value={value}
        onClick={(e: MouseEvent<HTMLButtonElement>) => onClick(e)}
      >
        Max

      </MaxButton>
    </Container>
  );
};
