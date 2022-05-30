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
  const [isActive, setIsActive] = useState<boolean>(true);
  return (
    <Tag {...args} isOn={isActive} onClick={() => setIsActive(!isActive)} tabIndex={4} borderColor />
  );
};
export const NFT = Template.bind({});
export const Privacy = Template.bind({});
export const Defi = Template.bind({});
export const Metaverse = Template.bind({});
export const Aurora = Template.bind({});
export const L2 = Template.bind({});

NFT.args = {
  name: 'NFT',
  type: 'tag1',
};
Privacy.args = {
  name: 'privacy',
  type: 'tag2',
};
Defi.args = {
  name: 'defi',
  type: 'tag3',
};
Metaverse.args = {
  name: 'metaverse',
  type: 'tag4',
};
Aurora.args = {
  name: 'aurora',
  type: 'tag5',
};
L2.args = {
  name: 'L2',
  type: 'tag6',
};
