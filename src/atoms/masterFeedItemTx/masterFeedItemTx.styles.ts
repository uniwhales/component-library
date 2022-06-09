import { Styled } from '../../theme';

export const MasterContainer = Styled.div`
  &:nth-child(odd): {
    background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
  };
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 8px 16px 8px 16px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  &:hover {
    background: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
  };
`;

export const TxTypeWrapper = Styled.div`
  //min-width: 180px;
  display: flex;
  align-items: center;
`;

export const TxTypeContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const CenterContentContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`;

export const Spacer = Styled.div`
  width: 10px;
`;

export const XPartyContent = Styled.div`
  display: flex;
  align-items: center;
`;

export const YPartyContent = Styled.div`
  display: flex;
  align-items: center;
`;

export const HoverItemsContainer = Styled.div`
  display: flex;
  align-items: center;
  min-width: 56px;
`;
