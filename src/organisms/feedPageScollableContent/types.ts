import { ReactChild } from 'react';

export interface FeedPageScrollableContentProps {
  children: ReactChild | ReactChild[];
  newUpdates?: any[];
  onShowNew?: () => void;
}
