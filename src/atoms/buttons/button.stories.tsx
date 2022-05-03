import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonAtom, ButtonVariant } from './button';

export default {
  title: 'Atoms/Buttons',
  component: ButtonAtom,
  argTypes: {
    buttonVariant: {
      control: {
        type: null,
      },
    },
    icon: {
      control: {
        type: 'select',
        options: {
          none: '',
          star: 'star',
          alertBotColor: 'alertBotColor',
        },
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof ButtonAtom>;

const Template: ComponentStory<typeof ButtonAtom> = (args) => {
  const { children } = args;
  return <ButtonAtom {...args}>{children}</ButtonAtom>;
};
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Tertiary = Template.bind({});
export const PrimaryAction = Template.bind({});
export const SecondaryAction = Template.bind({});
export const TinyAction = Template.bind({});
export const SecondaryActionInverse = Template.bind({});
Primary.args = {
  children: 'Primary',
  buttonVariant: ButtonVariant.PRIMARY,
};
Secondary.args = {
  children: 'Secondary',
  buttonVariant: ButtonVariant.SECONDARY,
};
Tertiary.args = {
  children: 'Tertiary',
  buttonVariant: ButtonVariant.TERTIARY,
};
PrimaryAction.args = {
  icon: 'star',
  buttonVariant: ButtonVariant.PRIMARY_ACTION,
};
SecondaryAction.args = {
  icon: 'star',
  buttonVariant: ButtonVariant.SECONDARY_ACTION,
};
TinyAction.args = {
  icon: 'star',
  buttonVariant: ButtonVariant.TINY_ACTION,
};
SecondaryActionInverse.args = {
  icon: 'star',
  buttonVariant: ButtonVariant.SECONDARY_ACTION_INVERSE,
};
Secondary.parameters = {
  backgrounds: { default: 'dark' },
};
TinyAction.parameters = {
  backgrounds: { default: 'dark' },
};
SecondaryAction.parameters = {
  backgrounds: { default: 'dark' },
};
Tertiary.parameters = {
  backgrounds: { default: 'dark' },
};
SecondaryActionInverse.parameters = {
  backgrounds: { default: 'dark' },
};
