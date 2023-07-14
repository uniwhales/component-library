import { css, styled } from 'styled-components';

import { Column, Row } from '../common/flex';

const Track = ({ value, max }:{ value: string, max: number }) => css`
  box-sizing: border-box;
  border: none;
  height: 8px;
  background: ${({ theme }) => (Number(value) === max
    ? theme.colors.SHADE_MINUS_3
    : theme.colors.NEUTRAL_SHADE_0)};
  border-radius: 12px;
`;
const TrackFill = ({ value, max }: { value: string, max: number }) => css`
  ${Track({ value, max })};
  height: 8px;
  background-color: transparent;
  background-image: ${({ theme }) => `linear-gradient(${Number(value) === max ? theme.colors.YELLOW : Number(value) > max ? theme.colors.RED : theme.colors.MAIN_BLUE}, ${Number(value) === max ? theme.colors.YELLOW : Number(value) > max ? theme.colors.RED : theme.colors.MAIN_BLUE}),
    linear-gradient(${theme.colors.SHADE_PLUS_2}, ${theme.colors.SHADE_PLUS_2})`};
  background-size: var(--sx) 8px, calc(100% - var(--sx)) 8px;
  background-position: left center, right center;
  background-repeat: no-repeat;
  &:hover {
    background-image: ${({ theme }) => `linear-gradient(${Number(value) === max ? theme.colors.YELLOW : Number(value) > max ? theme.colors.RED : theme.colors.MAIN_BLUE}, ${Number(value) === max ? theme.colors.YELLOW : Number(value) > max ? theme.colors.RED : theme.colors.MAIN_BLUE}),
    linear-gradient(${theme.colors.SHADE_MINUS_1}, ${theme.colors.SHADE_MINUS_1})`};
  };
`;

const fill = css`
  height: 8px;
  background: ${(props) => props.theme.colors.MANGO};
  border-radius: 12px;
`;

const Thumb = ({ value, max }: { value: string, max: number }) => css`
  box-sizing: border-box;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => (Number(value) === max
    ? theme.colors.YELLOW
    : Number(value) > max ? theme.colors.RED : theme.colors.MAIN_BLUE)};
  &:hover {
    background: ${(props) => props.theme.colors.LIGHT_BLUE};
  }
`;
export const Input = styled.input<{ value: string, max: number }>`
  cursor: pointer;
  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  --range: calc(var(--max) - var(--min));
  --ratio: calc((var(--val) - var(--min)) / var(--range));
  --sx: calc(0.5 * 20px + var(--ratio) * (100% - 20px));

  margin: 8px 0 0 0;
  padding: 0;
  height: 20px;
  background: transparent;

  &::-webkit-slider-runnable-track {
    ${TrackFill};
  }

  &::-moz-range-track {
    ${Track};
  }

  &::-ms-track {
    ${Track};
  }

  &::-moz-range-progress {
    ${fill};
  }

  &::-ms-fill-lower {
    ${fill};
  }

  &::-webkit-slider-thumb {
    margin-top: calc(0.5 * (8px - 20px));
    ${Thumb};
  }

  &::-moz-range-thumb {
    ${Thumb};
  }

  &::-ms-thumb {
    margin-top: 0;
    ${Thumb};
  }

  &::-ms-tooltip {
    display: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }
`;

export const NumInputContainer = styled.div<{ value: string, max: number, hasError:boolean }>`
  padding: 4px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.SHADE_PLUS_1};
  border: ${({
    theme, value, max, hasError,
  }) => `2px solid ${hasError ? theme.colors.RED : Number(value) === max ? theme.colors.YELLOW : 'transparent'}`};
  cursor: pointer;
`;
export const NumInput = styled.input`
box-sizing: border-box;
  border: none;
  background: transparent;
  outline: none;
  width: 60px;
  color: ${({ theme }) => theme.colors.SHADE_MINUS_3};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  &::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
  }
`;

export const Container = styled(Row)`
  gap: 16px;
  height: 55px;
`;

export const InputWrapper = styled(Column)`
  gap: 4px;
`;
