export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactChild;
  buttonVariant:
  'primary'
  | 'secondary'
  | 'tertiary'
  | 'primary_action'
  | 'secondary_action'
  | 'tiny_action'
  | 'secondary_action_inverse',
  borderRadius?: string,
  disabled?: boolean
  onClick: () => void;
}

export type GenericStylingProps = Partial<Pick<ButtonProps, 'borderRadius'>>;
