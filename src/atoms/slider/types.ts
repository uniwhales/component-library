import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface SliderProps {
  value: number;
  min: number;
  max: number;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  setValue: Dispatch<SetStateAction<number>>;
  unit?: string;
}
