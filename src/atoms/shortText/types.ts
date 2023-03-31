import { BodySizes, HeaderSizes } from '../texts/types';

export type ShortTextProps = {
  text: string,
  size?: BodySizes | HeaderSizes,
  color?: string,
  chars?: number,
  target?: string,
  href?: string,
};
