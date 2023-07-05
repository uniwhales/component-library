import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import { WalletLabel } from './walletLabel';
import { WalletLabelProps } from './types';

const meta: Meta<typeof WalletLabel> = {
  component: WalletLabel,
};

export default meta;
type Story = StoryObj<typeof WalletLabel>;

const Wrapper = styled.div`
  width: 200px;
  margin: 50px 0;
`;

const Template = (args: WalletLabelProps) => (
  <Wrapper>
    <WalletLabel {...args} />
  </Wrapper>
);

export const ShortLabel: Story = {
  render: (args) => <Template {...args} />,
};
export const LongLabel: Story = {
  render: (args) => <Template {...args} />,
};
export const NoLabel: Story = {
  render: (args) => <Template {...args} />,
};
export const BreakWord: Story = {
  render: (args) => <Template {...args} />,
};
export const TrimString: Story = {
  render: (args) => <Template {...args} />,
};

ShortLabel.args = {
  label: 'label',
  address: '0x1234567890123456789012345678901234567890',
  chars: 3,
};

LongLabel.args = {
  label: 'I am a long label',
  address: '0x1234567890123456789012345678901234567890',
  chars: 8,
};

NoLabel.args = {
  address: '0x1234567890123456789012345678901234567890',
  chars: 6,
};
BreakWord.args = {
  label: 'I am a very long label and I will break the line',
  address: '0x1234567890123456789012345678901234567890',
  chars: 20,
  width: '80px',
};
TrimString.args = {
  label: 'label_with_space_at_end_should_not_be_broken         ',
  address: '0x1234567890123456789012345678901234567890',
  chars: 20,
  width: '80px',
};
