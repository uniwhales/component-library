import React, { FC, useState } from 'react';
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
    transitionState={text === 'Connected'}
  >
    {(!account || text === 'Connected') && <IconWrapper height="16px" width="16px" icon={<WalletStandard />} />}
    <Text size="S-Bold">{text}</Text>
  </ConnectButton>
);
