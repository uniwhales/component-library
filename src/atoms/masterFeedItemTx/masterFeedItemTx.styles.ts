import { MasterFeedItemTxProps } from './types';
import { Styled } from '../../theme';

export const MasterContainer = Styled.div<Pick<MasterFeedItemTxProps, 'isMulti'>>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: ${(props) => (!props.isMulti ? '2px 0' : 0)};
  padding: 8px 16px 8px 16px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  &:hover {
    background: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
  };
`;

export const TxTypeWrapper = Styled.div`
  display: flex;
  align-items: center;
  min-width: 10%;
`;

export const IconContainer = Styled.div`
  height: 36px;
  width: 36px;
  position: relative;
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
  flex: 1;
  max-width: 650px;
`;

export const XPartyContent = Styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  min-width: 40%;
`;

export const YPartyContent = Styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 40%;
`;

export const HoverItemsContainer = Styled.div`
  display: flex;
  align-items: center;
  min-width: 56px;
  gap: 10px;
`;

export const ChevronButton = Styled.div<Pick<MasterFeedItemTxProps, 'isOpen'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => (props.isOpen ? props.theme.contrastColor.HIGH_CONTRAST : props.theme.containerAndCardShades.NEUTRAL_SHADE_0)};
  &:hover {
    background: ${(props) => props.theme.colors.primary.WATER_BLUE};
  }
  svg {
    fill: ${(props) => (props.isOpen ? props.theme.containerAndCardShades.SHADE_PLUS_3 : props.theme.contrastColor.HIGH_CONTRAST)};
    transform: ${(props) => (props.isOpen ? 'rotateZ(-180deg)' : undefined)};
    transition: all 0.4s;
  }
`;

export const SecondaryActionContainer = Styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  justify-content: flex-end;
`;
