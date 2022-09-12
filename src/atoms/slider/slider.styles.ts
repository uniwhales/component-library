import { css } from 'styled-components';
import { Styled } from '../../theme';
import { SliderProps } from './types';

const track = css<Pick<SliderProps, 'value'>>`
  box-sizing: border-box;
  border: none;
  height: 8px;
  background: ${(props) => (props.value === 100
    ? props.theme.textShades.SHADE_MINUS_3
    : props.theme.containerAndCardShades.NEUTRAL_SHADE_0)};
  border-radius: 12px;
`;

const trackFill = css<Pick<SliderProps, 'value'>>`
  ${track};
  height: 8px;
  background-color: ${(props) => (props.value === 100
    ? props.theme.textShades.SHADE_MINUS_3
    : props.theme.containerAndCardShades.NEUTRAL_SHADE_0)};
  &:hover {
    background-color: ${(props) => props.theme.colors.primary.DARK_BLUE};
  }
`;

const fill = css`
  height: 8px;
  background: ${(props) => props.theme.colors.primary.MANGO};
  border-radius: 12px;
`;

const thumb = css<Pick<SliderProps, 'value'>>`
  box-sizing: border-box;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => (props.value === 100
    ? props.theme.colors.system.WHITE
    : props.value === 0
      ? props.theme.containerAndCardShades.NEUTRAL_SHADE_0
      : props.theme.colors.primary.MANGO)};
  &:hover {
    background: ${(props) => props.theme.colors.system.WHITE};
  }
`;

export const Input = Styled.input<Pick<SliderProps, 'value'>>`
  cursor: pointer;
  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  margin: 0;
  padding: 0;
  height: 20px;
  background: transparent;


  &::-webkit-slider-runnable-track {
    ${trackFill};
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
    margin-top: calc(0.5 * (8px - 20px));
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
  }
`;

export const MaxButton = Styled.button<Pick<SliderProps, 'value'>>`
  padding: 4px 12px;
  margin-left: 8px;
  gap: 8px;
  border-radius: 12px;
  background: ${(props) => (props.value === 100
    ? props.theme.textShades.SHADE_MINUS_3
    : props.theme.containerAndCardShades.NEUTRAL_SHADE_0)};
  color: ${(props) => (props.value === 100
    ? props.theme.containerAndCardShades.SHADE_PLUS_3
    : props.theme.textShades.SHADE_MINUS_3)};
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
`;

export const Container = Styled.div`
  display: flex;
  align-items: center;
`;
