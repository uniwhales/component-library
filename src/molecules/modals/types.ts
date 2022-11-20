import { ReactElement } from 'react';

export interface ModalProps {
  show: boolean;
  toggle: () => void
  headerText: string
  modalVariant: 'single' | 'double'
  modalContent: JSX.Element
  headerIcon?: ReactElement
  additionalTinyAction?: ReactElement
}
