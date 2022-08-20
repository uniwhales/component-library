import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  margin-left: 350px;
`;

export const Container = Styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const MeatballRow = Styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  padding: 8px;
  gap: 6px;
  cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
    };
`;

export const MeatballContainer = Styled.div<{ width?: string }>`
  position: absolute;
  top: 100%;
  transform: translate(-60%, 5%);
  display: flex;
  width: ${({ width }) => width || '140px'};
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
  z-index: 1;
`;

export const StyledLink = Styled.a`
  text-decoration: none;
`;
