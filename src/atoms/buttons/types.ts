export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactChild;
  width: string;
  buttonVariant:
  'primary'
  | 'secondary'
  | 'tertiary'
  | 'primary_action'
  | 'secondary_action'
  | 'tiny_action'
  | 'secondary_action_inverse'
  | 'special_small'
  | 'special_small_round'
  | 'special_tiny_round'
  | 'special_extra_tiny_round'
  | 'special_extra_tiny_subtle'
  borderRadius?: string,
  disabled?: boolean
}

export type GenericStylingProps = Partial<Pick<ButtonProps, 'borderRadius'>>;
