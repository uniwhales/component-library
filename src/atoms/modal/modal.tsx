import React, { FC, MouseEvent } from 'react';
import { useModal } from '@ebay/nice-modal-react';
import { css, CSSProperties } from 'styled-components';
import { Styled } from '../../theme';
import { phone } from '../../layouts/breakpoints';
import { Card } from '../card/card';
import { SettingsBars } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Row } from '../common/flex';
import { Overlay } from '../common/overlay';

export const ModalContainer = Styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = Styled(Card)<{ height?: CSSProperties['height'], maxWidth?: CSSProperties['maxWidth'] }>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 4px; 
  max-width: ${({ maxWidth }) => maxWidth ?? '600px'};
  height: ${({ height }) => height ?? '62vh'};
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  max-height: 600px;
  ${phone(css`
    width: 80vw;
  `)}
`;

const CloseButton = Styled(Row)`
  flex-flow: row-reverse;
`;

export const ModalBase: FC<any> = ({ children }) => {
  const modal = useModal();

  return (
    <Overlay
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        modal.remove();
      }}
    >
      <ModalContainer>
        <ModalBody onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()} noHover>
          <CloseButton>
            <IconWrapper cursor="pointer" icon={<SettingsBars />} onClick={() => modal.remove()} />
          </CloseButton>
          {children}
        </ModalBody>
      </ModalContainer>
    </Overlay>
  );
};
