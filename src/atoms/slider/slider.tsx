import React, { FC } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';
import { SliderProps } from './types';

const track = css`
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  height: 8px;
  background-color: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
`;

const fill = css`
  height: 8px;
  background: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
  border-radius: 4px;
`;

const thumb = css`
  box-sizing: border-box;
  border: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primary.WATER_BLUE};
`;

const SliderInput = Styled.input<SliderProps>`
  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  &:focus::-webkit-slider-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &:focus::-moz-range-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &:focus::-ms-thumb {
    outline: -webkit-focus-ring-color auto 5px;
  }

  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--val) - var(--min)) / var(--range));
  --sx: calc(0.5 * 16px + var(--ratio) * (100% - 16px));

  margin: 0;
  padding: 0;
  height: 16px;
  background: transparent;
  font: 1em/1 arial, sans-serif;

  &::-webkit-slider-runnable-track {
    ${track};
  }

  &::-moz-range-track {
    ${track};
  }

  &::-ms-track {
    ${track};
  }

  &::-moz-range-progress {
    ${fill};
  }

  &::-ms-fill-lower {
    ${fill};
  }

  &::-webkit-slider-thumb {
    margin-top: calc(0.5 * (8px - 16px));
    ${thumb};
  }

  &::-moz-range-thumb {
    ${thumb};
  }

  &::-ms-thumb {
    margin-top: 0;
    ${thumb};
  }

  &::-ms-tooltip {
    display: none;
  }

  &::-moz-focus-outer {
    border: 0;
    outline: none;
  }
`;

const MaxButton = Styled.button`
  padding: 4px 12px;
  margin-left: 8px;
  gap 8px;
  border-radius: 12px;
  background: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  border: none;
`;

const Container = Styled.div`
  display: flex;
  align-items: center;
`;

export const Slider: FC<SliderProps> = ({
  min, max, value, onInput, onMax,
}) => (
  <Container>
    <SliderInput
      type="range"
      min={min}
      max={max}
      value={value}
      onInput={onInput}
    />
    <MaxButton onClick={onMax}>MAX</MaxButton>
  </Container>
);
