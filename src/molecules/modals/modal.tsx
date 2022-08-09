import React from 'react';
import ReactDom from 'react-dom';
import { CrossIcon } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import {

  IconWrapperAbsolute,
  ModalContent,
  ModalWrapper,
  Overlay,
} from './modal.styles';
import { ModalProps } from './types';

export const Modal = ({
  show, toggle, children,
}: ModalProps) => {
  if (!show) return null;
  return ReactDom.createPortal(
    <>
      <Overlay onClick={toggle} />
      <ModalWrapper>
        <ModalContent>
          <IconWrapperAbsolute>
            <IconWrapper cursor="pointer" onClick={toggle} icon={<CrossIcon />} />
          </IconWrapperAbsolute>
          {children}
        </ModalContent>
      </ModalWrapper>
    </>,
    document.getElementById('modal') as HTMLElement,
  );
};
