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
  CloseWrapper,
} from './styles';
import useBreakpoint, { Breakpoints } from '../../hooks/useBreakpoint';
import { Column } from '../common/flex';

export const ModalBase: FC<ModalBaseProps> = ({
  closeFn,
  closeOnOverlayClick = true,
  headerText,
  headerIcon,
  headerIconFill,
  modalVariant,
  additionalTinyAction,
  modalContent,
  maxWidth,
  hasSidebar = true,
}) => {
  const [replay, setReplay] = useState(false);
  const theme = localTheme();
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint <= Breakpoints.Phone;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <Overlay />
      <ModalContainer
        hasSidebar={hasSidebar}
        onClick={(e) => {
          e.stopPropagation();
          if (!closeFn || !closeOnOverlayClick) return;
          setReplay(true);
          setTimeout(() => closeFn(e), 150);
        }}
      >
        <ModalBody
          padding="36px"
          isMobile={isMobile}
          onClick={(e) => e.stopPropagation()}
          replay={replay}
          modalVariant={modalVariant}
          maxWidth={maxWidth}
          noHover
        >
          <CloseWrapper>
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
          </CloseWrapper>
          <Column>
            <ModalHeaderContainer>
              <HeaderAndIconContainer>
                {headerIcon && <IconWrapper fill={headerIconFill} height="26px" width="26px" icon={headerIcon} />}
                {headerText && (typeof headerText === 'string' ? (
                  <Text
                    size="16-Regular"
                    color={theme.textShades.SHADE_MINUS_3}
                  >
                    {headerText}
                  </Text>
                ) : headerText)}
              </HeaderAndIconContainer>
              {additionalTinyAction && (
                <div>
                  {additionalTinyAction}
                </div>
              )}
            </ModalHeaderContainer>
            {modalContent}
          </Column>
        </ModalBody>
      </ModalContainer>
    </>
  );
};
