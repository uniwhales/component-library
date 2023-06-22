import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const Template = (props: React.JSX.IntrinsicAttributes & CheckboxProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  return <Checkbox {...props} selected={selected} onClick={() => { setSelected(!selected); }} />;
};

export const Primary: Story = {
  render: (args) => <Template {...args} />,
};
export const Secondary: Story = {
  render: (args) => <Template {...args} />,
};

Primary.args = {
  disabled: false,
  size: 'big',
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

Secondary.args = {
  disabled: false,
  size: 'big',
  variant: 'secondary',
};

Secondary.parameters = {
  backgrounds: { default: 'dark' },
};
