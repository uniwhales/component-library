import React, { FC } from 'react';
import { WalletStandard } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';
import { ConnectButton } from './connectWalletButton.styles';
import { ConnectButtonProps } from './types';

export const ConnectWalletButton: FC<ConnectButtonProps> = ({
  onClick, account,
}) => (
  <ConnectButton
    onClick={onClick}
    isConnected={!!account}
  >
    {!account && <IconWrapper height="16px" width="16px" icon={<WalletStandard />} />}
    <Text size="S-Bold">{account ? 'Disconnect' : 'Connect'}</Text>
  </ConnectButton>
);
