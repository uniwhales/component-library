import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 300px;
  background: ${({ theme }) => theme.colors.SHADE_PLUS_1};
  padding: 20px;
  margin-top: 220px;
  margin-left: 350px;
`;

export const TooltipButtonWrapper = styled.div`
  border: ${({ theme }) => `2px solid ${theme.colors.BG_SHADE_PLUS_4}`};
  border-radius: 50%;
  cursor: pointer;
`;
