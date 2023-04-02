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
  min, max, onInput, value, setValue, hasError,
  errorMessage, unit, charLimit = 16, useLogarithmic = false,
}: SliderProps) => {
  const theme = localTheme();
  const styles = {
    '--min': min,
    '--max': max,
    '--val': value,
  } as React.CSSProperties;

  const logScale = (v: number, mn: number, mx: number) => {
    // eslint-disable-next-line no-param-reassign
    if (mn === 0) mn = 1; // Avoid logarithm of zero
    const minLog = Math.log(mn);
    const maxLog = Math.log(mx);
    const scale = (maxLog - minLog) / (mx - mn);
    return Math.exp(minLog + scale * (v - min));
  };

  const inverseLogScale = (v: number, mn: number, mx: number) => {
    // eslint-disable-next-line no-param-reassign
    if (mn === 0) mn = 1; // Avoid logarithm of zero
    const minLog = Math.log(mn);
    const maxLog = Math.log(mx);
    const scale = (maxLog - minLog) / (mx - mn);
    return (Math.log(v) - minLog) / scale + min;
  };

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const linearValue = parseInt(e.target.value, 10);
    const newValue = useLogarithmic ? logScale(linearValue, min, max) : linearValue;
    const actualValue = Math.min(Math.round(newValue), max);
    setValue(actualValue.toString());

    // Update the slider value based on the logarithmic scale
    const sliderValue = Math.round(useLogarithmic ? inverseLogScale(newValue, min, max) : newValue);
    e.target.value = sliderValue.toString();
  };
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const firstChar = Array.from(target.value);
    const hasLeadingZero = firstChar[0] === '0';
    const valueWithoutZero = parseInt(target.value.slice(1), 10);
    const newValue = parseInt(target.value, 10);
    if (target.value.length > charLimit) return;

    // Create a new synthetic event with the updated value
    const newEvent = {
      ...target, value: hasLeadingZero ? valueWithoutZero.toString() : newValue.toString(),
    } as HTMLInputElement;
    onInput({ target: newEvent } as ChangeEvent<HTMLInputElement>);
  };

  return (
    <Container>
      <Input
        autoFocus
        type="range"
        min={min}
        max={max}
        value={value}
        onInput={handleSliderChange}
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
            onChange={handleInputChange}
          />
          {unit && (
            <Text size="14-Regular" color={theme.textShades.SHADE_MINUS_1}>{unit}</Text>
          )}
        </NumInputContainer>
        {hasError && errorMessage && (
          <Text size="12-Regular" color={theme.colors.system.RED}>{errorMessage}</Text>
        )}
      </InputWrapper>

    </Container>
  );
};
