import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { TextArea } from './textarea';
import { Styled } from '../../theme';

const Wrapper = Styled.div`
  height: 400px;
  width: 400px;
  background: ${({ theme }) => theme.containerAndCardShades.SHADE_PLUS_3};
  padding: 30px;
`;
export default {
  title: 'Atoms/TextArea',
  component: TextArea,
  argTypes: {
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = ({
  inputState, label, disabled, required, maxLength,
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
        maxLength={maxLength}
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
  maxLength: 30,
};

Error.args = {
  label: 'label',
  inputState: {
    status: 'error',
    message: 'Error message',
  },
  maxLength: 30,
};
