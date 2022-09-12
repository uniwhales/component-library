import { keyframes } from 'styled-components';
import { Styled } from '../../theme';

export const keyframeFadeInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to { 
    opacity: 1;
  }
`;

export const FadeInTop = Styled.div`
  animation: ${keyframeFadeInTop} 2s linear;
`;

export const keyframeFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to { 
    opacity: 1; 
  }
`;

export const FadeIn = Styled.div`
  animation: ${keyframeFadeIn} 2s ease-in;
`;
