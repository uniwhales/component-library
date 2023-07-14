import { SpaceProps } from '@mantine/core';
import styled from 'styled-components';
import {
  BackgroundProps, BorderProps, ColorProps, FlexboxProps, GridAreaProps,
  LayoutProps, PositionProps, ResponsiveValue, TextAlignProps, background,
  border, color, compose, flexbox, gridArea, layout, space, system, textAlign,
  position,
  padding,
  PaddingProps,
} from 'styled-system';

const gap = system({
  gap: {
    property: 'gap',
    scale: 'space',
  },
});

export type BoxProps = {
  gap?: ResponsiveValue<string | number>
} &
BackgroundProps &
BorderProps &
Omit<ColorProps, 'color'> &
FlexboxProps &
GridAreaProps &
LayoutProps &
PositionProps &
SpaceProps &
TextAlignProps &
PaddingProps;

/**
 * All the system functions for Box
 */
export const boxMixin = compose(
  background,
  border,
  color,
  flexbox,
  gridArea,
  layout,
  position,
  space,
  textAlign,
  gap,
  padding,
);

/**
 * Box is just a `View` or `div` (depending on the platform) with common styled-systems
 * hooks.
 */
const Box = styled.div<BoxProps>`
  ${boxMixin}
`;

Box.displayName = 'Box';

export default Box;
