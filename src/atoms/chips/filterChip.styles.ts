import { CSSProperties } from "styled-components";
import { Styled } from "../../theme";
import { FilterChipProps, FilterChipVariant } from "./types";

type Props = { isOn: boolean } & Pick<CSSProperties, 'width'>;

export const FilterChipWrapper = Styled.div<Props>`
  width: ${({ width }) => width ?? 'fit-content'};
  min-width: 79px;
  box-sizing: border-box;
  background: ${({ isOn, theme }) => (isOn
    ? theme.containerAndCardShades.NEUTRAL_SHADE_0 : theme.containerAndCardShades.SHADE_PLUS_2)};
  padding: 4px 12px;
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

export const ColourFilterChipWrapper = Styled.div<Props & Pick<FilterChipProps, 'variation'>>`
  width: ${({ width }) => width ?? 'fit-content'};
  min-width: 79px;
  box-sizing: border-box;
  background: ${({ theme, variation }) => (
    variation === FilterChipVariant.Primary
      ? theme.gradients.primary.MAIN_BLUE_GRADIENT : theme.gradients.secondary.CANARY
  )};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  path { transition: fill .45s ease; }
  transition: background .45s ease, width .45s ease;
`;

export const ColourFilterChipContent = Styled.div<Props & Pick<FilterChipProps, 'variation'>>`
  padding: 4px 12px;
  background: ${({ isOn, theme, variation }) => (isOn
    ? variation === FilterChipVariant.Primary 
    ? theme.gradients.primary.MAIN_BLUE_GRADIENT 
    : theme.gradients.secondary.CANARY 
    : theme.containerAndCardShades.SHADE_PLUS_2
  )};
`;