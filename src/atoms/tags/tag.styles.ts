import { css, CSSProperties } from 'styled-components';
import { TagProps } from './types';
import { Styled, Theme } from '../../theme';
import { tablet, WidthBreakpoints } from '../../layouts/breakpoints';

export type CustomTagProps = Pick<TagProps, 'isOn' | 'tabIndex'> & Pick<CSSProperties, 'width'>;

const BackgroundAndBorderColors = [
  { background: Theme.colors.primary.UWL_BLUE, border: `1px solid ${Theme.colors.primary.UWL_BLUE}` },
  { background: Theme.colors.secondary.SKY, border: `1px solid ${Theme.colors.secondary.SKY}` },
  { background: Theme.colors.secondary.TANGY, border: `1px solid ${Theme.colors.secondary.TANGY}` },
  { background: Theme.colors.secondary.CANARY, border: `1px solid ${Theme.colors.secondary.CANARY}` },
  { background: Theme.colors.primary.MANGO, border: `1px solid ${Theme.colors.primary.MANGO}` },
  { background: Theme.colors.primary.DARK_BLUE, border: `1px solid ${Theme.colors.primary.DARK_BLUE}` },
];

export const CustomTag = Styled.div<CustomTagProps>`
  border-radius: 12px;
  padding: 4px 12px;
  cursor: pointer;
  width: ${({ width }) => width ?? 'fit-content'};
  background: ${({ isOn, tabIndex }) => (isOn ? BackgroundAndBorderColors[tabIndex].background : 'none')};
  transition: all .3s;
  text-align: center;
  border: ${({ tabIndex }) => BackgroundAndBorderColors[tabIndex].border};

  @media screen and (min-width: ${WidthBreakpoints.SmallDesktop.bottom}px) {
    &:hover {
        background: ${({ isOn, tabIndex }) => (isOn ? 'none' : BackgroundAndBorderColors[tabIndex].background)};

        & > *  {
          color: ${({ isOn, theme }) => (isOn ? theme.textShades.SHADE_MINUS_3 : theme.colors.system.WHITE)};
        }
      }
  }
`;

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
`;
