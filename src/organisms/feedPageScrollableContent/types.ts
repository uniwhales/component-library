import { ReactChild } from 'react';

export interface FeedPageScrollableContentProps {
  children: ReactChild | ReactChild[];
  newUpdates?: { data: any[], paging: {} };
  onShowNew?: () => void;
  offset?: string;
}
