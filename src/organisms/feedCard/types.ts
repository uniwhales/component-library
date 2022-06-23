import { SwapTransactionData } from '../../atoms/feedCardItem/types';

export interface FeedCardProps {
  transactions: SwapTransactionData[];
  datetime: number;
  moreThanFiveTxs: boolean;
  onPause: () => void;
  onRemove: () => void;
  onConfigure: () => void;
}
