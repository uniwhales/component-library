import { Styled } from '../../theme';

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ScrollableContent = Styled.div`
  flex: 1;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  padding-bottom: 24px;
`;

export const NewUpdateSection = Styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
  margin: 4px 0;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  cursor: pointer;
`;
