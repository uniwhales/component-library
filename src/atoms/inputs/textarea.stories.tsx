import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { TextArea, TextAreaTypes } from './textarea';

const Wrapper = styled.div`
  height: 400px;
  width: 400px;
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  padding: 30px;
`;
const meta: Meta<typeof TextArea> = {
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

const Template = (args: TextAreaTypes) => {
  const {
    $inputState, label, disabled, required, $maxLength,
  } = args;
  const [value, setValue] = useState<string>('');
  const ref = useRef<HTMLTextAreaElement>(null);
  return (
    <Wrapper>
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        $inputState={$inputState}
        label={label}
        required={required}
        $maxLength={$maxLength}
        $textareaRef={ref}
      />
    </Wrapper>

  );
};

export const Primary: Story = {
  render: (args) => <Template {...args} />,
};

export const Error: Story = {
  render: (args) => <Template {...args} />,
};

Primary.args = {
  label: 'label',
  $inputState: {
    status: 'default',
    message: '',
  },
  $maxLength: 30,
};

Error.args = {
  label: 'label',
  $inputState: {
    status: 'error',
    message: 'Error message',
  },
  $maxLength: 30,
};
