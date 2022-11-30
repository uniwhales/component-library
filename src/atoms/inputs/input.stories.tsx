import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './input';
import { SearchStandard } from '../icons';

export default {
  title: 'Atoms/Inputs',
  component: Input,
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
  type, icon, pattern, disabled, label, inputState,
}) => {
  const [localValue, setValue] = useState<string>('');
  const onChangeInput = (inputValue: string) => {
    setValue(inputValue);
  };
  return (
    <Input
      value={localValue}
      disabled={disabled}
      label={label}
      pattern={pattern}
      onChange={(e) => onChangeInput(e.target.value)}
      type={type}
      icon={icon}
      inputState={inputState}
    />
  );
};
export const Primary = Template.bind({});
export const Error = Template.bind({});
export const Help = Template.bind({});
export const Exception = Template.bind({});
export const Valid = Template.bind({});
export const Invalid = Template.bind({});
export const WithIcon = Template.bind({});

Primary.args = {
  inputState: {
    status: 'default',
    message: '',
  },
};
Error.args = {
  inputState: {
    status: 'error',
    message: 'Error message',
  },
};
Help.args = {
  inputState: {
    status: 'help',
    message: 'Required',
  },
};
Exception.args = {
  inputState: {
    status: 'exception',
    message: 'Exception',
  },
};
Valid.args = {
  inputState: {
    status: 'valid',
    message: 'Correct',
  },
};
Invalid.args = {
  inputState: {
    status: 'invalid',
    message: 'Invalid',
  },
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

WithIcon.args = {
  icon: <SearchStandard />,
  inputState: {
    status: 'default',
    message: '',
  },
};

WithIcon.parameters = {
  backgrounds: { default: 'dark' },
};
