import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CopyToClipBoard } from './copyToClipBoard';
import { Share } from '../../atoms/icons/generalIcons/filledStyle/Share';
import { Theme } from '../../theme';

export default {
  title: 'Molecules/CopyToClipBoard',
  component: CopyToClipBoard,
  argTypes: {
  },
} as ComponentMeta<typeof CopyToClipBoard>;

const Template: ComponentStory<typeof CopyToClipBoard> = (args) => <CopyToClipBoard {...args} />;
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Hover = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

Secondary.args = {
  icon: <Share />,
};

Hover.args = {
  hoverColor: Theme.colors.primary.MANGO,
  link: 'sdad',
};
