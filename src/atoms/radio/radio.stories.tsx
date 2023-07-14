import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './radio';
import { Column } from '../common/flex';

const meta: Meta<typeof Radio> = {
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

const dummyData = [{ label: 'Radio One', disabled: false }, { label: 'Radio Two', disabled: false }, { label: 'Radio Three', disabled: false }, { label: 'Disabled Radio', disabled: true }];

const Template = () => {
  const [selected, setSelected] = useState<null | string>('Radio Two');

  return (
    <Column>
      {dummyData.map((item) => (
        <Radio
          key={item.label}
          label={item.label}
          value={item.label}
          name={item.label}
          disabled={item.disabled}
          selected={selected === item.label}
          onClick={(e) => setSelected(e.target.value)}
          isLarge
        />
      ))}
    </Column>
  );
};

export const Primary: Story = {
  render: () => <Template />,
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
