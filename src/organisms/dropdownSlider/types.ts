export interface MinUsdProps {
  min: number
  max: number
  $buttonText: string
  description: JSX.Element
  onApply: (value: string) => void
  $buttonIcon?: JSX.Element
  $buttonWidth?: string
  $buttonHeight?: string
  unit?: string
  $useLogarithmic?:boolean
  disabled?:boolean
}
