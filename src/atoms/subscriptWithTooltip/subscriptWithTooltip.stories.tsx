import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { SubscriptWithTooltip, SubscriptWithTooltipProps } from './subscriptWithTooltip';

export default {
  title: 'Atoms/SubscriptWithTooltip',
  component: SubscriptWithTooltip,
  argTypes: {
    size: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof SubscriptWithTooltip>;

const Template: Story<SubscriptWithTooltipProps> = (args) => {
  const { isMobile } = args;
  return (
    <SubscriptWithTooltip
      size="14-Regular"
      beforeSubscript="0.0"
      subscript="6"
      afterSubscript="452"
      isMobile={isMobile}
      label="Some label"
    />
  );
};

export const Regular = Template.bind({});
export const Mobile = Template.bind({});

Regular.args = {
};

Regular.parameters = {
  backgrounds: { default: 'dark' },
};

Mobile.args = {
  isMobile: true,
};
