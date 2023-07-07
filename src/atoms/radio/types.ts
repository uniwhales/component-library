export interface RadioProps {
  selected: boolean;
  disabled: boolean;
  onClick: (e: any) => void;
  name: string;
  $isLarge?: boolean;
  value?: string;
  label?: string;
  labelColor?: string;
}
