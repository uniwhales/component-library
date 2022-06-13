import { TransactionData } from '../../atoms/masterFeedItemTx/types';

export interface Transaction {
  [key: string]: TransactionData;
  transaction: TransactionData;
}

export interface FeedItemCardProps {
  transactions: Transaction[];
  datetime: number;
  moreThanFiveTxs: boolean;
}
