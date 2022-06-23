import { Styled } from '../../theme';
import { OverlappedIconProps } from './types';

export const IconContainer = Styled.div`
  height: 36px;
  width: 36px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SmallIcon = Styled.div<Pick<OverlappedIconProps, 'bgColor'>>`
  position: absolute;
  top: 0;
  left: 70%;
  padding: 2px;
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.containerAndCardShades.SHADE_PLUS_1)};
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.containerAndCardShades.BG_SHADE_PLUS_4};
  z-index: 10;
`;

export const LargeIcon = Styled.div<Pick<OverlappedIconProps, 'bgColor'>>`
  position: absolute;
  border-radius: 50%;
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.containerAndCardShades.SHADE_PLUS_1)};
  padding: 2px;
  border: 2px solid ${(props) => props.theme.containerAndCardShades.BG_SHADE_PLUS_4};
`;
