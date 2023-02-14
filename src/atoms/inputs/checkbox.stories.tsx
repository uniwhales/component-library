import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox } from './checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (props) => {
  const [selected, setSelected] = useState<boolean>(false);
  return <Checkbox {...props} selected={selected} onClick={() => { setSelected(!selected); }} />;
};

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  disabled: false,
  size: 'big',
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

Secondary.args = {
  disabled: false,
  size: 'big',
  variant: 'secondary',
};

Secondary.parameters = {
  backgrounds: { default: 'dark' },
};
