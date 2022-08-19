import React from 'react';
import ReactDom from 'react-dom';
import { Overlay } from '../../atoms/common/overlay';
import { CrossIcon } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import {
  IconWrapperAbsolute,
  ModalContent,
  ModalWrapper,
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
            <IconWrapper
              height="14px"
              width="14px"
              cursor="pointer"
              onClick={toggle}
              icon={<CrossIcon />}
            />
          </IconWrapperAbsolute>
          {children}
        </ModalContent>
      </ModalWrapper>
    </>,
    document.getElementById('modal') as HTMLElement,
  );
};
