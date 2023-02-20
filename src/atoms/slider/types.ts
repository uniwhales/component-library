import { ChangeEvent, MouseEvent } from 'react';

export interface SliderProps {
  value: number;
  min: number;
  max: number;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  showMaxButton: boolean;
  onMaxClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
