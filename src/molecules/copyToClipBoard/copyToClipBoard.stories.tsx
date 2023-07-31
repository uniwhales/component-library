import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CopyToClipBoard } from './copyToClipBoard';
import { Share } from '../../atoms/icons/generalIcons/filledStyle/Share';
import { Theme } from '../../theme';
import { CopyStandard } from '../../atoms/icons';

export default {
  title: 'Molecules/CopyToClipBoard',
  component: CopyToClipBoard,
  argTypes: {
  },
} as ComponentMeta<typeof CopyToClipBoard>;

const Template: ComponentStory<typeof CopyToClipBoard> = (args) => <CopyToClipBoard {...args} />;
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const CustomSize = Template.bind({});
export const Hover = Template.bind({});
export const BackgroundHover = Template.bind({});
export const Mobile = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

Primary.args = {
  walletCut: true,
  addressId: '1',
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

Mobile.args = {
  isMobile: true,
  icon: <CopyStandard />,
};
