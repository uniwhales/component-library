import { Column } from '../../atoms/common/flex';
import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Container = Styled(Column)`
  width: 420px;
  padding: 24px;
  gap: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
`;
