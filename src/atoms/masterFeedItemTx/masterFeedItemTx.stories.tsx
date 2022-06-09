import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MasterFeedItemTx } from './masterFeedItemTx';

export default {
  title: 'Atoms/MasterFeedItemTx',
  component: MasterFeedItemTx,
  argTypes: {},
} as ComponentMeta<typeof MasterFeedItemTx>;

const Template: ComponentStory<typeof MasterFeedItemTx> = () => (
  <MasterFeedItemTx isOpen={false} isMulti />
);

export const MasterFeedItem = Template.bind({});

MasterFeedItem.parameters = {
  backgrounds: { default: 'dark' },
};
