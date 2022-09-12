import { Styled } from '../../theme';

export const Overlay = Styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.OVERLAY};
  background: ${({ theme }) => theme.OVERLAY};
`;
