import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconWrapper } from './iconWrapper';

export default {
  title: 'Atoms/Icons',
  component: IconWrapper,
  argTypes: {
  },
} as ComponentMeta<typeof IconWrapper>;

const Template: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper icon="copy" />
    <IconWrapper icon="remove" />
  </>
);

export const GeneralIcons = Template.bind({});

GeneralIcons.parameters = {
  backgrounds: { default: 'dark' },
};
