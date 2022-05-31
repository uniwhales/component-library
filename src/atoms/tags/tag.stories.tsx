import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tag } from './tag';

export default {
  title: 'Atoms/Tags',
  component: Tag,
  argTypes: {
    type: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Tag {...args} isOn={isActive} onClick={() => setIsActive(!isActive)} />
  );
};
export const NFT = Template.bind({});
export const Privacy = Template.bind({});
export const Defi = Template.bind({});
export const Metaverse = Template.bind({});
export const Aurora = Template.bind({});
export const L2 = Template.bind({});
export const Test = Template.bind({});
export const TestTwo = Template.bind({});

NFT.args = {
  name: 'NFT',
  type: 'tag1',
  tabIndex: 0,
};
Privacy.args = {
  name: 'privacy',
  type: 'tag2',
  tabIndex: 1,
};
Defi.args = {
  name: 'defi',
  type: 'tag3',
  tabIndex: 2,
};
Metaverse.args = {
  name: 'metaverse',
  type: 'tag4',
  tabIndex: 3,
};
Aurora.args = {
  name: 'aurora',
  type: 'tag5',
  tabIndex: 4,
};
L2.args = {
  name: 'L2',
  type: 'tag6',
  tabIndex: 5,
};
Test.args = {
  name: 'test',
  type: 'tag6',
  tabIndex: 6,
};
TestTwo.args = {
  name: 'another test',
  type: 'tag6',
  tabIndex: 7,
};
