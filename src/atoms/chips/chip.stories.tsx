import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chip } from './chip';
import { IconWrapper } from '../icons/iconWrapper';
import { StarIcon } from '../icons';

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

const WithIcon = (isText = true, iconSize = '16px') => (
  <>
    <IconWrapper
      fill="white"
      height={iconSize}
      width={iconSize}
      icon={<StarIcon />}
    />
    {isText && 'With Icon'}
  </>
);

const Template: ComponentStory<typeof Chip> = (args) => {
  const { children } = args;
  return <Chip {...args}>{children}</Chip>;
};
export const Primary = Template.bind({});
export const PrimaryCustomWidth = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const TertiaryCustomWidth = Template.bind({});
export const Editable = Template.bind({});
export const TertiaryLined = Template.bind({});
export const Subtle = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
Primary.args = {
  type: 'primary',
  children: WithIcon(),
};
PrimaryCustomWidth.args = {
  type: 'primary',
  width: '200px',
  children: WithIcon(),
};
Secondary.args = {
  type: 'secondary',
  children: WithIcon(),
};
Tertiary.args = {
  type: 'tertiary',
  children: WithIcon(true, '12px'),
};
TertiaryCustomWidth.args = {
  type: 'tertiary',
  width: '400px',
  children: WithIcon(true, '12px'),
};
Editable.args = {
  type: 'editable',
  children: 'Edit Chip',
};
TertiaryLined.args = {
  type: 'tertiaryLined',
  children: 'Tertiary Lined',
};
TertiaryLined.args = {
  type: 'tertiaryLined',
  children: 'Tertiary Lined',
};
Subtle.args = {
  type: 'subtle',
  children: WithIcon(true, '8px'),
};
