import { Styled } from '../../theme';

export const MeatballRow = Styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  padding: 8px;
`;

export const MeatballContainer = Styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.dropShadow.REGULAR};
   ${MeatballRow}:nth-child(2n) {
   background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
  };
`;
