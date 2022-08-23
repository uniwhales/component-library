import React, {
  FC,
} from 'react';
import { ConnectWalletButton } from '../../../../atoms/connectWalletButton/connectWalletButton';
import { Line } from '../../../../atoms/Lines/lines';
import { Text } from '../../../../atoms/texts/text';
import { CopyToClipBoard } from '../../../../molecules/copyToClipBoard/copyToClipBoard';
import { localTheme } from '../../../../theme';
import { NavbarUserMenu } from './styles';
import { UserMenuProps } from './types';

export const UserMenu: FC<UserMenuProps> = ({
  account, plan, onWalletConnectClick, isMenuOpen,
}) => {
  const { textShades } = localTheme();

  return (
    <NavbarUserMenu isMenuOpen={isMenuOpen}>
      {account && <CopyToClipBoard walletCut text={account} id={account} />}
      {account && <Line length="98px" />}
      {account && plan && (
        <Text color={textShades.SHADE_MINUS_1} size="M-Regular">
          <>
            {'Plan: '}
            {plan}
          </>
        </Text>
      )}
      <ConnectWalletButton account={account} onClick={() => onWalletConnectClick()} />
    </NavbarUserMenu>
  );
};
