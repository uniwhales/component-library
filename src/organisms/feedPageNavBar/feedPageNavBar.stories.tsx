import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedPageNavBar } from './feedPageNavBar';
import { groupTagOptions } from './mockData';

export default {
  title: 'Organisms/FeedPageNavBar',
  component: FeedPageNavBar,
  argTypes: {
  },
} as ComponentMeta<typeof FeedPageNavBar>;

const Template: ComponentStory<typeof FeedPageNavBar> = (args) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [account, setAccount] = useState<string | null>(null);

  const handleSwitch = () => {
    if (account) {
      setAccount(null);
    } else {
      setAccount('0x32c2FE388ABbB3e678D44DF6a0471086D705316a');
    }
  };
  return (
    <FeedPageNavBar
      {...args}
      label="Alert Feed"
      selectValue={value}
      selectOnChange={() => setValue(value)}
      account={account}
      onConnectClick={handleSwitch}
      plan="Whale"
    />
  );
};

export const FeedPageNav = Template.bind({});

FeedPageNav.args = {
  selectOptions: groupTagOptions,
  selectPlaceholder: 'Select Group Tags',
  following: 1000,
};

FeedPageNav.parameters = {
  backgrounds: { default: 'dark' },
};
