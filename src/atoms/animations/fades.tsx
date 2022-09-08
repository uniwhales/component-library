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

export const keyframeFadePopUp = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  85% {
    transform: scale(1.2);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const FadePopUp = Styled.div`
  animation: ${keyframeFadePopUp} 0.3s ease-in;
`;
