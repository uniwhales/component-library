import {
  MouseEventHandler, ReactElement,
} from 'react';
import { SvgGradients } from '../../theme';

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
  headerIconFill?: string
  headerIconGradient?: SvgGradients
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
