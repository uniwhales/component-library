import React from 'react';
import { Styled } from '../../theme';

export interface ChipProps {
  children: React.ReactChild;
  type: 'primary'
  | 'secondary'
  | 'tertiary'
  | 'editable'
}

const CustomChip = Styled.div<{ type: string }>`
  width: fit-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.system.WHITE}
`;

const PrimaryChip = Styled(CustomChip)`
  padding: 4px 12px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
  gap: 8px;
  border-radius: 40px;
  background: ${(props) => props.theme.gradients.primary.BLURPLE};
  svg {
    height: 20px;
    width: 20px;
  }
`;

const SecondaryChip = Styled(CustomChip)`
  padding: 4px 12px;
  width: fit-content;
  font-size: 14px;
  line-height: 18px;
  font-weight: 700;
  gap: 8px;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.primary.UWL_BLUE};
    svg {
    height: 20px;
    width: 20px;
  }
`;

const EditableChip = Styled(CustomChip)`
  padding: 4px 12px;
  width: fit-content;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  border-radius: 12px;
  gap: 8px;
  background: ${(props) => props.theme.colors.primary.DARK_BLUE};
  border: ${(props) => `1px solid ${props.theme.textShades.SHADE_MINUS_2}
`};
  &:hover {
    background: ${(props) => props.theme.colors.primary.WATER_BLUE};
    font-weight: 700;
  }
`;

const TertiaryChip = Styled(CustomChip)`
  padding: 4px 6px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  gap: 2px;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.primary.UWL_BLUE};
  &:hover {
    box-shadow: 0px 4px 30px #131313;
  }
    svg {
    height: 16px;
    width: 16px;
  }
`;

export const Chip = ({ type, children }: ChipProps) => {
  switch (type) {
    case 'secondary':
      return (
        <SecondaryChip type={type}>
          {children}
        </SecondaryChip>
      );
    case 'editable':
      return (
        <EditableChip type={type}>
          {children}
        </EditableChip>
      );
    case 'tertiary':
      return (
        <TertiaryChip type={type}>
          {children}
        </TertiaryChip>
      );
    default:
      return (
        <PrimaryChip type={type}>
          {children}
        </PrimaryChip>
      );
  }
};
