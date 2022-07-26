import { CSSProperties } from 'styled-components';
import { TagProps } from './types';
import { Styled, Theme } from '../../theme';

export type CustomTagProps = Pick<TagProps, 'isOn' | 'tabIndex'> & Pick<CSSProperties, 'width'>;

const BackgroundAndBorderColors = [
  { background: Theme.colors.primary.UWL_BLUE, border: `1px solid ${Theme.colors.primary.UWL_BLUE}` },
  { background: Theme.colors.secondary.PURPLE, border: `1px solid ${Theme.colors.secondary.PURPLE}` },
  { background: Theme.colors.secondary.TANGY, border: `1px solid ${Theme.colors.secondary.TANGY}` },
  { background: Theme.colors.secondary.FUSCHIA, border: `1px solid ${Theme.colors.secondary.FUSCHIA}` },
  { background: Theme.colors.primary.WATER_BLUE, border: `1px solid ${Theme.colors.primary.WATER_BLUE}` },
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
  
  &:hover {
    background: ${({ isOn, tabIndex }) => (isOn ? 'none' : BackgroundAndBorderColors[tabIndex].background)};
    
    & > *  {
      color: ${({ theme, isOn }) => (isOn ? theme.textShades.SHADE_MINUS_3 : theme.colors.system.WHITE)};
    }
  }
`;

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
`;
