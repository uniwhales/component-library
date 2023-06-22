import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input, InputsProps, Wrapper } from './input';
import { SearchStandard } from '../icons';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const Template = (args: InputsProps) => {
  const {
    type, icon, pattern, disabled, label, inputState, width, required,
  } = args;
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
export const Primary: Story = {
  render: (args) => <Template {...args} />,
};
export const CustomWidth: Story = {
  render: (args) => <Template {...args} />,
};
export const Error: Story = {
  render: (args) => <Template {...args} />,
};
export const Help: Story = {
  render: (args) => <Template {...args} />,
};
export const Exception: Story = {
  render: (args) => <Template {...args} />,
};
export const Valid: Story = {
  render: (args) => <Template {...args} />,
};
export const Invalid: Story = {
  render: (args) => <Template {...args} />,
};
export const WithIcon: Story = {
  render: (args) => <Template {...args} />,
}; export const Disabled: Story = {
  render: (args) => <Template {...args} />,
}; export const Required: Story = {
  render: (args) => <Template {...args} />,
};

Primary.args = {
  label: 'label',
  inputState: {
    status: 'default',
    message: '',
  },
  icon: <SearchStandard />,
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
