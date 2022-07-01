import { MasterContainer } from '../../atoms/feedCardItem/feedCardItem.styles';
import { Styled } from '../../theme';

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = Styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 1352px;
`;

export const IdenticonWrapper = Styled.div`
  margin-top: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.containerAndCardShades.BG_SHADE_PLUS_4};
`;

export const TransactionsWrapper = Styled.div`
  ${MasterContainer}:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  };
  ${MasterContainer}:last-of-type {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  };
  ${MasterContainer}:nth-child(2n) {
   background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
     &:hover {
    background: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
  };
  };
`;

export const MainCardContent = Styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  padding: 8px 24px 8px 24px;
  margin: 4px 8px;
  flex: 1;
`;

export const FeedCardHeader = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateTime = Styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary.WATER_BLUE};
  font-weight: 700;
  font-size: 14px;
  gap: 4px;
`;

export const SeeMoreContainer = Styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 4px 0;
  width: fit-content;
  margin: auto;
  &:hover {
    p {
    color: ${(props) => props.theme.colors.primary.UWL_BLUE}
    }
    svg {
      fill: ${(props) => props.theme.colors.primary.UWL_BLUE}
    }
  }
`;
