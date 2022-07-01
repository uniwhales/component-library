import {
  NftTrade, LpPool, SwapTransactionData, TransferTransactionData,
} from '../../atoms/feedCardItem/types';

export interface FeedCardProps {
  transactions: SwapTransactionData[] | TransferTransactionData[] | NftTrade[] | LpPool[];
  datetime: number;
  moreThanFiveTxs: boolean;
  wallet: string;
  onPause: () => void;
  onRemove: () => void;
  onConfigure: () => void;
}
