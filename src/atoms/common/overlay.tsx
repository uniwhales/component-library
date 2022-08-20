import { Styled } from "../../theme";

export const Overlay = Styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: 100;
  background: ${({theme}) => theme.OVERLAY};
`;
