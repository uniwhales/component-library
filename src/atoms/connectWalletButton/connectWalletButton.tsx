import React, { FC, useEffect, useState } from 'react';
import { WalletStandard } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';
import { ConnectButton } from './connectWalletButton.styles';
import { ConnectButtonProps } from './types';

export const ConnectWalletButton: FC<ConnectButtonProps> = ({
  onClick, account,
}) => {
  const [text, setText] = useState<string>('Connect');

  useEffect(() => {
    setText(account ? 'Disconnect' : 'Connect');
  }, [account]);

  return (
    <ConnectButton
      onClick={onClick}
      account={account}
      isConnected={!!account}
    >
      {!account && <IconWrapper height="16px" width="16px" icon={<WalletStandard />} />}
      <Text size="S-Bold">{text}</Text>
    </ConnectButton>
  );
};
