import { BodySizes, HeaderSizes } from '../texts/types';

export interface ShortenTextProps {
  text: string,
  size: BodySizes | HeaderSizes,
  color?: string,
  chars?: number,
  target?: string,
  href?: string,
}
