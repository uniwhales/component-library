import { ReactElement } from 'react';

export interface DashMessageOneProps {
  title: string;
  message: string;
  night: boolean;
  secondaryMessage?: string;
}
export interface DashMessageTwoProps {
  title: string;
  message: string;
  buttonText: string;
  onClick: () => void;
  night: boolean;
  buttonIcon?: ReactElement
}
