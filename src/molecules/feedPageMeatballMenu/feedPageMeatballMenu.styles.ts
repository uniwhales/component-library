import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  margin-left: 200px;
`;

export const Container = Styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const MeatballRow = Styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  padding: 8px;
  cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
    };
`;

export const MeatballContainer = Styled.div`
  position: absolute;
  top: 100%;
  transform: translate(-60%, 5%);
  display: flex;
  min-width: 240px;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.dropShadow.REGULAR};
  ${MeatballRow}:nth-child(2n) {
   background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
    &:hover {
        background: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
    };
  };
  ${MeatballRow}:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  };
  ${MeatballRow}:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  };
`;

export const StyledLink = Styled.a`
  text-decoration: none;
`;
