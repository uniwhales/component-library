import { Styled } from '../../theme';

export const BrochureLayout = Styled.div`
  align-items: center; 
  justify-content: center; 
  flex-direction: column;
  display: flex;
  gap: 16px;
  
  div:nth-of-type(1) {
    height: 148px;
    width: 100%;
  }
  div:nth-of-type(2) {
    max-width: 1024px;
  }
`;
