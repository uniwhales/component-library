import { Styled } from '../../theme';

const CustomChip = Styled.div<{ type: string }>`
  width: fit-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.system.WHITE}
`;

export const PrimaryChip = Styled(CustomChip)`
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

export const SecondaryChip = Styled(CustomChip)`
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

export const EditableChip = Styled(CustomChip)`
  padding: 4px 12px;
  width: fit-content;
  min-width: 50px;
  font-size: 14px;
  transition: all .3s;
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

export const TertiaryChip = Styled(CustomChip)`
  padding: 4px 6px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  gap: 2px;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.primary.UWL_BLUE};
  &:hover {
    box-shadow: ${(props) => props.theme.dropShadow.REGULAR};
  }
  svg {
    height: 16px;
    width: 16px;
  }
`;
