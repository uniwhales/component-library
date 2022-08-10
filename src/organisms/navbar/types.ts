import { ConnectButtonProps } from '../../atoms/connectWalletButton/types';

export interface NavbarProps {
  pageName: string;
  plan: string;
  zIndex: number;
  onBackButtonClick: () => void;
  leftSideChildren?: JSX.Element;
  rightSideChildren?: JSX.Element;
  onWalletConnectClick: ConnectButtonProps['onClick'];
  account?: ConnectButtonProps['account']
}
