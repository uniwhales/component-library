import { ReactChild } from 'react';
import { TransactionData } from '../../atoms/feedCardItem/types';

export interface FeedPageScrollableContentProps {
  children: ReactChild | ReactChild[];
  newUpdates?: { data: TransactionData[], paging: {} };
  onShowNew?: () => void;
  offset?: string;
}
