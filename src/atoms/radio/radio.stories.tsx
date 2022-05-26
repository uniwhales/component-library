import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Radio } from './radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  argTypes: {
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (props) => {
  const [checked, setChecked] = useState<boolean>(false);
  return <Radio {...props} checked={checked} onChange={() => { setChecked(!checked); }} />;
};

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  checked: false,
  label: 'some label',
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
