import { CSSProperties } from 'styled-components';
import { Styled } from '../../theme';
import { ChipProps } from './types';

const CustomChip = Styled.div<{ type: string } & Pick<CSSProperties, 'width' | 'cursor'>>`
  width: ${({ width }) => width ?? 'fit-content'};
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.system.WHITE};
  transition: width 0.45s ease;
`;

export const PrimaryChip = Styled(CustomChip)`
  padding: 8px 12px;
  gap: 8px;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.primary.MAIN_BLUE};
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
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
  background: ${({ theme }) => theme.containerAndCardShades.BG_SHADE_PLUS_4};
  border: ${({ theme }) => `1px solid ${theme.textShades.SHADE_MINUS_3};
`};
`;

export const TertiaryChip = Styled(CustomChip)`
  padding: 4px 6px;
  gap: 4px;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.primary.MAIN_BLUE};
  text-transform: uppercase;
  &:hover {
    box-shadow: ${(props) => props.theme.dropShadow.REGULAR};
  }
`;

export const TertiaryLined = Styled(CustomChip)`
  padding: 4px;
  border-radius: 12px;
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_3};
  border: ${({ theme }) => `1px solid ${theme.colors.primary.MAIN_BLUE}`};
  gap: 4px;
`;

export const SubtleChip = Styled(CustomChip)`
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
  gap: 4px;
`;
