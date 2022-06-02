export interface RadioProps {
  selected: boolean;
  disabled: boolean;
  onClick: (e: any) => void;
  name: string;
  value?: string;
  label?: string;
}
