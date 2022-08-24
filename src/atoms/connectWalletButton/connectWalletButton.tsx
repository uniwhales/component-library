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
    if (!account) {
      setText('Connect');
      return () => {};
    }

    setText('Connected');
    const update = setTimeout(() => setText(account ? 'Disconnect' : 'Connect'), 1000);
    return () => clearTimeout(update);
  }, [account]);

  return (
    <ConnectButton
      onClick={onClick}
      isConnected={!!account}
      transitionState={text === 'Connected'}
      text={text}
    >
      {(!account || text === 'Connected') && <IconWrapper height="16px" width="16px" icon={<WalletStandard />} />}
      <Text size="S-Bold">{text}</Text>
    </ConnectButton>
  );
};
