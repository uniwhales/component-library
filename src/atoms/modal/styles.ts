import { css } from 'styled-components';
import { Column, Row } from '../common/flex';
import { Styled } from '../../theme';
import { Card } from '../card/card';

export const ModalContainer = Styled.div<{ hasSidebar?:boolean }>`
  position: fixed;
  height: 100%;
  width: 100%;
  left: ${({ hasSidebar }) => hasSidebar && '64px'};
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.MODAL};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = Styled(Card)<{ replay: boolean, modalVariant: 'single' | 'double', maxWidth?: string, isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  text-align: left;
  box-sizing: border-box;
  max-height: 750px;

  ${({ isMobile, modalVariant, maxWidth }) => (isMobile ? css`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: calc(100vh - 55px);
  ` : css`
    position: relative;
    max-width: ${(maxWidth || (modalVariant === 'double' ? '748px' : '360px'))};
    max-height: 650px;
  `)}
`;

export const CloseButton = Styled.div`
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
