import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { CieloLogo } from './CieloLogo';

export default {
  title: 'Atoms/CieloLogo',
  component: CieloLogo,
  argTypes: {},
} as ComponentMeta<typeof CieloLogo>;

const Template: ComponentStory<typeof CieloLogo> = (args) => (
  <CieloLogo {...args} />
);

export const Standard = Template.bind({});
