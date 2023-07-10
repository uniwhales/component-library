import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TEXT_VARIANT_NAMES } from '../../theme';
import { Text } from './text';

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const BodyText: Story = {
  render: () => (
    <>
      {TEXT_VARIANT_NAMES.map((item) => <Text key={item} variant={[item]}>{item}</Text>)}
    </>
  ),
};

BodyText.parameters = {
  backgrounds: { default: 'dark' },
};
