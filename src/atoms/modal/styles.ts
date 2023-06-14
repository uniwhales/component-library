import { css } from 'styled-components';
import { Column, Row } from '../common/flex';
import { Styled } from '../../theme';
import { phone, tablet } from '../../layouts/breakpoints';
import { Card } from '../card/card';

export const ModalContainer = Styled.div<{ isMobile:boolean }>`
  position: fixed;
  height: 100%;
  width: 100%;
  left: ${({ isMobile }) => !isMobile && '64px'};
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.MODAL};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = Styled(Card)<{ replay: boolean, modalVariant: 'single' | 'double', maxWidth?: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 6px;
  max-width: ${({ modalVariant, maxWidth }) => (maxWidth || (modalVariant === 'double' ? '748px' : '360px'))};
  max-height: 650px;
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  text-align: left;

  ${tablet(css<{ replay: boolean }>`
    max-width: calc(100vw - 100px);
  `)}

  ${phone(css`
    width: 100vw;
    max-height: 600px;
  `)}
`;

export const CloseButton = Styled.div`
  top: 0;
  right: -30px;
  position: absolute;
  background: ${({ theme }) => theme.containerAndCardShades.NEUTRAL_SHADE_0};
  height: 22px;
  width: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
     background:${({ theme }) => theme.colors.primary.MANGO};
  }
`;

export const ModalHeaderContainer = Styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: space-between;
`;

export const HeaderAndIconContainer = Styled(Row)`
  gap: 8px;
`;

export const ModalContentContainer = Styled.div`
  display: flex;
  gap: 24px;
  overflow: scroll;
`;

export const ExtraContentRow = Styled(Row)`
  align-items: center;
  cursor: pointer;
  padding: 12px 0;
  gap: 8px;
`;

export const ModalColumn = Styled(Column)`
  width: 360px;
`;
