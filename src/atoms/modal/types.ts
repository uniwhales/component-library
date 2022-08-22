import { MouseEventHandler, ReactElement } from 'react';
import { CSSProperties } from 'styled-components';

export interface ModalData {
  id?: number;
  title: string;
  datetime: number;
  text?: string;
  image: string;
}

export type ModalCardProps = {
  height: string;
} & Pick<CSSProperties, | 'maxWidth' | 'maxHeight'>;

export type ModalBaseProps = {
  closeFn?: MouseEventHandler<HTMLDivElement>
  children: ReactElement
  icon?: ReactElement
} & ModalCardProps;
export type ExampleModalProps = {
  latest: ModalData[];
} & Pick<ModalBaseProps, 'closeFn'>;
