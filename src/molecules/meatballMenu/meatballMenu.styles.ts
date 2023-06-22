import { styled } from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 350px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const MeatballRow = styled.div`
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

export const MeatballContainer = styled.div<{ width?: string }>`
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
  z-index: ${({ theme }) => theme.zIndex.SAFE_LAYER};
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;
