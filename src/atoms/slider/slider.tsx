import React, {
  FC, ChangeEvent,
} from 'react';
import { SliderProps } from './types';
import {
  Container, Input, NumInput, NumInputContainer,
} from './slider.styles';
import { Text } from '../texts/text';
import { localTheme } from '../../theme';

export const Slider: FC<SliderProps> = ({
  min, max, onInput, value, setValue, unit,
}: SliderProps) => {
  const theme = localTheme();
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
      <NumInputContainer
        max={max}
        value={value}
      >
        <NumInput
          type="number"
          max={max}
          value={value}
          size={1}
          onChange={(e) => setValue(e.target.value)}
        />
        {unit && (
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_1}>{unit}</Text>
        )}
      </NumInputContainer>
    </Container>
  );
};
