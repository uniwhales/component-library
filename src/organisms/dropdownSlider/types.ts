import { Dispatch, SetStateAction } from 'react';

export interface MinUsdProps {
  min: number
  max: number
  buttonText: string
  description: JSX.Element
  sliderValue: string;
  setSliderValue: Dispatch<SetStateAction<string>>
  onApply: (value: string) => void
  buttonIcon?: JSX.Element
  buttonWidth?: string
  buttonHeight?: string
  unit?: string
}
