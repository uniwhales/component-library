import { ConnectButtonProps } from '../../atoms/connectWalletButton/types';

export interface FeedPageNavBarProps {
  label: string;
  selectPlaceholder: string;
  selectOptions: {};
  selectValue: string | undefined;
  selectOnChange: (e: any) => void;
  account: ConnectButtonProps['account'];
  onConnectClick: () => void;
  plan: 'Free' | 'Pro' | 'Whale';
  following: number;
}