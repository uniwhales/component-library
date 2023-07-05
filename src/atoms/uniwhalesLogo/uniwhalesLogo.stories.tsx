import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { LogoProps, UniWhalesLogo } from './uniwhalesLogo';

const meta: Meta<typeof UniWhalesLogo> = {
  component: UniWhalesLogo,
};

export default meta;
type Story = StoryObj<typeof UniWhalesLogo>;

const Template = (args: LogoProps) => {
  const [showText, setShowText] = useState(true);
  return <UniWhalesLogo {...args} showText={showText} containerWidth="max-content" onClick={() => setShowText(!showText)} />;
};
export const Standard: Story = {
  render: (args) => <Template {...args} />,
};
