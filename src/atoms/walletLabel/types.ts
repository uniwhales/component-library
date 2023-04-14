import { TextPropsBase } from '../shortText/types';

export type WalletLabelProps = TextPropsBase & {
  label?: string;
  address: string;
  width?: string;
};
