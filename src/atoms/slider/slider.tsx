import React, { FC, ChangeEvent, MouseEvent } from 'react';
import { SliderProps } from './types';
import { Container, Input, MaxButton } from './slider.styles';

export const Slider: FC<SliderProps> = ({
  value, onInput, onMaxClick, min, max, showMaxButton,
}: SliderProps) => {
  const styles = {
    '--min': min,
    '--max': max,
    '--val': value,
  } as React.CSSProperties;
  return (
    <Container>
      <Input
        type="range"
        min={min}
        max={max}
        value={value}
        onInput={(e: ChangeEvent<HTMLInputElement>) => onInput(e)}
        style={styles}
      />
      {showMaxButton && (
        <MaxButton
          value={value}
          onClick={(e: MouseEvent<HTMLButtonElement>) => onMaxClick && onMaxClick(e)}
          max={max}
        >
          Max

        </MaxButton>
      )}
    </Container>
  );
};
