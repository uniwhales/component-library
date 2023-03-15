import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CieloLogo } from './CieloLogo';

export default {
  title: 'Atoms/CieloLogo',
  component: CieloLogo,
  argTypes: {},
} as ComponentMeta<typeof CieloLogo>;

const Template: ComponentStory<typeof CieloLogo> = (args, { globals }) => {
  const isDark = globals.backgrounds?.value === '#191B20';
  return (
    <CieloLogo {...args} night={isDark} />
  );
};

export const Standard = Template.bind({});
export const NoText = Template.bind({});
export const Square = Template.bind({});

NoText.args = {
  variant: 'noText',
};

Square.args = {
  variant: 'square',
};
