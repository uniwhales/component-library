import {
  MouseEventHandler, ReactElement,
} from 'react';

export interface ModalData {
  id?: number;
  title: string;
  datetime: number;
  text?: string;
  image: string;
}

export type ModalBaseProps = {
  headerText?: string
  headerIcon?: ReactElement
  modalVariant: 'single' | 'double'
  modalContent: JSX.Element
  closeFn?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  additionalTinyAction?: ReactElement
};
export type ExampleModalProps = {
  latest: ModalData[];
} & Pick<ModalBaseProps, 'closeFn'>;

export type DoubleModalProps = {
  placeholderText: string;
} & Pick<ModalBaseProps, 'closeFn'>;
