import { css, styled } from 'styled-components';
import { Column, Row } from '../common/flex';
import { phone, tablet } from '../../layouts/breakpoints';
import { Card } from '../card/card';

export const ModalContainer = styled.div<{ isMobile?:boolean }>`
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


export const ModalBody = styled(Card)<{ replay: boolean, modalVariant: 'single' | 'double', maxWidth?: string, isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  text-align: left;
  box-sizing: border-box;
  
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

export const CloseButton = styled.div`
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

export const ModalHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: space-between;
`;

export const HeaderAndIconContainer = styled(Row)`
  gap: 8px;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  gap: 24px;
  overflow: scroll;
`;

export const ExtraContentRow = styled(Row)`
  align-items: center;
  cursor: pointer;
  padding: 12px 0;
  gap: 8px;
`;

export const ModalColumn = styled(Column)`
  width: 360px;
`;
