import { Styled } from '../../theme';

export const ModalWrapper = Styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ theme }) => theme.zIndex.MODAL};
`;

export const ModalContent = Styled.div`
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  padding: 24px;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  @media (max-width: 768px) {
    padding: 12px;
  }
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
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
