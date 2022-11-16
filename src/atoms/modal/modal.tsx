import React, {
  FC, useEffect, useState,
} from 'react';
import { localTheme } from '../../theme';

import { FloatingClose } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { ModalBaseProps } from './types';
import { Overlay } from '../common/overlay';
import { Text } from '../texts/text';
import {
  ModalBody, ModalContainer, ModalHeaderContainer, CloseButton, ModalContentContainer,
} from './styles';
import { Column } from '../common/flex';

export const ModalBase: FC<ModalBaseProps> = ({
  closeFn,
  mainContent,
  additionalContent,
  headerText,
  headerIcon,
  modalVariant,
  showAdditionalContent,

}) => {
  const [replay, setReplay] = useState(false);
  const theme = localTheme();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <Overlay />
      <ModalContainer onClick={(e) => {
        e.stopPropagation();
        if (!closeFn) return;
        setReplay(true);
        setTimeout(() => closeFn(e), 150);
      }}
      >
        <ModalBody
          onClick={(e) => e.stopPropagation()}
          replay={replay}
          modalVariant={modalVariant}
          showAdditionalContent={showAdditionalContent}
        >
          <>
            <CloseButton>
              <IconWrapper
                onClick={(e) => {
                  if (!closeFn) return;
                  setReplay(true);
                  setTimeout(() => closeFn(e), 150);
                }}
                cursor="pointer"
                icon={<FloatingClose />}
                fill={theme.contrastColor.HIGH_CONTRAST}
                height="18px"
                width="18px"
              />
            </CloseButton>
            <ModalHeaderContainer>
              {headerIcon && <IconWrapper height="26px" width="26px" icon={headerIcon} />}
              <Text
                size="L-Regular"
                color={theme.textShades.SHADE_MINUS_3}
              >
                {headerText}
              </Text>
            </ModalHeaderContainer>
            <ModalContentContainer>
              <Column>
                {mainContent}
              </Column>
              {showAdditionalContent && <Column>{additionalContent}</Column>}
            </ModalContentContainer>

          </>
        </ModalBody>
      </ModalContainer>
    </>
  );
};
