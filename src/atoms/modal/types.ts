import {
  MouseEventHandler, ReactElement,
} from 'react';
import { IconWrapper } from '../icons/iconWrapper';

export interface ModalData {
  id?: number;
  title: string;
  datetime: number;
  text?: string;
  image: string;
}

export type ModalBaseProps = {
  headerText?: string
  HeaderIcon?: typeof IconWrapper
  modalVariant: 'single' | 'double'
  modalContent: JSX.Element
  closeFn?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  additionalTinyAction?: ReactElement
  maxWidth?: string
};
export type ExampleModalProps = {
  latest: ModalData[];
} & Pick<ModalBaseProps, 'closeFn'>;

export type DoubleModalProps = {
  placeholderText: string;
} & Pick<ModalBaseProps, 'closeFn'>;
