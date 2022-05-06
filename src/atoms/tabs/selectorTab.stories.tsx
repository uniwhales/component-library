import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SelectorTabAtom } from './selectorTab';

export default {
  title: 'Atoms/Tabs',
  component: SelectorTabAtom,
  argTypes: {},
} as ComponentMeta<typeof SelectorTabAtom>;

const Template: ComponentStory<typeof SelectorTabAtom> = (args) => <SelectorTabAtom {...args} />;
export const PrimaryMasterTabGroup = Template.bind({});
PrimaryMasterTabGroup.args = {
  title: 'Primary',
  icon: 'avalanche',
};
PrimaryMasterTabGroup.parameters = {
  backgrounds: { default: 'dark' },
};
