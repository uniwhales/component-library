import React, { FC, useEffect, useState } from 'react';
import { WalletIcon } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';
import { ConnectButton } from './connectWalletButton.styles';
import { ConnectButtonProps } from './types';

export const ConnectWalletButton: FC<ConnectButtonProps> = ({
  onClick, account,
}) => {
  const [text, setText] = useState<string>('');
  const textToDisplay = () => (account ? `${account.slice(0, 4)}...${account.slice(account.length - 4)}` : 'Connect');
  useEffect(() => setText(textToDisplay()), [account]);
  return (
    <ConnectButton
      onClick={onClick}
      onMouseEnter={() => setText(account ? 'Disconnect' : 'Connect')}
      onMouseLeave={() => setText(textToDisplay())}
      account={account}
    >
      <IconWrapper icon={<WalletIcon />} />
      <Text size="S-Bold">{text}</Text>
    </ConnectButton>
  );
};
