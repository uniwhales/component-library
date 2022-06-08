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

const Template: ComponentStory<typeof FeedPageNavBar> = () => {
  const [value, setValue] = useState<string>('');
  return (
    <FeedPageNavBar
      label="Alert Feed"
      selectOptions={groupTagOptions}
      selectPlaceholder="Select Group Tags"
      selectValue={value}
      selectOnChange={() => setValue(value)}
    />
  );
};

export const FeedPageNav = Template.bind({});

FeedPageNav.parameters = {
  backgrounds: { default: 'dark' },
};
