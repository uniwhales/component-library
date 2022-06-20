import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonAtom } from './button';
import { IconWrapper } from '../icons/iconWrapper';
import { DashboardStandard } from '../icons';

export default {
  title: 'Atoms/Buttons',
  component: ButtonAtom,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    buttonVariant: {
      control: {
        type: null,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof ButtonAtom>;

const WithIcon = (isText = true) => (
  <>
    <IconWrapper icon={<DashboardStandard />} />
    {isText && 'With Icon'}
  </>
);
const Template: ComponentStory<typeof ButtonAtom> = (args) => {
  const { children } = args;
  return <ButtonAtom {...args}>{children}</ButtonAtom>;
};
export const Primary = Template.bind({});
export const PrimaryWithIcon = Template.bind({});
export const Secondary = Template.bind({});
export const SecondaryWithIcon = Template.bind({});
export const Tertiary = Template.bind({});
export const TertiaryWithIcon = Template.bind({});
export const PrimaryAction = Template.bind({});
export const SecondaryAction = Template.bind({});
export const TinyAction = Template.bind({});
export const SecondaryActionInverse = Template.bind({});
export const SpacialSmallNormal = Template.bind({});
export const SpacialSmallRound = Template.bind({});

PrimaryWithIcon.args = {
  children: WithIcon(),
  buttonVariant: 'primary',
};
Primary.args = {
  children: 'Primary',
  buttonVariant: 'primary',
};
Secondary.args = {
  children: 'Secondary',
  buttonVariant: 'secondary',
};
SecondaryWithIcon.args = {
  children: WithIcon(),
  buttonVariant: 'secondary',
};
Tertiary.args = {
  children: 'Tertiary',
  buttonVariant: 'tertiary',
};
TertiaryWithIcon.args = {
  children: WithIcon(),
  buttonVariant: 'tertiary',
};
PrimaryAction.args = {
  children: WithIcon(false),
  buttonVariant: 'primary_action',
};
SecondaryAction.args = {
  children: WithIcon(false),
  buttonVariant: 'secondary_action',
};
TinyAction.args = {
  children: WithIcon(false),
  buttonVariant: 'tiny_action',
};
SecondaryActionInverse.args = {
  children: WithIcon(false),
  buttonVariant: 'secondary_action_inverse',
};

SpacialSmallNormal.args = {
  children: 'Special small',
  buttonVariant: 'special_small',
};
SpacialSmallRound.args = {
  children: WithIcon(false),
  buttonVariant: 'special_small_round',
};
