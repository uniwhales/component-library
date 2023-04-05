import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { TextArea } from './textarea';
import { Styled } from '../../theme';

const Wrapper = Styled.div`
  height: 400px;
  width: 400px;
`;
export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  argTypes: {
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = ({
  inputState, label, disabled, required,
}) => {
  const [value, setValue] = useState<string>('');
  return (
    <Wrapper>
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        inputState={inputState}
        label={label}
        required={required}
      />
    </Wrapper>

  );
};

export const Primary = Template.bind({});
export const Error = Template.bind({});

Primary.args = {
  label: 'label',
  inputState: {
    status: 'default',
    message: '',
  },
};

Error.args = {
  label: 'label',
  inputState: {
    status: 'error',
    message: 'Error message',
  },
};
