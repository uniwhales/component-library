import { MasterFeedItemTxProps } from '../../atoms/masterFeedItemTx/types';

export interface FeedItemCardProps {
  transactions: MasterFeedItemTxProps[];
  datetime: number;
  moreThanFiveTxs: boolean;
}
