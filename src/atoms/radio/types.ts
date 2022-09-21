import { RadioSize } from '../../utils/getSize';

export interface RadioProps {
  selected: boolean;
  disabled: boolean;
  onClick: (e: any) => void;
  name: string;
  size: RadioSize;
  value?: string;
  label?: string;
}
