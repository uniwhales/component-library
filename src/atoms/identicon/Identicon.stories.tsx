import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IdenticonComponent } from './Identicon';

export default {
  title: 'Atoms/Identicon',
  component: IdenticonComponent,
  argTypes: {},
} as ComponentMeta<typeof IdenticonComponent>;

const Template: ComponentStory<typeof IdenticonComponent> = (props) => (
  <IdenticonComponent {...props} />
);

export const Primary = Template.bind({});
export const NoInteraction = Template.bind({});

Primary.args = {
  id: 'someRandomString',
  containerSize: '48px',
  iconSize: 32,
  hasInteraction: true,
  onClick: () => console.log('Clicked'),
};

NoInteraction.args = {
  id: 'someRandomString',
  containerSize: '48px',
  iconSize: 32,
  hasInteraction: false,
};
