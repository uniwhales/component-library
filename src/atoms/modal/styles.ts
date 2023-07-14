import { styled } from 'styled-components';
import { Row } from '../common/flex';
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

type ModalProps = { modalVariant: 'single' | 'double', maxWidth?: string, replay?: boolean };

export const ModalBody = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  background: ${({ theme }) => theme.colors.SHADE_PLUS_3};
  text-align: left;
  box-sizing: border-box;
`;

export const ModalBodyMobile = styled(ModalBody)`
  top: 0px;
  left: 0px;
  width: 100vw;
  height: calc(100vh - 55px);
  position: fixed;
`;

export const ModalBodyDesktop = styled(ModalBody)<ModalProps>`  
  position: absolute; 
  max-width: ${({ maxWidth, modalVariant }) => (maxWidth || (modalVariant === 'double' ? '748px' : '360px'))};
  max-height: 650px;
`;

export const CloseButton = styled.div`
  background: ${({ theme }) => theme.colors.NEUTRAL_SHADE_0};
  height: 22px;
  width: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background:${({ theme }) => theme.colors.MANGO};
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
