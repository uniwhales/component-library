import React, {
  FC, ChangeEvent,
} from 'react';
import { SliderProps } from './types';
import {
  Container, Input, InputWrapper, NumInput, NumInputContainer,
} from './slider.styles';
import { Text } from '../texts/text';
import { localTheme } from '../../theme';

export const Slider: FC<SliderProps> = ({
  min, max, onInput, value, setValue, hasError, errorMessage, unit, charLimit = 16,
}: SliderProps) => {
  const theme = localTheme();
  const styles = {
    '--min': min,
    '--max': max,
    '--val': value,
  } as React.CSSProperties;

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const firstChar = Array.from(target.value);
    const valueWithoutZero = target.value.slice(1);
    const hasLeadingZero = firstChar[0] === '0';
    if (target.value.length > charLimit) return;
    if (hasLeadingZero) {
      setValue(valueWithoutZero);
    } else {
      setValue(target.value);
    }
  };
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
      <InputWrapper>
        <NumInputContainer
          max={max}
          value={value}
          hasError={hasError}
        >
          <NumInput
            type="number"
            max={max}
            value={value}
            size={1}
            onChange={handleChange}
          />
          {unit && (
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_1}>{unit}</Text>
          )}
        </NumInputContainer>
        {hasError && errorMessage && (
          <Text size="Caption-Regular" color={theme.colors.system.RED}>{errorMessage}</Text>
        )}
      </InputWrapper>

    </Container>
  );
};
