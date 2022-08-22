import React, { FC } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';
import { phone } from '../../layouts/breakpoints';
import { Card } from '../card/card';
import { CrossIcon } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Row } from '../common/flex';
import { ModalBaseProps, ModalCardProps } from './types';
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

export const ModalBody = Styled(Card)<ModalCardProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 4px; 
  max-width: ${({ maxWidth }) => maxWidth ?? '600px'};
  height: ${({ height }) => height ?? '62vh'};
  max-height: ${({ maxHeight }) => maxHeight ?? '62vh'};
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  max-height: 600px;
  ${phone(css`
    width: 80vw;
  `)}
`;

const CloseButton = Styled(Row)`
  flex-flow: row-reverse;
`;

export const ModalBase: FC<ModalBaseProps> = ({
  children, closeFn, icon, height, maxHeight, maxWidth,
}) => (
  <Overlay
    onClick={(e) => {
      e.stopPropagation();
      if (closeFn) closeFn(e);
    }}
  >
    <ModalContainer>
      <ModalBody
        height={height}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        onClick={(e) => e.stopPropagation()}
        noHover
      >
        <CloseButton>
          <IconWrapper cursor="pointer" icon={icon ?? <CrossIcon />} onClick={closeFn} />
        </CloseButton>
        {children}
      </ModalBody>
    </ModalContainer>
  </Overlay>
);
