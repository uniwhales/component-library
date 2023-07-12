import styled from 'styled-components';
import {
  BackgroundProps, LayoutProps, background, layout,
} from 'styled-system';

const Box = styled.div<LayoutProps & BackgroundProps>`
  box-sizing: border-box;
  min-width: 0;
  ${layout}
  ${background}
`;

export default Box;
