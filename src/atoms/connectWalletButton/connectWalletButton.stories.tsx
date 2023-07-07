import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ConnectWalletButton } from './connectWalletButton';

const meta: Meta<typeof ConnectWalletButton> = {
  component: ConnectWalletButton,
};

export default meta;
type Story = StoryObj<typeof ConnectWalletButton>;

const Template = () => {
  const [account, setAccount] = useState<string | null>(null);

  const handleSwitch = () => {
    if (account) {
      setAccount(null);
    } else {
      setAccount('0x32c2FE388ABbB3e678D44DF6a0471086D705316a');
    }
  };
  return (
    <ConnectWalletButton
      $account={account}
      onClick={handleSwitch}
    />
  );
};

export const ConnectButton: Story = {
  render: () => <Template />,
};
