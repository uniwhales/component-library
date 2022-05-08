import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './input';

export default {
  title: 'Atoms/Inputs',
  component: Input,
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({ disabled }) => {
  const [localValue, setValue] = useState<string>('');
  const onChangeInput = (inputValue: string) => {
    setValue(inputValue);
  };
  return <Input value={localValue} disabled={disabled} label="Login" onChange={onChangeInput} type="text" />;
};
export const Primary = Template.bind({});

Primary.args = {
  disabled: true,
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
