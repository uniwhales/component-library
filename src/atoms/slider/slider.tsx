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
    if (v === 0) return 0;
    const adjustedMin = mn > 0 ? mn : 1;
    const minLog = Math.log(adjustedMin);
    const maxLog = Math.log(mx);
    const scale = (maxLog - minLog) / (mx - adjustedMin);
    return Math.exp(minLog + scale * (v - adjustedMin));
  };

  const inverseLogScale = (v: number, mn: number, mx: number) => {
    if (v === 0) return 0;
    const adjustedMin = mn > 0 ? mn : 1;
    const minLog = Math.log(adjustedMin);
    const maxLog = Math.log(mx);
    const scale = (maxLog - minLog) / (mx - adjustedMin);
    return (Math.log(v) - minLog) / scale + adjustedMin;
  };

  const customScale = (v: number, mn: number, mx: number, blend: number) => {
    const logVal = logScale(v, mn, mx);
    const linearVal = v;
    return blend * logVal + (1 - blend) * linearVal;
  };

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const linearValue = parseInt(e.target.value, 10);
    const blend = 0.5; // Adjust this value between 0 and 1 to control the compression
    const newValue = useLogarithmic ? customScale(linearValue, min, max, blend) : linearValue;
    const actualValue = Math.min(Math.round(newValue), max);
    setValue(actualValue.toString());

    const sliderValue = Math.round(useLogarithmic && newValue > 0
      ? inverseLogScale(newValue, min, max) : newValue);
    e.target.value = sliderValue.toString();
  };
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(target.value, 10);
    if (target.value.length > charLimit) return;

    // Create a new synthetic event with the updated value
    const newEvent = {
      ...target, value: newValue.toString(),
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
