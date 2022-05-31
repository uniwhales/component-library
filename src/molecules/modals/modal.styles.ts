import { Text } from '../../atoms/texts/text';
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

export const ModalComponent = Styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  padding: 48px 48px 96px 48px;
  z-index: 10;
  border-radius: 12px;
  max-width: 430px;
  min-height: 555px;
  box-sizing: border-box;
`;

export const ModalHeader = Styled(Text)`
  strong {
    font-weight: 700;
    text-decoration: underline;
  }
`;
