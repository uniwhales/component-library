import { Styled } from '../../theme';
import { SliderProps } from './types';

export const SliderInput = Styled.input<SliderProps>`
  margin: 0;
  padding: 0;
  height: 16px;

  &::-webkit-slider-runnable-track {
  box-sizing: border-box;
  border: none;
  border-radius: 12px;
  height: 8px;
  background-color: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
  }

  &::-webkit-slider-thumb {
  margin-top: calc(0.5 * (8px - 16px));
  box-sizing: border-box;
  border: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: red;
  cursor: pointer;
  }

`;

export const MaxButton = Styled.button<SliderProps>`
  padding: 4px 12px;
  margin-left: 8px;
  gap 8px;
  border-radius: 12px;
  background: ${(props) => (props.value === 100 ? props.theme.colors.system.WHITE : props.theme.containerAndCardShades.NEUTRAL_SHADE_0)};
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  border: none;
  cursor: pointer;
`;

export const Container = Styled.div`
  display: flex;
  align-items: center;
`;
