import { Styled } from '../../theme';

export const Overlay = Styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const ModalWrapper = Styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalContent = Styled.div`
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  padding: 48px 48px 96px 48px;
  z-index: 10;
  border-radius: 12px;
  box-sizing: border-box;
  @media (max-width: 768px) {
     padding: 12px 12px 24px 12px;
  }
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
