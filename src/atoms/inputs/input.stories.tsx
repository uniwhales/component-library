import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './input';
import { StarIcon } from '../icons';

export default {
  title: 'Atoms/Inputs',
  component: Input,
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = ({
  disabled, isError, type, icon,
}) => {
  const [localValue, setValue] = useState<string>('');
  const onChangeInput = (inputValue: string) => {
    setValue(inputValue);
  };
  return (
    <Input
      value={localValue}
      disabled={disabled}
      isError={isError}
      label="Login"
      onChange={(e) => onChangeInput(e.target.value)}
      type={type}
      icon={icon}
    />
  );
};
export const Primary = Template.bind({});
export const WithIcon = Template.bind({});

Primary.args = {
};

Primary.parameters = {
  backgrounds: { default: 'dark' },
};

WithIcon.args = {
  icon: <StarIcon />,
};

WithIcon.parameters = {
  backgrounds: { default: 'dark' },
};
