import { MasterContainer } from '../../atoms/masterFeedItemTx/masterFeedItemTx.styles';
import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  display: flex;
  align-items: flex-start;
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

export const TransactionWrapper = Styled.div`
    ${MasterContainer}:nth-child(2) {
   background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
  }
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
