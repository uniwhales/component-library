import { css, keyframes } from 'styled-components';

export const keyframeFadeInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to { 
    opacity: 1;
  }
  `;
export const FadeInTop = css`animation: ${keyframeFadeInTop} 0.3s ease-in-out`;
export const keyframeFadeOutTop = keyframes`
  from {
    opacity: 1;
  }
  to { 
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const FadeOutTop = css`animation: ${keyframeFadeOutTop} 0.3s ease-in-out`;

export const keyframeFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to { 
    opacity: 1; 
  }
`;

export const FadeIn = css`animation: ${keyframeFadeIn} 2s ease-in-out`;

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

export const FadePopUp = css`animation: ${keyframeFadePopUp} 0.3s ease-in`;
