import { Column, Row } from '../../atoms/common/flex';
import { Styled } from '../../theme';

export const Container = Styled(Column)`
  align-items: center;
  justify-content: center;
`;

export const MinUsdButton = Styled.div<{ isOpen:boolean }>`
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 10px;
  border-radius: 10px;
  border: ${({ theme, isOpen }) => `1px solid ${isOpen ? theme.textShades.SHADE_MINUS_1 : theme.containerAndCardShades.SHADE_PLUS_3}`};
  font-size: 12px;
  color: ${({ theme, isOpen }) => (isOpen ? theme.textShades.SHADE_MINUS_3 : theme.textShades.SHADE_MINUS_1)};
  cursor: pointer;
  svg {
    fill: ${({ theme, isOpen }) => (isOpen ? theme.textShades.SHADE_MINUS_3 : theme.textShades.SHADE_MINUS_1)}!important;
  }
  &:hover {
    border: ${({ theme }) => `1px solid ${theme.textShades.SHADE_MINUS_1}`};
    color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
      svg {
    fill: ${({ theme }) => theme.textShades.SHADE_MINUS_3}!important;
  }
  }
`;

export const MinUsdButtonContent = Styled(Row)`
  align-items: center;
  justify-contents: center;
  gap: 6px;
`;

export const Arrow = Styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-top: 20px;
  border-bottom: ${({ theme }) => `5px solid ${theme.containerAndCardShades.SHADE_PLUS_3}`};
`;

export const TextRow = Styled(Row)`
  gap: 4px;
`;

export const Details = Styled.div`
  border: ${({ theme }) => `1px solid ${theme.containerAndCardShades.SHADE_PLUS_2}`};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 8px;
`;

export const ButtonContainer = Styled(Row)`
  gap: 8px;
`;
