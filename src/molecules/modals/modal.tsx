import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import { Overlay } from '../../atoms/common/overlay';
import { FloatingClose } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { CloseButton, HeaderAndIconContainer, ModalHeaderContainer } from '../../atoms/modal/styles';
import { Text } from '../../atoms/texts/text';
import { localTheme } from '../../theme';
import {
  ModalContent,
  ModalWrapper,
} from './modal.styles';
import { ModalProps } from './types';

export const Modal = ({
  show,
  toggle,
  headerText,
  headerIcon,
  modalVariant,
  additionalTinyAction,
  modalContent,
}: ModalProps) => {
  if (!show) return null;
  const theme = localTheme();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return ReactDom.createPortal(
    <>
      <Overlay onClick={toggle} />
      <ModalWrapper>
        <ModalContent
          modalVariant={modalVariant}
          noHover
        >
          <>
            <CloseButton>
              <IconWrapper
                onClick={() => {
                  setTimeout(() => toggle(), 150);
                }}
                cursor="pointer"
                icon={<FloatingClose />}
                fill={theme.contrastColor.HIGH_CONTRAST}
                height="18px"
                width="18px"
              />
            </CloseButton>
            <ModalHeaderContainer>
              <HeaderAndIconContainer>
                {headerIcon && <IconWrapper height="26px" width="26px" icon={headerIcon} />}
                {headerText && (
                  <Text
                    size="L-Regular"
                    color={theme.textShades.SHADE_MINUS_3}
                  >
                    {headerText}
                  </Text>
                )}
              </HeaderAndIconContainer>
              {additionalTinyAction && additionalTinyAction}
            </ModalHeaderContainer>
            {modalContent}
          </>
        </ModalContent>
      </ModalWrapper>
    </>,
    document.getElementById('modal') as HTMLElement,
  );
};
