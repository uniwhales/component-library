import { css } from 'styled-components';
import { Styled } from '../../theme';
import { normalDesktop, tablet } from '../breakpoints';

export const ToolingLayoutOne = Styled.div<{ single?: boolean }>`
  max-width: 1440px;
  min-width: 360px;
  margin: 0 auto;
  display: grid;
  padding-top: 58px;
  gap: 25px;
  grid-template-columns: ${({ single }) => (single ? '' : 'minmax(500px, 1109px) minmax(331px, 450px)')};
  
  ${normalDesktop(css`
    padding: 0 25px;
  `)};
  
  ${tablet(css`
    margin: inherit;
    grid-template-columns: 1fr;
  `)};
`;
