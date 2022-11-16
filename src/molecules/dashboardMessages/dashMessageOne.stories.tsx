import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { DashMessageOne } from './DashMessageOne';
import { Wrapper } from './style';

export default {
  title: 'Molecules/DashMessageOne',
  component: DashMessageOne,
  argTypes: {},
} as ComponentMeta<typeof DashMessageOne>;

const Template: ComponentStory<typeof DashMessageOne> = (args) => (
  <Wrapper>
    <DashMessageOne
      {...args}
      title="Dashboard Under Maintenance"
      message="This dashboard is still under contrsuction or is going through maintenance. "
      secondaryMessage="Contact us if you need more support"
    />
  </Wrapper>
);

export const DashMessage = Template.bind({});

DashMessage.args = {
  night: true,
};
DashMessage.parameters = {
  backgrounds: { default: 'dark' },
};
