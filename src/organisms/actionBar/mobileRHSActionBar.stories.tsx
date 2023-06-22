import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MobileRHSActionBar } from './mobileRHSActionBar';
import { AllIcon } from '../../atoms/icons';

export default {
  title: 'Organisms/MobileRHSActionBar',
  component: MobileRHSActionBar,
  argTypes: {},
} as Meta<typeof MobileRHSActionBar>;

const Template: StoryFn<typeof MobileRHSActionBar> = (args) => (
  <MobileRHSActionBar {...args} />
);

export const Primary = Template.bind({});
export const NoHover = Template.bind({});
export const Tertiary = Template.bind({});
export const Quartary = Template.bind({});

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
