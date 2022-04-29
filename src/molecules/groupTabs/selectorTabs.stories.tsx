import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { SelectorTabsMolecules, Tab } from './selectorTabs';

const demo = [
  { id: '1', name: 'All Chains', icon: false },
  { id: '2', name: 'Polygon', icon: true },
  { id: '3', name: 'Binance', icon: true },
  { id: '4', name: 'Fantom', icon: true },
  { id: '5', name: 'Arbitrum', icon: true },
  { id: '6', name: 'Ethereum', icon: true },
  { id: '7', name: 'Boba', icon: true },
  { id: '8', name: 'Harmony', icon: true },
];

export default {
  title: 'Molecules/Tabs',
  component: SelectorTabsMolecules,
  argTypes: {},
} as ComponentMeta<typeof SelectorTabsMolecules>;

const Template: ComponentStory<typeof SelectorTabsMolecules> = (args) => {
  const { tabs } = args;
  const [data, setData] = useState<Tab>();
  return (
    <SelectorTabsMolecules tabs={tabs} setActiveTab={setData} activeTab={data} />
  );
};

export const PrimaryTabsGroups = Template.bind({});

PrimaryTabsGroups.args = {
  tabs: demo,
};
PrimaryTabsGroups.parameters = {
  backgrounds: { default: 'dark' },
};
