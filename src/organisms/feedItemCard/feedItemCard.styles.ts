import { MasterContainer } from '../../atoms/masterFeedItemTx/masterFeedItemTx.styles';
import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  display: flex;
  align-items: flex-start;
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
  ${MasterContainer}:nth-child(2) {
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
  &:first-child {
    margin-right: 4px!important;
  };
  &:last-child: {
    margin-left: 4px!important;
  }
`;

export const SeeMoreContainer = Styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
