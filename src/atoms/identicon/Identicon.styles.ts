import { Styled } from '../../theme';

export const Container = Styled.div<{ containerSize: string }>`
  height: ${({ containerSize }) => containerSize};
  width: ${({ containerSize }) => containerSize};
  background-color: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_2};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;
