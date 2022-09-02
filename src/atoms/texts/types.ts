export type BodySizes =
  'L-Regular'
  | 'L-Semibold'
  | 'L-Bold'
  | 'M-Regular'
  | 'M-Semibold'
  | 'M-Bold'
  | 'S-Regular'
  | 'S-Semibold'
  | 'S-Bold'
  | 'XS-Regular'
  | 'XS-Semibold'
  | 'XS-Bold'
  | 'XXS-Regular'
  | 'XXS-Semibold'
  | 'XXS-Bold'
  | 'XXXS-Regular'
  | 'XXXS-Semibold'
  | 'XXXS-Bold';

export type HeaderSizes =
  'H1-Regular' |
  'H1-Semibold'
  | 'H1-Bold'
  | 'H2-Regular'
  | 'H2-Semibold'
  | 'H2-Bold'
  | 'H3-Regular'
  | 'H3-Semibold'
  | 'H3-Bold'
  | 'H4-Regular'
  | 'H4-Semibold'
  | 'H4-Bold'
  | 'H5-Regular'
  | 'H5-Semibold'
  | 'H5-Bold'
  | 'H6-Regular'
  | 'H6-Semibold'
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
