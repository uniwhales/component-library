import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tag } from './tag';

export default {
  title: 'Atoms/Tags',
  component: Tag,
  argTypes: {
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
Primary.args = {
  name: 'Tag',
  type: 'tag1',
};
