import { CSSProperties, css } from 'styled-components';
import { FilterChipProps } from './types';
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
  height: max-content;
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

export const FilterChipSecondary = Styled.div<Pick<FilterChipProps, 'disabled'>>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 12px;
  border: 2px solid transparent;
  padding: 4px 12px;
  height: auto;
  line-height: 18px;
  font-weight: 400;
  gap: 4px;
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
  svg {
    width: 16px !important;
    height: 16px !important;
    fill: ${({ theme }) => theme.textShades.SHADE_MINUS_3}!important;
  };
  // disabled state
  ${(props) => props.disabled && css`
      background: ${props.theme.containerAndCardShades.SHADE_PLUS_3};
      color: ${props.theme.containerAndCardShades.SHADE_PLUS_1};
      border: 2px solid transparent;

      svg {
        fill: ${props.theme.containerAndCardShades.SHADE_PLUS_1}!important;
      }
  `}
  // active state
  ${(props) => !props.disabled && css`
    background: ${props.theme.containerAndCardShades.SHADE_PLUS_1};

   &:hover {
      background: ${props.theme.textShades.SHADE_MINUS_1};
      color: ${props.theme.textShades.SHADE_MINUS_3}!important;
      svg {
        fill: ${props.theme.textShades.SHADE_MINUS_3}!important;
      }
    };
    &:active {
      background: ${props.theme.containerAndCardShades.SHADE_PLUS_1}!important;
      color: ${props.theme.textShades.SHADE_MINUS_3}!important;
      border: 2px solid ${props.theme.colors.primary.YELLOW};
      svg {
        fill: ${props.theme.textShades.SHADE_MINUS_3}!important;
      }
    };
  `}
`;
