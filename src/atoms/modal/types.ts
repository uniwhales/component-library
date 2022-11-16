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
  mainContent: ReactElement
  headerText: string
  headerIcon?: ReactElement
  modalVariant: 'single' | 'double'
  closeFn?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  additionalContent?: ReactElement
  showAdditionalContent?: boolean
};
export type ExampleModalProps = {
  latest: ModalData[];
} & Pick<ModalBaseProps, 'closeFn'>;

export type DoubleModalProps = {
  placeholderText: string;
} & Pick<ModalBaseProps, 'closeFn'>;
