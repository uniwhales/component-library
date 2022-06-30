import { ConnectButtonProps } from '../../atoms/connectWalletButton/types';
import { SelectOption } from '../../atoms/inputs/select';

export interface FeedPageNavBarProps {
  label: string;
  selectPlaceholder: string;
  selectOptions: SelectOption[];
  selectValue: string | undefined;
  selectOnChange: (e: any) => void;
  account: ConnectButtonProps['account'];
  onConnectClick: () => void;
  plan: 'Free' | 'Pro' | 'Whale';
  following: number;
}
