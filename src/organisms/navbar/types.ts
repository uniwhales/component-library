import { ConnectButtonProps } from '../../atoms/connectWalletButton/types';

export interface NavbarProps {
  pageName: string;
  plan: string;
  onBackButtonClick: () => void;
  leftSideChildren?: JSX.Element;
  rightSideChildren?: JSX.Element;
  onWalletConnectClick: ConnectButtonProps['onClick'];
  account?: ConnectButtonProps['account']
  bottomSpacing?: boolean
}

type IsMenuOpen = { isMenuOpen?: boolean };
type Direction = { direction: 'up' | 'down' };
export type NavbarContainerProps = Pick<NavbarProps, 'account' | 'bottomSpacing'> & IsMenuOpen & Direction;
