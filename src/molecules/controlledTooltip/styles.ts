import { styled } from 'styled-components';
import { Column } from '../../atoms/common/flex';

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Target = styled.div`
  background: ${({ theme }) => theme.colors.DARK_BLUE};
  padding: 50px;
  border-radius: 16px;
  cursor: pointer;
`;

export const Content = styled(Column)`
  gap: 10px;
  white-space: pre-line;
`;
