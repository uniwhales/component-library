import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './card';
import { ButtonAtom } from '../buttons/button';

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}><ButtonAtom onClick={() => {}} buttonVariant="primary">test</ButtonAtom></Card>;
export const CardComponent = Template.bind({});

CardComponent.parameters = {
  backgrounds: { default: 'dark' },
};
