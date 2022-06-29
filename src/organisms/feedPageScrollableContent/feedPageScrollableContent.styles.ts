import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ItemWrapper = Styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  margin: 8px 0;
  border-radius: 12px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
`;

export const LoadMoreContainer = Styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 4px 0;
  width: fit-content;
  margin: auto;
  p {
    color: ${(props) => props.theme.textShades.SHADE_MINUS_2}
  }
  svg {
    fill: ${(props) => props.theme.textShades.SHADE_MINUS_2}
  }
  &:hover {
    p {
    color: ${(props) => props.theme.colors.primary.UWL_BLUE}
    }
    svg {
      fill: ${(props) => props.theme.colors.primary.UWL_BLUE}
    }
  }
`;

export const ScrollableSection = Styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ScrollableContent = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  height: calc(100vh - 74px);
  overflow: scroll;
  overflow-style: none;
  gap: 8px;
    &::-webkit-scrollbar {
    display: none;
    }
`;

export const FooterSection = Styled.div`
  padding-top: 24px;
`;

export const ShowNewButton = Styled.button`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 4px 16px;
  background-color: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  width: 100%;
  margin: auto;
  border-radius: 12px;
  border: none;
  margin: 4px 0;
  cursor: pointer;
  &:hover {
     p {
      color: ${(props) => props.theme.colors.primary.UWL_BLUE}
     };
     svg {
     fill: ${(props) => props.theme.colors.primary.UWL_BLUE}
     }
  }
  svg {
    margin-right: 4px;
    fill: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
  }
`;
