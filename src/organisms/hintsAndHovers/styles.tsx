import ReactTooltip from 'react-tooltip';
import { Styled } from '../../theme';

export const HintAndHoversWrapper = Styled.div`
  width: max-content;
  height: max-content;
`;

export const Tooltip = Styled(ReactTooltip)`
  box-shadow: ${({ theme }) => theme.dropShadow.REGULAR};
  max-width: 296px;
  &.__react_component_tooltip {
    border-radius: 8px;
  }
`;
