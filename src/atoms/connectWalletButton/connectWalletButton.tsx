import React, { FC } from 'react';
import { WalletStandard } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';
import { ConnectButton } from './connectWalletButton.styles';
import { ConnectButtonProps } from './types';

export const ConnectWalletButton: FC<ConnectButtonProps> = ({
  onClick, account, previewButton,
}) => (
  <ConnectButton
    onClick={onClick}
    isConnected={!!account}
    previewButton={previewButton}
  >
    {!account && <IconWrapper height="16px" width="16px" icon={<WalletStandard />} />}
    <Text size="14-Bold">{account ? 'Disconnect' : 'Connect'}</Text>
  </ConnectButton>
);
