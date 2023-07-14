import { styled } from 'styled-components';

export const IconContainer = styled.div`
  height: 36px;
  width: 36px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SmallIcon = styled.div<{ bgColor: string, smallSize: string }>`
  position: absolute;
  bottom: 50%;
  left: 55%;
  padding: 2px;
  background: ${(props) => (props.theme.colors.SHADE_PLUS_1)};
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.BG_SHADE_PLUS_4};
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
  display: flex;
  justify-content: center;
  height: 20px;
  width: 20px;
`;

export const LargeIcon = styled.div<{ bgColor: string, largeSize: string }>`
  position: absolute;
  border-radius: 50%;
  background: ${(props) => (props.bgColor ? props.bgColor : props.theme.colors.SHADE_PLUS_1)};
  padding: 2px;
  border: 2px solid ${(props) => props.theme.colors.BG_SHADE_PLUS_4};
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
    img {
    height: ${(props) => props.largeSize};
    width: ${(props) => props.largeSize};
  };
`;
