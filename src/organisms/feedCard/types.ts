import { TransactionData } from '../../atoms/feedCardItem/types';

export interface Transaction {
  [key: string]: TransactionData;
}

export interface FeedCardProps {
  transactions: Transaction[];
  datetime: number;
  moreThanFiveTxs: boolean;
  onPause: () => void;
  onRemove: () => void;
  onConfigure: () => void;
}
