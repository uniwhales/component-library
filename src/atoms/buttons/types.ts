export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactChild;
  buttonVariant:
  'primary'
  | 'secondary'
  | 'tertiary'
  | 'primary_action'
  | 'secondary_action'
  | 'tiny_action'
  | 'secondary_action_inverse'
  | 'special_small'
  | 'special_small_round',
  borderRadius?: string,
  disabled?: boolean
  onClick: () => void;
}

export type GenericStylingProps = Partial<Pick<ButtonProps, 'borderRadius'>>;
