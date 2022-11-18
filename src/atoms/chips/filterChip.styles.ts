import { CSSProperties } from 'styled-components';
import { Styled } from '../../theme';
import { FilterChipProps, FilterChipVariation } from './types';

type Props = { isOn: boolean, disabled?: boolean } & Pick<CSSProperties, 'width'>;

export const FilterChipWrapper = Styled.div<Props>`
  width: ${({ width }) => width ?? 'fit-content'};
  min-width: 79px;
  box-sizing: border-box;
  background: ${({ isOn, theme }) => (isOn
    ? theme.containerAndCardShades.NEUTRAL_SHADE_0 : theme.containerAndCardShades.SHADE_PLUS_2)};
  padding: 1px 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  path { transition: fill .45s ease; }
  transition: background .45s ease, width .45s ease;
  &:hover {
    background: ${(props) => props.theme.colors.primary.MANGO};
    font-weight: 700;
    svg {
      fill: ${(props) => props.theme.textShades.SHADE_MINUS_3};
    }
    p {
      color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
    }
  }
`;
export const FilterChipContent = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  svg {
    height: 20px;
    width: 20px;
  }
  p{
    color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
  }
`;

export const ColourFilterChipWrapper = Styled.div<Props & Pick<FilterChipProps, 'variant'>>`
  width: ${({ width }) => width ?? 'fit-content'};
  min-width: 79px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_2};
  padding: 2px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;  
  :hover {
    background: ${({
    theme, variant,
  }) => variant === FilterChipVariation.Primary
    ? theme.gradients.secondary.TEAL
    : theme.gradients.secondary.CANARY
    };
  }
`;

export const ColourFilterChipContent = Styled.div<Props & Pick<FilterChipProps, 'variant'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 100%;
  // 1 padding because of parent
  padding: 1px 10px;
  gap: 4px;
  path { transition: fill .45s ease; }
  svg {
    height: 20px;
    width: 20px;
  }
  p {
    color: ${({ theme, isOn }) => (isOn ? theme.containerAndCardShades.BG_SHADE_PLUS_4 : theme.textShades.SHADE_MINUS_3)};
  }
  background: ${({ isOn, theme, variant }) => (isOn
    ? variant === FilterChipVariation.Primary
      ? theme.gradients.secondary.TEAL
      : theme.gradients.secondary.CANARY
    : theme.containerAndCardShades.SHADE_PLUS_2
  )};

  :hover {
    p {
      color: ${({ theme, isOn }) => isOn && theme.textShades.SHADE_MINUS_3};
    }
    background: ${({ isOn, theme }) => (isOn && theme.containerAndCardShades.SHADE_PLUS_2)};
  }
`;

export const DisabledChip = Styled.div<Pick<Props, 'width'>>`
  width: ${({ width }) => width ?? 'fit-content'};
  min-width: 79px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  padding: 1px 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: default;
  /* Forcing important because we need to override the text color in all cases */
  p {
    color: ${({ theme }) => theme.textShades.SHADE_MINUS_1}!important;
  }
`;