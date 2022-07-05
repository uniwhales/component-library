import { Styled } from '../../theme';

export const IconContainer = Styled.div`
  height: 36px;
  width: 36px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SmallIcon = Styled.div<{ bgColor: string, smallSize: string }>`
  position: absolute;
  bottom: 50%;
  left: 55%;
  padding: 2px;
  background: ${(props) => (props.theme.containerAndCardShades.SHADE_PLUS_1)};
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.containerAndCardShades.BG_SHADE_PLUS_4};
  z-index: 10;
  display: flex;
  justify-content: center;
  height: 20px;
  width: 20px;
  svg {
    height: ${(props) => props.smallSize};
    width: ${(props) => props.smallSize};
  };
`;

export const LargeIcon = Styled.div<{ bgColor: string, largeSize: string }>`
  position: absolute;
  border-radius: 50%;
  background: ${(props) => (props.bgColor ? props.bgColor : props.theme.containerAndCardShades.SHADE_PLUS_1)};
  padding: 2px;
  border: 2px solid ${(props) => props.theme.containerAndCardShades.BG_SHADE_PLUS_4};
  display: flex;
  justify-content: center;
  height: 32px;
  width: 32px;
  svg {
    height: ${(props) => props.largeSize};
    width: ${(props) => props.largeSize};
  };
    img {
    height: ${(props) => props.largeSize};
    width: ${(props) => props.largeSize};
  };
`;
