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
import { useIsMobile } from '../../hooks/useIsMobile';

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
  const isMobile = useIsMobile();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return ReactDom.createPortal(
    <>
      <Overlay onClick={toggle} />
      <ModalWrapper $isMobile={isMobile}>
        <ModalContent
          $modalVariant={modalVariant}
          $noHover
          $isMobile={isMobile}
        >
          <>

            <ModalHeaderContainer>
              <HeaderAndIconContainer>
                {headerIcon && <IconWrapper height="26px" width="26px" icon={headerIcon} />}
                {headerText && (
                  <Text
                    size="16-Regular"
                    textColor="SHADE_MINUS_3"
                  >
                    {headerText}
                  </Text>
                )}
              </HeaderAndIconContainer>
              {additionalTinyAction && additionalTinyAction}
              <CloseButton>
                <IconWrapper
                  onClick={() => {
                    setTimeout(() => toggle(), 150);
                  }}
                  cursor="pointer"
                  icon={<FloatingClose />}
                  fill={theme.colors.HIGH_CONTRAST}
                  height="18px"
                  width="18px"
                />
              </CloseButton>
            </ModalHeaderContainer>
            {modalContent}
          </>
        </ModalContent>
      </ModalWrapper>
    </>,
    document.getElementById('modal') as HTMLElement,
  );
};
