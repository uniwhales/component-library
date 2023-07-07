import { styled } from 'styled-components';
import { Column, Row } from '../../atoms/common/flex';

export const Container = styled(Column)`
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const OpenContainer = styled.div`
  position: absolute;
  top: 50px;
  z-index: ${({ theme }) => theme.zIndex.MODAL};
  right: 0;
`;

export const MinUsdButton = styled.div<{ $isOpen:boolean, width?:string, height?:string, disabled:boolean }>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  z-index: ${({ theme, $isOpen }) => $isOpen && theme.zIndex.MODAL};
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme, $isOpen, disabled }) => (disabled ? theme.containerAndCardShades.SHADE_PLUS_3 : $isOpen ? theme.colors.primary.MAIN_BLUE : theme.containerAndCardShades.BG_SHADE_PLUS_4)};
  border: ${({ theme, disabled }) => `1px solid ${disabled ? theme.containerAndCardShades.BG_SHADE_PLUS_4 : theme.textShades.SHADE_MINUS_1}`};
  font-size: 12px;
  color: ${({ theme, $isOpen }) => ($isOpen ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  justify-content: space-between;
  svg {
    fill: ${({ theme, $isOpen }) => ($isOpen ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_1)}!important;
  }
 &:hover {
    border: ${({ theme, $isOpen, disabled }) => (disabled ? `1px solid ${theme.containerAndCardShades.BG_SHADE_PLUS_4}` : `1px solid ${$isOpen ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2}`)};
    color: ${({ theme, $isOpen, disabled }) => (disabled ? theme.textShades.SHADE_MINUS_1 : `${$isOpen ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3}`)};
    svg {
      fill: ${({ theme, $isOpen, disabled }) => (disabled ? theme.textShades.SHADE_MINUS_1 : `${$isOpen ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_3}`)}!important;
    }
  }
  }
`;

export const MinUsdButtonContent = styled(Row)`
  align-items: center;
  justify-contents: center;
  gap: 6px;
`;

export const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  margin-top: 20px;
  border-bottom: ${({ theme }) => `5px solid ${theme.containerAndCardShades.SHADE_PLUS_3}`};
  margin: auto;
`;

export const TextRow = styled(Row)`
  gap: 4px;
`;

export const Details = styled.div`
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

export const ButtonContainer = styled(Row)`
  gap: 8px;
`;

export const Bar = styled(Row)`
  gap: 24px;
  padding: 16px;
`;

export const InnerContainer = styled(Row)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
