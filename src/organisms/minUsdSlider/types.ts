export interface MinUsdProps {
  min: number
  max: number
  buttonText: string
  description: JSX.Element
  onApply: (value: string) => void
  buttonIcon?: JSX.Element
  unit?: string
}
