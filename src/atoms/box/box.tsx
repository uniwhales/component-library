import styled from 'styled-components';
import {
  BackgroundProps, LayoutProps, background, layout,
} from 'styled-system';

const Box = styled.div<LayoutProps & BackgroundProps>`
  ${layout}
  ${background}
`;

export default Box;
