import { Styled } from '../../theme';
import { FadeIn } from '../animations/fades';

export const Overlay = Styled.div`
  ${FadeIn};
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.OVERLAY};
  background: ${({ theme }) => theme.OVERLAY};
`;
