import React from 'react';
import ReactDom from 'react-dom';
import {
  ModalWrapper, Overlay, ModalComponent, ModalHeader,
  ModalTitle, ModalSubtitle, ModalContent, ModalLink,
} from './modal.styles';
import { PlaceholderSpinner } from './PlaceholderSpinner';
import { ModalProps } from './types';

export const Modal = ({
  show, toggle, header, title, subtitle, content, link,
}: ModalProps) => {
  if (!show) return null;
  return ReactDom.createPortal(
    <>
      <Overlay onClick={toggle} />
      <ModalWrapper>
        <ModalComponent>
          <ModalHeader>
            {header}
          </ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <PlaceholderSpinner />
          {subtitle && (<ModalSubtitle>{subtitle}</ModalSubtitle>)}
          <ModalContent>
            {content}
          </ModalContent>
          {link && (<ModalLink href={link.href}>{link.text}</ModalLink>)}
        </ModalComponent>
      </ModalWrapper>
    </>,
    document.getElementById('modal'),
  );
};
