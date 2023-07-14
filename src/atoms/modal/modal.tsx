import React, { useEffect, useState } from 'react';
import { ModalBaseProps } from './types';
import { CloseButton, ModalBodyDesktop, ModalContainer } from './styles';
import { isWindowAvailable } from '../../utils/isWindowAvailable';
import { localTheme } from '../../theme';
import { Overlay } from '../common/overlay';
import { Row } from '../common/flex';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';
import { FloatingClose } from '../icons';

export const ModalBase = ({
  closeFn,
  closeOnOverlayClick = true,
  headerText,
  headerIcon,
  headerIconFill,
  modalVariant,
  additionalTinyAction,
  modalContent,
  maxWidth,
}: ModalBaseProps) => {
  const [replay, setReplay] = useState(false);
  const theme = localTheme();

  useEffect(() => {
    if (!isWindowAvailable()) return () => {};
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <Overlay />
      <ModalContainer
        onClick={(e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          if (!closeFn || !closeOnOverlayClick) return;
          setReplay(true);
          setTimeout(() => closeFn(e), 150);
        }}
      >
        <ModalBodyDesktop
          replay={replay}
          position={['fixed', 'absolute']}
          padding="25px 18px"
          onClick={(e: { stopPropagation: () => void; }) => e.stopPropagation()}
          modalVariant={modalVariant}
          maxWidth={maxWidth}
          noHover
        >
          <>
            <Row justifyContent="space-between" alignItems="center" gap="6px">
              <Row gap="8px">
                {headerIcon && <IconWrapper fill={headerIconFill} height="26px" width="26px" icon={headerIcon} />}
                {headerText && (typeof headerText === 'string' ? (
                  <Text size="16-Regular" textColor="SHADE_MINUS_3">{headerText}</Text>
                ) : headerText)}
              </Row>
              {additionalTinyAction && additionalTinyAction}
              <CloseButton>
                <IconWrapper
                  onClick={(e) => {
                    if (!closeFn) return;
                    setReplay(true);
                    setTimeout(() => closeFn(e), 150);
                  }}
                  cursor="pointer"
                  icon={<FloatingClose />}
                  fill={theme.colors.HIGH_CONTRAST}
                  height="18px"
                  width="18px"
                />
              </CloseButton>
            </Row>
            {modalContent}
          </>
        </ModalBodyDesktop>
      </ModalContainer>
    </>
  );
};
