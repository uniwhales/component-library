import { styled } from 'styled-components';
import { CSSProperties } from 'react';
import { ChipProps } from './types';

const CustomChip = styled.div<{ type: string } & Pick<CSSProperties, 'width' | 'cursor'>>`
  width: ${({ width }) => width ?? 'fit-content'};
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.WHITE};
  transition: width 0.45s ease;
`;

export const PrimaryChip = styled(CustomChip)`
  padding: 8px 12px;
  gap: 8px;
  border-radius: 40px;
  background: ${({ theme }) => theme.colors.MAIN_BLUE};
`;

export const SecondaryChip = styled(CustomChip)<{ bgColor: ChipProps['secondaryTypeBgColor'] }>`
  padding: 4px 12px;
  width: fit-content;
  gap: 8px;
  border-radius: 12px;
  background: ${({ bgColor, theme }) => (bgColor === 'orange' ? theme.colors.AMBER : bgColor === 'green' ? theme.colors.CARRIBEAN_GREEN : bgColor === 'yellow' ? theme.colors.YELLOW : theme.colors.RED)};
`;

export const EditableChip = styled(CustomChip)`
  padding: 4px 12px;
  width: fit-content;
  min-width: 50px;
  transition: all .3s;
  border-radius: 12px;
  gap: 8px;
  color: ${({ theme }) => theme.colors.SHADE_MINUS_3};
  background: ${({ theme }) => theme.colors.BG_SHADE_PLUS_4};
  border: ${({ theme }) => `1px solid ${theme.colors.SHADE_MINUS_3};
`};
`;

export const TertiaryChip = styled(CustomChip)<{ bgColor: ChipProps['secondaryTypeBgColor'] }>`
  padding: 4px 6px;
  gap: 4px;
  border-radius: 12px;
  background: ${({ bgColor, theme }) => (bgColor === 'orange' ? theme.colors.AMBER : bgColor === 'green' ? theme.colors.CARRIBEAN_GREEN : bgColor === 'yellow' ? theme.colors.YELLOW : theme.colors.RED)};
  text-transform: uppercase;
  &:hover {
    box-shadow: ${(props) => props.theme.dropShadow.REGULAR};
  }
`;

export const TertiaryLined = styled(CustomChip)`
  padding: 4px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.SHADE_MINUS_3};
  border: ${({ theme }) => `1px solid ${theme.colors.MAIN_BLUE}`};
  gap: 4px;
`;

export const SubtleChip = styled(CustomChip)`
  color: ${({ theme }) => theme.colors.SHADE_MINUS_1};
  gap: 4px;
`;
