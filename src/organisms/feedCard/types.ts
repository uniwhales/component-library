import { TransactionData } from '../../atoms/feedCardItem/types';

export interface FeedCardProps {
  transactions: TransactionData[];
  datetime: number;
  moreThanFiveTxs: boolean;
  onPause: () => void;
  onRemove: () => void;
  onConfigure: () => void;
}
