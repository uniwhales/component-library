import React, { FC, useEffect } from 'react';
import { css } from 'styled-components';
import { Styled } from '../../theme';
import { phone, tablet } from '../../layouts/breakpoints';
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
  max-height: ${({ maxHeight }) => maxHeight ?? '600px'};
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};

  ${tablet(css`
    max-width: calc(100vw - 208px);
  `)}

  ${phone(css`
    width: 100vw;
    max-height: 600px;
  `)}
`;

const CloseButton = Styled(Row)`
  flex-flow: row-reverse;
  position: absolute;
  right: 17px;
  top: 17px;
`;

export const ModalBase: FC<ModalBaseProps> = ({
  children, closeFn, icon, height, maxHeight, maxWidth,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
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
            <IconWrapper width="15px" cursor="pointer" icon={icon ?? <CrossIcon />} onClick={closeFn} />
          </CloseButton>
          {children}
        </ModalBody>
      </ModalContainer>
    </Overlay>
  );
};
