import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './input';

export default {
  title: 'Atoms/Inputs',
  component: Input,
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
  disabled, isError, type,
}) => {
  const [localValue, setValue] = useState<string>('');
  const onChangeInput = (inputValue: string) => {
    setValue(inputValue);
  };
  return <Input value={localValue} disabled={disabled} isError={isError} label="Login" onChange={(e:any) => onChangeInput(e.target.value)} type={type} />;
};
export const Primary = Template.bind({});

Primary.args = {
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
