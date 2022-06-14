import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from './Footer';

export default {
  title: 'Atoms/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;
export const FooterComponent = Template.bind({});

FooterComponent.parameters = {
  backgrounds: { default: 'dark' },
};
