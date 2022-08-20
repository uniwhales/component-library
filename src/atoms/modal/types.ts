import { MouseEventHandler, ReactElement } from 'react';

export interface ModalData {
  id?: number;
  title: string;
  datetime: number;
  text?: string;
  image: string;
}

export type ModalBaseProps = {
  closeFn: MouseEventHandler<HTMLDivElement>
  children: ReactElement
  icon?: ReactElement
};
export type ExampleModalProps = {
  latest: ModalData[];
} & Pick<ModalBaseProps, 'closeFn'>;
