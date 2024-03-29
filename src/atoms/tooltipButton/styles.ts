import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  display: flex;
  height: 300px;
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_1};
  padding: 20px;
  margin-top: 220px;
  margin-left: 350px;
`;

export const TooltipButtonWrapper = Styled.div`
  border: ${({ theme }) => `2px solid ${theme.containerAndCardShades.BG_SHADE_PLUS_4}`};
  border-radius: 50%;
  cursor: pointer;
`;
