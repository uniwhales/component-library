export interface RadioProps {
  selected: boolean;
  disabled: boolean;
  onChange: (e: any) => void;
  value?: string;
  label?: string;
}
