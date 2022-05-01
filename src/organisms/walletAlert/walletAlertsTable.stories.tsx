import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WalletAlertsTable } from './walletAlertsTable';

export default {
  title: 'Organisms/WalletAlertsTable',
  component: WalletAlertsTable,
  argTypes: {
  },
} as ComponentMeta<typeof WalletAlertsTable>;

const Template: ComponentStory<typeof
    WalletAlertsTable> = (args) => <WalletAlertsTable {...args} />;
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
