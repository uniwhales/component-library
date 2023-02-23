import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface SliderProps {
  value: string;
  min: number;
  max: number;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  setValue: Dispatch<SetStateAction<string>>;
  hasError: boolean;
  errorMessage?: string;
  charLimit?: number;
  unit?: string;
}
