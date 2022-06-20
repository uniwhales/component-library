import React from 'react';
import ReactDom from 'react-dom';
import { CrossIcon } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import {
  CloseSection,
  ModalContent,
  ModalWrapper,
  Overlay,
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
        <ModalContent>
          <CloseSection>
            <IconWrapper cursor="pointer" onClick={toggle} icon={<CrossIcon />} />
          </CloseSection>
          {children}
        </ModalContent>
      </ModalWrapper>
    </>,
    portalDiv,
  );
};
