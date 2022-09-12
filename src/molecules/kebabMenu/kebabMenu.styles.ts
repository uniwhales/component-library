import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  margin-left: 200px;
`;

export const KebabWrapper = Styled.div`
  margin-top: 8px;
  margin-left: 8px;
  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.primary.MANGO};
    }
  }
`;

export const Container = Styled.div`
  position: relative;
  display: flex;
  margin-top:8px;
`;

export const KebabRow = Styled.div`
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

export const KebabContainer = Styled.div<{ width?: string }>`
  position: absolute;
  right: 100%;
  display: flex;
  width: ${({ width }) => width || '140px'};
  flex-direction: column;
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.dropShadow.REGULAR};
  ${KebabRow}:nth-child(2n) {
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
    &:hover {
      background: ${(props) => props.theme.containerAndCardShades.NEUTRAL_SHADE_0};
    };
  };
  ${KebabRow}:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  };
  ${KebabRow}:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  };
`;
