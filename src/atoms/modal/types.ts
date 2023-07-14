import {
  MouseEventHandler, ReactElement,
} from 'react';

export type ModalBaseProps = {
  headerText?: string | ReactElement
  headerIcon?: ReactElement
  headerIconFill?: string
  modalVariant: 'single' | 'double'
  modalContent: JSX.Element
  closeOnOverlayClick?: boolean
  closeFn?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  additionalTinyAction?: ReactElement
  maxWidth?: string
};
