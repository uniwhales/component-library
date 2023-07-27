import { MouseEventHandler } from 'react';

export interface ConnectButtonProps {
  account?: string | null;
  onClick: MouseEventHandler<HTMLButtonElement>;
  previewButton?: boolean;
}
