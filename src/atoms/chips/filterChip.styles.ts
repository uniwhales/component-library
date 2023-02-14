import { CSSProperties } from 'styled-components';
import { Styled } from '../../theme';

type Props = { isOn: boolean, disabled?: boolean } & Pick<CSSProperties, 'width'>;

export const FilterChipWrapper = Styled.div<Props>`
  width: ${({ width }) => width ?? 'fit-content'};
  box-sizing: border-box;
  background: ${({ disabled, theme }) => (disabled ? theme.containerAndCardShades.SHADE_PLUS_3 : theme.containerAndCardShades.SHADE_PLUS_1)};
  padding: 2px 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${({ isOn, theme, disabled }) => `2px solid ${!disabled && isOn ? theme.colors.primary.YELLOW : 'transparent'}`};
  path { transition: fill .45s ease; }
  transition: background .45s ease, width .45s ease;
  &:hover {
    background: ${({ theme, disabled }) => !disabled && theme.textShades.SHADE_MINUS_1};
  }
`;
export const FilterChipContent = Styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  svg {
    height: 20px;
    width: 20px;
    fill: ${({ disabled, theme }) => (disabled ? theme.containerAndCardShades.SHADE_PLUS_1 : theme.textShades.SHADE_MINUS_3)};
  }
  p{
    color: ${({ theme, disabled }) => (disabled ? theme.containerAndCardShades.SHADE_PLUS_1 : theme.textShades.SHADE_MINUS_3)};
  }
`;
