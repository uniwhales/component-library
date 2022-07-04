import { Styled } from '../../theme';

// Main shared styles
export const MasterContainer = Styled.div<{ isMulti?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 52px;
  margin: ${(props) => (!props.isMulti ? '2px 0' : 0)};
  padding: 8px 16px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  &:hover {
    background: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
  };
`;

export const TxTypeWrapper = Styled.div`
  display: flex;
  align-items: center;
  width: 164px;
  p {
    padding-left: 8px;
  }
`;

export const TxTypeContainer = Styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

export const CenterContent = Styled.div`
  width: 563px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const XYPartyContent = Styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  width: 200px;
  p {
    padding-left: 8px;
  }
`;

export const ValueContainer = Styled.div`
  display: flex;
  flex-direction: column;
  width: 85px;
`;

export const HoverItemsContainer = Styled.div`
  display: flex;
  align-items: center;
  min-width: 56px;
  gap: 10px;
`;

export const ChevronButton = Styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  padding: 4px;
  margin-left: 4px;
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
      &:hover {
    fill: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  }
  }
`;

export const SecondaryActionContainer = Styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  justify-content: flex-end;
`;

export const TokenIcon = Styled.div<{ baseUrl: string, tokenAddress: string }>`
  height: 32px;
  width: 32px;
  background-image: ${({ baseUrl, tokenAddress }) => `url(${baseUrl}${tokenAddress}.jpg)`};
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  margin-left: 25px;
  margin-right: 10px;
  border: 2px solid ${(props) => props.theme.containerAndCardShades.BG_SHADE_PLUS_4};
`;

export const LinkWrapper = Styled.div`
  width: 15px;
`;

export const StyledLink = Styled.a`
  cursor: pointer;
  svg {
    height: 14px;
    width: 14px;
    fill: ${(props) => props.theme.contrastColor.LOW_CONTRAST};
    &:hover {
     fill: ${(props) => props.theme.colors.primary.UWL_BLUE}
    };
  };
`;

export const Image = Styled.img`
  border-radius: 50%;
  height: 32px;
  width: 32px;
`;

// nft Specific
export const NftImageContainer = Styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  margin-right: 10px;
`;

export const NftImage = Styled.img`
  height: 32px;
  width: 32px;
  display: flex;
  border-radius: 50%;
`;

export const NftValues = Styled.div`
  display: flex;
  flex-direction: column;
  width: 85px;
`;

// LP Specific

export const LpTokenIcon = Styled.div<{ baseUrl: string, tokenAddress: string }>`
  height: 32px;
  width: 32px;
  background-image: ${({ baseUrl, tokenAddress }) => `url(${baseUrl}${tokenAddress}.jpg)`};
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.containerAndCardShades.BG_SHADE_PLUS_4};
`;

export const LpOverlappedToken = Styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  margin-right: 10px;
    ${LpTokenIcon}:nth-child(2n) {
      margin-left: -10px;
      z-index: 10;
    };
`;

// Idle/Error Specific

export const InfoContainer = Styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const GenericTxTypeWrapper = Styled(TxTypeWrapper)`
  width: 300px;
`;

export const GenericCenterContent = Styled(CenterContent)`
  width: 427px;
`;

export const TxTypeWrapperLong = Styled(TxTypeWrapper)`
  width: 200px;
`;

// XOnly specific

export const XOnlyCenterContent = Styled(CenterContent)`
  width: 527px;
`;

export const XOnlyContent = Styled(XYPartyContent)`
  width: fit-content;
`;
