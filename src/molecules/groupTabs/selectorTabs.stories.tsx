import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { SelectorTabsMolecules, Tab } from './selectorTabs';

const demo = [
  { id: '1', label: 'All Chains', value: 'All Chains' },
  { id: '2', label: 'All Chains', value: 'All Chains' },
  { id: '3', label: 'All Chains', value: 'All Chains' },
  { id: '4', label: 'All Chains', value: 'All Chains' },
  { id: '5', label: 'All Chains', value: 'All Chains' },

];

export default {
  title: 'Molecules/Tabs',
  component: SelectorTabsMolecules,
  argTypes: {},
} as Meta<typeof SelectorTabsMolecules>;

const Template: StoryFn<typeof SelectorTabsMolecules> = (args) => {
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
