import { Styled } from '../../theme';

export const CustomTag = Styled.div<{ type: string, isOn:boolean }>`
  border-radius: 12px;
  padding: 4px 12px;
  cursor: pointer;
  width: fit-content;
  background: ${(props) => (props.isOn ? props.theme.colors.primary.UWL_BLUE : 'none')};
  border: ${(props) => `1px solid ${props.theme.colors.primary.UWL_BLUE}`};
`;

export const TagTwo = Styled(CustomTag)`
  background: ${(props) => (props.isOn ? props.theme.colors.secondary.PURPLE : 'none')};
  border: ${(props) => `1px solid ${props.theme.colors.secondary.PURPLE}`};
`;

export const TagThree = Styled(CustomTag)`
  background: ${(props) => (props.isOn ? props.theme.colors.secondary.TANGY : 'none')};
  border: ${(props) => `1px solid ${props.theme.colors.secondary.TANGY}`};
`;

export const TagFour = Styled(CustomTag)`
  background: ${(props) => (props.isOn ? props.theme.colors.secondary.FUSCHIA : 'none')};
  border: ${(props) => `1px solid ${props.theme.colors.secondary.FUSCHIA}`};
`;

export const TagFive = Styled(CustomTag)`
  background: ${(props) => (props.isOn ? props.theme.colors.primary.WATER_BLUE : 'none')};
  border: ${(props) => `1px solid ${props.theme.colors.primary.WATER_BLUE}`};
`;

export const TagSix = Styled(CustomTag)`
  background: ${(props) => (props.isOn ? props.theme.colors.primary.DARK_BLUE : 'none')};
  border: ${(props) => `1px solid ${props.theme.colors.primary.DARK_BLUE}`};
`;
