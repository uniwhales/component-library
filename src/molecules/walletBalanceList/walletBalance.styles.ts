import { Styled } from '../../theme';

export const Table = Styled.table`
  table-layout: auto;
  width: 100%;
  th {
    text-align: left;
  }
  td {
    padding: 8px 0;
    text-align: left!important;
  }
  td:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  td:last-child {
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  }
  border-collapse: separate;
  border-spacing: 0 16px;

`;
export const Trow = Styled.tr<{ isSelected: boolean }>`
     transition: all .2s;
     background: ${(props) => (props.isSelected ? props.theme.containerAndCardShades.SHADE_PLUS_1 : props.theme.containerAndCardShades.SHADE_PLUS_3)};
     &:hover {
      background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
      transform: translateY(-2px);
     }
     &:nth-child(2n){
      transition: all .2s;
    background: ${(props) => (props.isSelected ? props.theme.containerAndCardShades.SHADE_PLUS_1 : props.theme.containerAndCardShades.SHADE_PLUS_2)};
    &:hover {
     background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
     }
     }
`;
export const Thead = Styled.thead`
  th{
    color: ${(props) => props.theme.textShades.SHADE_MINUS_2};
    font-weight: 400!important;
    font-size: 14px;
  }
`;

export const Section = Styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const SelectSection = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
`;

export const InUseSection = Styled.div`
  svg {
    height: 25px;
    width: 25px;
  }
`;

export const WrapButtonSection = Styled.div`
  display: flex;
  svg:first-child {
    margin-right: 8px;
  }
  svg {
    cursor: pointer;
    height: 25px;
    width: 25px
  }
`;

export const Wrapper = Styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row;
  align-items: flex-start;
`;
