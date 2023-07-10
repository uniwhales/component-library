import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TEXT_VARIANT_NAMES } from '../../theme';
import { Text } from '../texts/text';
import { Subscript } from './subscript';

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const BodyText: Story = {
  render: () => (
    <>
      {TEXT_VARIANT_NAMES.map((item) => (
        <Subscript
          after={item}
          before={item}
          subscript={item}
          subscriptProps={{ variant: ['10-Bold', '14-Regular'] }}
          textProps={{ variant: ['14-Regular', 'H3-Regular'] }}
        />
      ))}
    </>
  ),
};

BodyText.parameters = {
  backgrounds: { default: 'dark' },
};
