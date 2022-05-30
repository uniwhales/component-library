import React from 'react';
import ReactDom from 'react-dom';
import {
  ModalWrapper, Overlay, ModalComponent, ModalHeader, ModalContent,
} from './modal.styles';
import { ModalProps } from './types';

export const Modal = ({ show, toggle }: ModalProps) => {
  if (!show) return null;
  return ReactDom.createPortal(
    <>
      <Overlay onClick={toggle} />
      <ModalWrapper>
        <ModalComponent>
          <ModalHeader>
            <h1>Heading</h1>
          </ModalHeader>
          <ModalContent>
            <p>content</p>
          </ModalContent>
        </ModalComponent>
      </ModalWrapper>
    </>,
    document.getElementById('modal'),
  );
};
