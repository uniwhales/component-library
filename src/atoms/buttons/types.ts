export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactChild;
  width?: string;
  height?: string;
  $buttonVariant:
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
  | 'icon_only'
  | 'square'
  | 'onboarding_primary'
  | 'onboarding_secondary'
  | 'close_primary'
  | 'close_secondary'
  | 'close_modal'
  $borderRadius?: string,
  disabled?: boolean
  size?: string
  color?: string
}

export type GenericStylingProps = Partial<Pick<ButtonProps, '$borderRadius'>>;
