import { Color, TextVariant } from '../../theme';

export type TextPropsBase = {
  size?: TextVariant;
  color?: Color;
  chars?: number;
};

export type ShortTextProps = TextPropsBase & {
  text: string;
  target?: string;
  href?: string;
};
