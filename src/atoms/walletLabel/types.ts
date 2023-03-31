import { HeaderSizes, BodySizes } from '../texts/types';

export type WalletLabelProps = {
  size: BodySizes | HeaderSizes,
  color?: string,
  charactersToDisplay: number,
  label?: string,
  address: string,
  width?:string
};
