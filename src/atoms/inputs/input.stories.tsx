import React, { useRef, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input, Wrapper } from './input';
import { SearchStandard } from '../icons';

export default {
  title: 'Atoms/Inputs',
  component: Input,
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
  type, icon, pattern, disabled, label, inputState, width, required,
}) => {
  const [localValue, setValue] = useState<string>('');
  const onChangeInput = (inputValue: string) => {
    setValue(inputValue);
  };
  const ref = useRef<HTMLInputElement>(null);
  console.debug(ref);
  return (
    <Wrapper>
      <Input
        width={width}
        value={localValue}
        disabled={disabled}
        label={label}
        pattern={pattern}
        onChange={(e) => onChangeInput(e.target.value)}
        type={type}
        icon={icon}
        inputState={inputState}
        required={required}
        inputRef={ref}
        maxLength={10}
      />
    </Wrapper>
  );
};
export const Primary = Template.bind({});
export const CustomWidth = Template.bind({});
export const Error = Template.bind({});
export const Help = Template.bind({});
export const Exception = Template.bind({});
export const Valid = Template.bind({});
export const Invalid = Template.bind({});
export const WithIcon = Template.bind({});
export const Disabled = Template.bind({});
export const Required = Template.bind({});

Primary.args = {
  label: 'label',
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

Disabled.args = {
  inputState: {
    status: 'disabled',
    message: 'disabled',
  },
  disabled: true,
  label: 'Disabled',
};
Required.args = {
  label: 'label',
  inputState: {
    status: 'default',
    message: '',
  },
  required: true,
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

CustomWidth.args = {
  width: '300px',
};
