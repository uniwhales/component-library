import React from 'react';
import ReactDom from 'react-dom';
import { DashedSpinner } from '../../atoms/icons';
import {
  ModalWrapper, Overlay, ModalComponent, ModalHeader,
} from './modal.styles';
import { Text } from '../../atoms/texts/text';
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
          <ModalHeader size="M-Regular">
            {header}
          </ModalHeader>
          <Text size="H3-Regular">{title}</Text>
          <DashedSpinner />
          {subtitle && (<Text size="H5-Regular">{subtitle}</Text>)}
          <Text size="M-Regular">
            {content}
          </Text>
          {link && (
            <Text
              href={link.href}
              size="M-Regular"
            >
              {link.text}
            </Text>
          )}
        </ModalComponent>
      </ModalWrapper>
    </>,
    // @ts-ignore
    document.getElementById('modal'),
  );
};
