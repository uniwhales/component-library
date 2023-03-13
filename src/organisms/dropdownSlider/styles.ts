import { Column, Row } from '../../atoms/common/flex';
import { Styled } from '../../theme';

export const Container = Styled(Column)`
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const OpenContainer = Styled.div`
  position: absolute;
  top: 50px;
  z-index: ${({ theme }) => theme.zIndex.MODAL};
`;

export const MinUsdButton = Styled.div<{ isOpen:boolean, width?:string, height?:string }>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  z-index: ${({ theme, isOpen }) => isOpen && theme.zIndex.MODAL};
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme, isOpen }) => (isOpen ? theme.colors.primary.MAIN_BLUE : theme.containerAndCardShades.BG_SHADE_PLUS_4)};
  border: ${({ theme }) => `1px solid ${theme.textShades.SHADE_MINUS_1}`};
  font-size: 12px;
  color: ${({ theme, isOpen }) => (isOpen ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1)};
  cursor: pointer;
  justify-content: space-between;
  svg {
    fill: ${({ theme, isOpen }) => (isOpen ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1)}!important;
  }
  &:hover {
    border: ${({ theme, isOpen }) => `1px solid ${isOpen ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2}`};
      svg {
    fill: ${({ theme, isOpen }) => (isOpen ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2)}!important;
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
  margin: auto;
`;

export const TextRow = Styled(Row)`
  gap: 4px;
`;

export const Details = Styled.div`
  border: ${({ theme }) => `1px solid ${theme.containerAndCardShades.SHADE_PLUS_2}`};
  background: ${({ theme }) => theme.containerAndCardShades.BG_SHADE_PLUS_4};
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

export const Bar = Styled(Row)`
  gap: 24px;
  padding: 16px;
`;

export const InnerContainer = Styled(Row)`
  justify-content: space-between;
  align-items: center;
`;
