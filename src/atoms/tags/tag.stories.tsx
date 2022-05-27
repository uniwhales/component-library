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
export const Tag1 = Template.bind({});
export const Tag2 = Template.bind({});
export const Tag3 = Template.bind({});
export const Tag4 = Template.bind({});
export const Tag5 = Template.bind({});
export const Tag6 = Template.bind({});

Tag1.args = {
  name: 'Tag 01',
  type: 'tag1',
};
Tag2.args = {
  name: 'Tag 02',
  type: 'tag2',
};
Tag3.args = {
  name: 'Tag 03',
  type: 'tag3',
};
Tag4.args = {
  name: 'Tag 04',
  type: 'tag4',
};
Tag5.args = {
  name: 'Tag 05',
  type: 'tag5',
};
Tag6.args = {
  name: 'Tag 06',
  type: 'tag6',
};
