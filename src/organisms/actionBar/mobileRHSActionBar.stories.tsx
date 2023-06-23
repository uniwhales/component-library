import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MobileRHSActionBar } from './mobileRHSActionBar';
import { AllIcon } from '../../atoms/icons';

const meta: Meta<typeof MobileRHSActionBar> = {
  component: MobileRHSActionBar,
};

export default meta;
type Story = StoryObj<typeof MobileRHSActionBar>;

export const Primary: Story = {
  render: (args) => <MobileRHSActionBar {...args} />,
};

export const NoHover: Story = {
  render: (args) => <MobileRHSActionBar {...args} />,
};

export const Tertiary: Story = {
  render: (args) => <MobileRHSActionBar {...args} />,
};

export const Quartary: Story = {
  render: (args) => <MobileRHSActionBar {...args} />,
};

Primary.args = {
  left: 'Latest Announcements',
  right: <AllIcon />,
  height: '54px',
};

NoHover.args = {
  left: <AllIcon />,
  right: <AllIcon />,
  noHover: true,
  height: '54px',
};

Tertiary.args = {
  left: <AllIcon />,
  right: 'Text',
};
Quartary.args = {
  left: 'text left',
  right: 'text right',
};
