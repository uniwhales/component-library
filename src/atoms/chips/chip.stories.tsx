import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './chip';
import { IconWrapper } from '../icons/iconWrapper';
import { StarIcon } from '../icons';

const meta: Meta<typeof Chip> = {
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

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

const Template = (args: React.JSX.IntrinsicAttributes & { children: React.ReactChild; secondaryTypeBgColor?: 'orange' | 'green' | 'red' | 'yellow' | undefined; type: 'primary' | 'secondary' | 'tertiary' | 'editable' | 'tertiaryLined' | 'subtle'; } & Pick<React.CSSProperties, 'width' | 'cursor'>) => {
  const { children } = args;
  return <Chip {...args}>{children}</Chip>;
};
export const Primary: Story = {
  render: (args) => <Template {...args} />,
};
export const PrimaryCustomWidth: Story = {
  render: (args) => <Template {...args} />,
};
export const Secondary: Story = {
  render: (args) => <Template {...args} />,
};
export const Tertiary: Story = {
  render: (args) => <Template {...args} />,
};
export const TertiaryCustomWidth: Story = {
  render: (args) => <Template {...args} />,
};
export const TertiaryLined: Story = {
  render: (args) => <Template {...args} />,
};
export const Editable: Story = {
  render: (args) => <Template {...args} />,
};
export const Subtle: Story = {
  render: (args) => <Template {...args} />,
};

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
