import React, {
  FC,
} from 'react';
import { ConnectWalletButton } from '../../../../atoms/connectWalletButton/connectWalletButton';
import { CopyToClipBoard } from '../../../../molecules/copyToClipBoard/copyToClipBoard';
import { NavbarUserMenu } from './styles';
import { UserMenuProps } from './types';

export const UserMenu: FC<UserMenuProps> = ({
  account, onWalletConnectClick, $isMenuOpen,
}) => (
  <NavbarUserMenu $isMenuOpen={$isMenuOpen}>
    {account && <CopyToClipBoard walletCut text={account} />}
    {/* @ts-ignore //TODO ERROR */}
    <ConnectWalletButton account={account} onClick={() => onWalletConnectClick()} />
  </NavbarUserMenu>
);
