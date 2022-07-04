import {
  TransactionData,
} from '../../atoms/feedCardItem/types';

export interface FeedCardProps {
  transactions: TransactionData[];
  datetime: number;
  moreThanFiveTxs: boolean;
  wallet: string;
  onPause: () => void;
  onRemove: () => void;
  onConfigure: () => void;
  label: string;
}
