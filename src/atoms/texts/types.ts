export type BodySizes =
  'L-Regular'
  | 'L-Bold'
  | 'M-Regular'
  | 'M-Bold'
  | 'Button-Bold'
  | 'Button-Regular'
  | 'S-Regular'
  | 'S-Bold'
  | 'Caption-Regular'
  | 'Caption-Bold'
  | 'Tiny-Regular'
  | 'Tiny-Bold'
  | 'Overline-Regular'
  | 'Overline-Bold';

export type HeaderSizes =
  'H1-Regular'
  | 'H1-Bold'
  | 'H2-Regular'
  | 'H2-Bold'
  | 'H3-Regular'
  | 'H3-Bold'
  | 'H4-Regular'
  | 'H4-Bold'
  | 'H5-Regular'
  | 'H5-Bold'
  | 'H6-Regular'
  | 'H6-Bold';

export enum HyperLinkVariation {
  Default = 'Default',
  Sky = 'Sky',
  Tangy = 'Tangy',
  Teal = 'Teal',
  Canary = 'Canary',
  Inverse = 'Inverse',
  InverseNoLine = 'InverseNoLine',
}

export interface TextProps {
  children:
  | JSX.Element
  | JSX.Element[]
  | string
  | string[]
  | number;
  size: BodySizes | HeaderSizes;
  color?: string;
  textDecoration?: string;
  href?: string;
  target?: string;
  hyperLinkVariation?: HyperLinkVariation
}
type HyperLinkStyleProperty = {
  idle: string,
  hover?: string,
  pressed?: string
};

export type HyperLinkStyle = {
  [key in HyperLinkVariation]: {
    color: HyperLinkStyleProperty,
    underline?: HyperLinkStyleProperty,
  }
};
