import { Styled } from '../../theme';

export const Overlay = Styled.div`
  background-color: rgba(0, 0, 0, 0.2);
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

export const ModalComponent = Styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  padding: 48px 48px 96px 48px;
  z-index: 10;
  border-radius: 12px;
  max-width: 430px;
  box-sizing: border-box;
`;

export const ModalHeader = Styled.h3`
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  font-size: 16px;
  line-height: 24px;
  font-weight:400;
  strong {
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const ModalTitle = Styled.h2`
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  font-size: 32px;
  line-height: 40px;
  font-weight:300;
`;

export const ModalSubtitle = Styled.h4`
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  font-size: 20px;
  line-height: 32px;
  font-weight:300;
`;

export const ModalContent = Styled.p`
  color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  font-size: 16px;
  line-height: 24px;
  font-weight:400;
`;

export const ModalLink = Styled.a`
  color: ${(props) => props.theme.colors.primary.UWL_BLUE};
  font-size: 16px;
  line-height: 24px;
  font-weight:700;
  cursor: pointer;
  text-decoration: underline;
`;
