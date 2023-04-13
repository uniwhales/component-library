import { ShortTextProps, TextPropsBase } from '../shortText/types';

export type WalletLabelProps = TextPropsBase & ShortTextProps & {
  label?: string;
  address: string;
  width?: string;
};
