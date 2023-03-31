import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Styled } from '../../theme';
import { WalletLabel } from './walletLabel';

export default {
  title: 'Atoms/WalletLabel',
  component: WalletLabel,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof WalletLabel>;

const Wrapper = Styled.div`
  width: 200px;
  margin: 50px 0;
`;

const Template: ComponentStory<typeof WalletLabel> = (args) => (
  <Wrapper>
    <WalletLabel {...args} />
  </Wrapper>
);

export const ShortLabel = Template.bind({});
export const LongLabel = Template.bind({});
export const NoLabel = Template.bind({});
export const BreakWord = Template.bind({});
export const TrimString = Template.bind({});

ShortLabel.args = {
  label: 'label',
  address: '0x1234567890123456789012345678901234567890',
  chars: 3,
};

LongLabel.args = {
  label: 'I am a long label',
  address: '0x1234567890123456789012345678901234567890',
  chars: 8,
};

NoLabel.args = {
  address: '0x1234567890123456789012345678901234567890',
  chars: 6,
};
BreakWord.args = {
  label: 'I am a very long label and I will break the line',
  address: '0x1234567890123456789012345678901234567890',
  chars: 20,
  width: '80px',
};
TrimString.args = {
  label: 'label_with_space_at_end_should_not_be_broken         ',
  address: '0x1234567890123456789012345678901234567890',
  chars: 20,
  width: '80px',
};
