import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ConnectWalletButton } from './connectWalletButton';

export default {
  title: 'Atoms/WalletConnectButton',
  component: ConnectWalletButton,
  argTypes: {
  },
} as ComponentMeta<typeof ConnectWalletButton>;

const Template: ComponentStory<typeof ConnectWalletButton> = (args) => {
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
      {...args}
      account={account}
      onClick={handleSwitch}
    />
  );
};

export const ConnectButton = Template.bind({});
export const PreviewButton = Template.bind({});

PreviewButton.args = {
  previewButton: true,
};
