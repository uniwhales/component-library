import { ChangeEvent, MouseEvent } from 'react';

export interface SliderProps {
  value: number;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
