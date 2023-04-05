import { BodySizes, HeaderSizes } from '../texts/types';

export type TextPropsBase = {
  size?: BodySizes | HeaderSizes;
  color?: string;
  chars?: number;
};

export type ShortTextProps = TextPropsBase & {
  text: string;
  target?: string;
  href?: string;
};
