import { NavbarProps } from '../../types';

export type UserMenuProps = Pick<NavbarProps, 'account' | 'plan' | 'onWalletConnectClick'> & {
  $isMenuOpen: boolean,
};
