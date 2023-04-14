import { Column } from '../../atoms/common/flex';
import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  padding: 20px;
`;

export const Target = Styled.div`
  background: ${({ theme }) => theme.colors.primary.DARK_BLUE};
  padding: 50px;
  border-radius: 16px;
  cursor: pointer;
`;

export const Content = Styled(Column)`
  gap: 10px;
`;
