import { styled, css } from 'styled-components';
import { CSSProperties } from 'react';
import { FilterChipProps } from './types';
import { Row } from '../common/flex';

type Props = { $isOn: boolean, disabled?: boolean } & Pick<CSSProperties, 'padding' | 'width'>;

export const FilterChipWrapper = styled.div<Props>`
  width: ${({ width }) => width ?? 'fit-content'};
  box-sizing: border-box;
  background: ${({ disabled, theme, $isOn }) => (disabled ? theme.colors.SHADE_PLUS_3 : $isOn ? theme.colors.SHADE_PLUS_2 : theme.colors.SHADE_PLUS_1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  padding: ${({ padding }) => padding ?? '4px 12px'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  border: ${({ $isOn, theme, disabled }) => `2px solid ${!disabled && $isOn ? theme.colors.YELLOW : 'transparent'}`};
  path { transition: fill .45s ease; }
  transition: background .45s ease, width .45s ease;
  &:hover {
    background: ${({ theme, disabled }) => !disabled && theme.colors.SHADE_MINUS_1};
  }
`;
export const FilterChipContent = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  svg {
    fill: ${({ disabled, theme }) => (disabled ? theme.colors.SHADE_PLUS_1 : theme.colors.HIGH_CONTRAST)};
  }
  p{
    color: ${({ theme, disabled }) => (disabled ? theme.colors.SHADE_PLUS_1 : theme.colors.SHADE_MINUS_3)};
  }
    // disabled state
  ${(props) => props.disabled && css`
      background: ${props.theme.colors.SHADE_PLUS_3};
      color: ${props.theme.colors.SHADE_PLUS_1};
      border: 2px solid transparent;

      svg {
        fill: ${props.theme.colors.SHADE_PLUS_1}!important;
      }
  `}
`;

export const FloatingCloseWrapper = styled(Row)<{ disabled?: boolean }>`
  svg {
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

    &:hover {
      fill: ${({ theme }) => theme.colors.SHADE_MINUS_3}!important;
    };
  }
`;

export const FilterChipSecondary = styled.div<Pick<FilterChipProps, 'padding' | 'disabled' | 'height' | 'width'>>`
  box-sizing: border-box;
  display: flex;
  padding: ${({ padding }) => padding ?? '0px 8px'};
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid transparent;
  height: max-content;
  line-height: 18px;
  font-weight: 400;
  gap: 4px;
  width: ${({ width }) => width ?? 'fit-content'};
  height: ${({ height }) => height ?? 'fit-content'};
  color: ${({ theme }) => theme.colors.SHADE_MINUS_1};
  svg {
    width: 16px !important;
    height: 16px !important;
    fill: ${({ theme }) => theme.colors.SHADE_MINUS_3}!important;
  };
  // disabled state
  ${(props) => props.disabled && css`
      background: ${props.theme.colors.SHADE_PLUS_3};
      color: ${props.theme.colors.SHADE_PLUS_1};
      border: 2px solid transparent;

      svg {
        fill: ${props.theme.colors.SHADE_PLUS_1}!important;
      }
  `}
  // active state
  ${(props) => !props.disabled && css`
    background: ${props.theme.colors.SHADE_PLUS_2};
    color: ${({ theme }) => theme.colors.SHADE_MINUS_1}!important;
    svg {
      fill: ${props.theme.colors.SHADE_MINUS_1}!important;
    }
    &:active {
      background: ${props.theme.colors.SHADE_PLUS_1}!important;
      color: ${props.theme.colors.SHADE_MINUS_3}!important;
      border: 2px solid ${props.theme.colors.YELLOW};
      svg {
        fill: ${props.theme.colors.SHADE_MINUS_3}!important;
      }
    };
  `}
`;

export const FilterChipOnboarding = styled.div<Pick<FilterChipProps, 'disabled' | 'height' | 'width' | '$isOn' | 'padding'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: ${({ width }) => width ?? 'fit-content'};
  height: ${({ height }) => height ?? 'fit-content'};
  padding: ${({ padding }) => padding ?? '0 13px'};
  // disabled state
  ${(props) => props.disabled && css`
      background: ${({ theme }) => theme.colors.MEDIUM_BLUE};
      color: ${({ theme }) => theme.colors.DARK_BLUE};
      border: 2px solid transparent;

      svg {
        fill: ${({ theme }) => theme.colors.DARK_BLUE}!important;
      }
  `}
  // active state
  ${({ disabled, theme, $isOn }) => !disabled && css`
    border: ${$isOn ? `1px solid ${theme.colors.YELLOW}` : `1px solid ${theme.colors.MAIN_BLUE}`};
    color: ${theme.colors.WHITE};
    background: ${$isOn ? theme.colors.MAIN_BLUE : theme.colors.DARK_BLUE};
    cursor: pointer;
    &:hover {
      background: ${theme.colors.MAIN_BLUE};
    };
  `};
`;
