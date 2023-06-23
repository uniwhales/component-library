import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { CieloLogo } from './CieloLogo';
import { LogoProps } from './types';

const meta: Meta<typeof CieloLogo> = {
  component: CieloLogo,
};

export default meta;
type Story = StoryObj<typeof CieloLogo>;

const Template = (args: React.JSX.IntrinsicAttributes & LogoProps) => {
  const [text, setText] = useState(true);
  return (
    <>
      <CieloLogo {...args} noText={text} />
      <button type="button" onClick={() => setText(!text)}>{text ? 'Full logo' : 'Symbol only logo'}</button>
    </>

  );
};

export const Standard: Story = {
  render: (args, { globals: { backgrounds } }) => {
    const isDark = backgrounds?.value === '#191B20';
    return <Template {...args} night={isDark} />;
  },
};
export const Beta: Story = {
  render: (args, { globals: { backgrounds } }) => {
    const isDark = backgrounds?.value === '#191B20';
    return <Template {...args} night={isDark} />;
  },
};
Beta.args = {
  isBeta: true,
};
