import { CSSProperties } from 'styled-components';
import { Styled } from '../../theme';
import { ChipProps } from './types';

const CustomChip = Styled.div<{ type: string } & Pick<CSSProperties, 'width' | 'cursor'>>`
  width: ${({ width }) => width ?? 'fit-content'};
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.system.WHITE};
  transition: width 0.45s ease;
`;

export const PrimaryChip = Styled(CustomChip)`
  padding: 4px 12px;
  gap: 8px;
  border-radius: 40px;
  background: ${(props) => props.theme.gradients.primary.MAIN_BLUE_GRADIENT};
`;

export const SecondaryChip = Styled(CustomChip)<{ bgColor: ChipProps['secondaryTypeBgColor'] }>`
  padding: 4px 12px;
  width: fit-content;
  gap: 8px;
  border-radius: 12px;
  background: ${({ bgColor, theme }) => (bgColor === 'orange' ? theme.colors.system.AMBER : bgColor === 'green' ? theme.colors.system.GREEN : theme.colors.system.RED)};
`;

export const EditableChip = Styled(CustomChip)`
  padding: 4px 12px;
  width: fit-content;
  min-width: 50px;
  transition: all .3s;
  border-radius: 12px;
  gap: 8px;
  background: ${(props) => props.theme.colors.primary.DARK_BLUE};
  border: ${(props) => `1px solid ${props.theme.textShades.SHADE_MINUS_2}
`};
  &:hover {
    background: ${(props) => props.theme.colors.primary.MANGO};
    font-weight: 700;
  }
`;

export const TertiaryChip = Styled(CustomChip)`
  padding: 4px 6px;
  gap: 2px;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.primary.MAIN_BLUE};
  font-size: 10px;
  text-transform: uppercase;
  &:hover {
    box-shadow: ${(props) => props.theme.dropShadow.REGULAR};
  }
`;
