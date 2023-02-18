import { ChangeEvent, MouseEvent } from 'react';

export interface SliderProps {
  value: number;
  min: number;
  max: number;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
