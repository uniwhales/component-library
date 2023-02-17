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
  ModalBody,
  ModalContainer,
  ModalHeaderContainer,
  CloseButton,
  HeaderAndIconContainer,
} from './styles';

export const ModalBase: FC<ModalBaseProps> = ({
  closeFn,
  headerText,
  headerIcon,
  headerIconFill,
  modalVariant,
  additionalTinyAction,
  modalContent,
  maxWidth,
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
          maxWidth={maxWidth}
          noHover
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
              <HeaderAndIconContainer>
                {headerIcon && <IconWrapper fill={headerIconFill} height="26px" width="26px" icon={headerIcon} />}
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
        </ModalBody>
      </ModalContainer>
    </>
  );
};
