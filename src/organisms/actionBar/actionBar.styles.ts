import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  border-radius: 12px;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ActionTags = Styled.div`
  display: flex;
  gap: 24px;
`;
export const ActionChains = Styled.div``;
