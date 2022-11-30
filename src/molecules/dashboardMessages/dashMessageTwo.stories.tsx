import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { UniWhales } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { DashMessageTwo } from './DashMessageTwo';
import { Wrapper } from './style';

export default {
  title: 'Molecules/DashMessageTwo',
  component: DashMessageTwo,
  argTypes: {},
} as ComponentMeta<typeof DashMessageTwo>;

const Template: ComponentStory<typeof DashMessageTwo> = (args) => (
  <Wrapper>
    <DashMessageTwo
      {...args}
      title="Connect Your Wallet"
      message="You must be a Pro or Whale member to see this page. Connect your verified wallet to see all the latest content and data"
      buttonText="Get UWL"
      buttonIcon={<IconWrapper cursor="pointer" icon={<UniWhales />} />}
      onClick={() => {}}
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
