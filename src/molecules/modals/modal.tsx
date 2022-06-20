import React from 'react';
import ReactDom from 'react-dom';
import {
  ModalWrapper, Overlay,
} from './modal.styles';
import { ModalProps } from './types';

export const Modal = ({
  show, toggle, children,
}: ModalProps) => {
  const portalDiv = document.getElementById('modal') as HTMLElement;
  if (!show) return null;
  return ReactDom.createPortal(
    <>
      <Overlay onClick={toggle} />
      <ModalWrapper>
        {children}
      </ModalWrapper>
    </>,
    portalDiv,
  );
};
