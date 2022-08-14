import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  border-radius: 12px;
  padding: 12px 24px;
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const ActionTags = Styled.div`
  display: flex;
  gap: 24px;
`;
export const SelectWrapper = Styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;
export const ActionChains = Styled.div``;
export const ActionTypes = Styled.div``;
