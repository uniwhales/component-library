import { styled } from 'styled-components';
import { Card } from '../../atoms/card/card';

export const ModalWrapper = styled.div<{ isMobile?: boolean }>`
  position: fixed;
  top: ${({ isMobile }) => (isMobile ? '0px' : '50%')};
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => theme.zIndex.MODAL};
`;

export const ModalContent = styled(Card)<{ modalVariant: 'single' | 'double', isMobile?: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 6px;
  max-width: ${({ modalVariant, isMobile }) => (isMobile && (modalVariant === 'double' ? '748px' : '360px'))};
  max-height: ${({ isMobile }) => !isMobile && '650px'};
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  text-align: left;
  box-sizing: border-box;
`;
export const IconWrapperAbsolute = styled.div`
  position: absolute;
  right: 18px;
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  top: 18px;
  padding: 3px;
`;

export const CloseSection = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
     svg {
      height: 16px;
      width: 16px;
     }
  }
`;

export const DummyModalContent = styled.div`
  width: 360px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
