import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SelectorTabAtom } from './selectorTab';

export default {
  title: 'Atoms/Tabs',
  component: SelectorTabAtom,
  argTypes: {},
} as ComponentMeta<typeof SelectorTabAtom>;

const Template: ComponentStory<typeof SelectorTabAtom> = ({
  children, isHighlighted, tabIndex, setActiveTab,
}) => (
  <SelectorTabAtom
    isHighlighted={isHighlighted}
    tabIndex={tabIndex}
    setActiveTab={setActiveTab}
  >
    {children}
  </SelectorTabAtom>
);
export const PrimaryMasterTabGroup = Template.bind({});
PrimaryMasterTabGroup.args = {
  children: 'Primary',
};
PrimaryMasterTabGroup.parameters = {
  backgrounds: { default: 'dark' },
};
