import { styled } from 'styled-components';
import { ZIndex } from '../../utils/constants';
import { FadeIn } from '../animations/fades';

export const Overlay = styled.div<{ zIndex?: ZIndex }>`
  ${FadeIn};
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: ${({ theme, zIndex }) => zIndex ?? theme.zIndex.OVERLAY};
  background: ${({ theme }) => theme.OVERLAY};
`;
