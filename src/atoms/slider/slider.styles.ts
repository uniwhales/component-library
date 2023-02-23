import { css } from 'styled-components';
import { Styled } from '../../theme';
import { Column, Row } from '../common/flex';

const track = css<{ value: string, max: number }>`
  box-sizing: border-box;
  border: none;
  height: 8px;
  background: ${({ theme, value, max }) => (Number(value) === max
    ? theme.textShades.SHADE_MINUS_3
    : theme.containerAndCardShades.NEUTRAL_SHADE_0)};
  border-radius: 12px;
`;

const trackFill = css<{ value: string, max: number }>`
  ${track};
  height: 8px;
  background-color: transparent;
  background-image: ${({ theme, value, max }) => `linear-gradient(${Number(value) === max ? theme.colors.primary.YELLOW : theme.colors.primary.MAIN_BLUE}, ${Number(value) === max ? theme.colors.primary.YELLOW : theme.colors.primary.MAIN_BLUE}),
    linear-gradient(${theme.containerAndCardShades.SHADE_PLUS_2}, ${theme.containerAndCardShades.SHADE_PLUS_2})`};
  background-size: var(--sx) 8px, calc(100% - var(--sx)) 8px;
  background-position: left center, right center;
  background-repeat: no-repeat;
  &:hover {
    background-image: ${({ theme, value, max }) => `linear-gradient(${Number(value) === max ? theme.colors.primary.YELLOW : theme.colors.primary.MAIN_BLUE}, ${Number(value) === max ? theme.colors.primary.YELLOW : theme.colors.primary.MAIN_BLUE}),
    linear-gradient(${theme.textShades.SHADE_MINUS_1}, ${theme.textShades.SHADE_MINUS_1})`};
  };
`;

const fill = css`
  height: 8px;
  background: ${(props) => props.theme.colors.primary.MANGO};
  border-radius: 12px;
`;

const thumb = css<{ value: string, max: number }>`
  box-sizing: border-box;
  border: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme, value, max }) => (Number(value) === max
    ? theme.colors.primary.YELLOW
    : theme.colors.primary.MAIN_BLUE)};
  &:hover {
    background: ${(props) => props.theme.colors.primary.LIGHT_BLUE};
  }
`;

export const Input = Styled.input<{ value: string, max: number }>`
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

export const NumInputContainer = Styled.div<{ value: string, max: number, hasError:boolean }>`
  padding: 4px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_1};
  border: ${({
    theme, value, max, hasError,
  }) => `2px solid ${hasError ? theme.colors.system.RED : Number(value) === max ? theme.colors.primary.YELLOW : 'transparent'}`};
  cursor: pointer;
`;
export const NumInput = Styled.input`
box-sizing: border-box;
  border: none;
  background: transparent;
  outline: none;
  width: 60px;
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  ::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
  }
`;

export const Container = Styled(Row)`
  gap: 16px;
  height: 55px;
`;

export const InputWrapper = Styled(Column)`
  gap: 4px;
`;
