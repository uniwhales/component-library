import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { CieloLogo } from './CieloLogo';
import { LogoProps } from './types';

const meta: Meta<typeof CieloLogo> = {
  component: CieloLogo,
};

export default meta;
type Story = StoryObj<typeof CieloLogo>;

const Template = (args: React.JSX.IntrinsicAttributes & LogoProps, { globals }: any) => {
  const isDark = globals.backgrounds?.value === '#191B20';
  const [text, setText] = useState(true);
  return (
    <>
      <CieloLogo {...args} noText={text} night={isDark} />
      <button type="button" onClick={() => setText(!text)}>{text ? 'Full logo' : 'Symbol only logo'}</button>
    </>

  );
};

export const Standard: Story = {
  render: (args) => <Template {...args} />,
};
export const Beta: Story = {
  render: (args) => <Template {...args} />,
};
Beta.args = {
  isBeta: true,
};
