import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CopyToClipBoard } from './copyToClipBoard';
import { Share } from '../../atoms/icons/generalIcons/filledStyle/Share';
import { Theme } from '../../theme';
import { CopyStandard } from '../../atoms/icons';

const meta: Meta<typeof CopyToClipBoard> = {
  component: CopyToClipBoard,
};

export default meta;
type Story = StoryObj<typeof CopyToClipBoard>;

export const Primary: Story = {
  render: (args) => <CopyToClipBoard {...args} />,
};
export const Secondary: Story = {
  render: (args) => <CopyToClipBoard {...args} />,
};
export const CustomSize: Story = {
  render: (args) => <CopyToClipBoard {...args} />,
};
export const Hover: Story = {
  render: (args) => <CopyToClipBoard {...args} />,
};
export const BackgroundHover: Story = {
  render: (args) => <CopyToClipBoard {...args} />,
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

Secondary.args = {
  icon: <Share />,
};

CustomSize.args = {
  iconSize: '32px',
};

Hover.args = {
  hoverColor: Theme.colors.primary.MANGO,
  link: 'sdad',
};

BackgroundHover.args = {
  icon: <CopyStandard />,
  iconLeft: true,
  hoverColor: Theme.colors.primary.MANGO,
  link: 'sdad',
  background: true,
};
