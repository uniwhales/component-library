import { Styled } from '../../theme';

export const Overlay = Styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  background: black;
  opacity: 0.6;
    z-index: 10000000;
`;

export const ModalWrapper = Styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    z-index: 100000000;
`;

export const ModalContent = Styled.div`
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  padding: 24px;
  z-index: 10;
  border-radius: 12px;
  box-sizing: border-box;
    @media (max-width: 768px) {
     padding: 12px;
  }
`;
export const IconWrapperAbsolute = Styled.div`
  position: absolute;
  right: 18px;
  z-index: 10;
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
