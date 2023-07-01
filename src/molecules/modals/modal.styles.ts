import { Card } from '../../atoms/card/card';
import { Styled } from '../../theme';

export const ModalWrapper = Styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => theme.zIndex.MODAL};
`;

export const ModalContent = Styled(Card)<{ modalVariant: 'single' | 'double' }>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 6px;
  max-width: ${({ modalVariant }) => (modalVariant === 'double' ? '748px' : '360px')};
  max-height: 650px;
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  text-align: left;
  box-sizing: border-box;
`;
export const IconWrapperAbsolute = Styled.div`
  position: absolute;
  right: 18px;
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  top: 18px;
  padding: 3px;
`;

export const CloseSection = Styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
     svg {
      height: 16px;
      width: 16px;
     }
  }
`;

export const DummyModalContent = Styled.div`
  width: 360px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
