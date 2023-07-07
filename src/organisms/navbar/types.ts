import { ConnectButtonProps } from '../../atoms/connectWalletButton/types';

export interface NavbarProps {
  $pageName: string;
  plan: string;
  leftSideChildren?: JSX.Element;
  rightSideChildren?: JSX.Element;
  onWalletConnectClick: ConnectButtonProps['onClick'];
  account?: ConnectButtonProps['account']
  $bottomSpacing?: boolean;
  $bgColor?: boolean | string;
}

type IsMenuOpen = { isMenuOpen?: boolean };
type Direction = { direction: 'up' | 'down' };
export type NavbarContainerProps = Pick<NavbarProps, 'account' | '$bottomSpacing'> & IsMenuOpen & Direction;
