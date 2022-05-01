import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CopyToClipBoard } from './copyToClipBoard';

export default {
  title: 'Molecules/CopyToClipBoard',
  component: CopyToClipBoard,
  argTypes: {
  },
} as ComponentMeta<typeof CopyToClipBoard>;

const Template: ComponentStory<typeof CopyToClipBoard> = (args) => <CopyToClipBoard {...args} />;
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
