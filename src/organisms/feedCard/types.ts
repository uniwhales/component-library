import { TransactionData } from '../../atoms/feedCardItem/types';

export interface Transaction {
  [key: string]: TransactionData;
  transaction: TransactionData;
}

export interface FeedCardProps {
  transactions: Transaction[];
  datetime: number;
  moreThanFiveTxs: boolean;
}
