import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip } from './chip';
import { StarIcon } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';

export default {
  title: 'Atoms/Chips',
  component: Chip,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    type: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Chip>;

const WithIcon = (isText = true) => (
  <>
    <IconWrapper icon={<StarIcon />} />
    {isText && 'With Icon'}
  </>
);

const Template: ComponentStory<typeof Chip> = (args) => {
  const { children } = args;
  const editMode = true;
  return <Chip {...args}>{!editMode ? children : '.....'}</Chip>;
};
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const Editable = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
Primary.args = {
  type: 'primary',
  children: WithIcon(),
};
Secondary.args = {
  type: 'secondary',
  children: WithIcon(),
};
Tertiary.args = {
  type: 'tertiary',
  children: WithIcon(),
};
Editable.args = {
  type: 'editable',
  children: 'Edit Chip',
};
