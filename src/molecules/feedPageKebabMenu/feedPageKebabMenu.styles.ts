import { Styled } from '../../theme';

export const KebabRow = Styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  padding: 8px;
  cursor: pointer;
`;

export const KebabContainer = Styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: ${(props) => props.theme.dropShadow.REGULAR};
   ${KebabRow}:nth-child(2n) {
   background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
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
