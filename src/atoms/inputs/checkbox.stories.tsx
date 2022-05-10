import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox, CheckboxSize } from './checkbox';

export default {
  title: 'Atoms/Checkboxes',
  component: Checkbox,
  argTypes: {
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (props) => {
  const [selected, setSelected] = useState(false);
  return <Checkbox {...props} selected={selected} onClick={() => { setSelected(!selected); }} />;
};

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  size: CheckboxSize.Big,
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
