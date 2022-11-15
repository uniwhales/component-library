import React, { useState } from 'react';
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
const WithIconR = (isText = true) => (
  <>
    {isText && 'With IconR'}
    <IconWrapper icon={<DashboardStandard />} />
  </>
);
const Template: ComponentStory<typeof ButtonAtom> = (args) => {
  const { children } = args;
  return <ButtonAtom {...args}>{children}</ButtonAtom>;
};

const TemplateHover: ComponentStory<typeof ButtonAtom> = (args) => {
  const [text, setText] = useState('test');
  return (
    <ButtonAtom
      onMouseEnter={() => {
        setText('testing');
      }}
      onMouseLeave={() => {
        setText('test');
      }}
      {...args}
    >
      {text}
    </ButtonAtom>
  );
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
export const SpacialSmallNormalWithIcon = Template.bind({});
export const SpacialSmallRound = Template.bind({});
export const SpacialTinyRound = Template.bind({});
export const SpecialExtraTinyRound = Template.bind({});
export const SpecialSmallSubtle = Template.bind({});
export const SpecialSmallSubtleWithIcon = Template.bind({});
export const SpecialSmallSubtleWithIconR = Template.bind({});
export const SecondaryWithHoverEffect = TemplateHover.bind({});
export const IconOnly = Template.bind({});

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
  children: 'Special Small',
  buttonVariant: 'special_small',
};
SpacialSmallNormalWithIcon.args = {
  children: WithIcon(),
  buttonVariant: 'special_small',
};
SpacialSmallRound.args = {
  children: WithIcon(false),
  buttonVariant: 'special_small_round',
};
SpacialTinyRound.args = {
  children: WithIcon(false),
  buttonVariant: 'special_tiny_round',
};
SpecialExtraTinyRound.args = {
  children: WithIcon(false),
  buttonVariant: 'special_extra_tiny_round',
};
SpecialSmallSubtle.args = {
  children: 'Test',
  buttonVariant: 'special_extra_tiny_subtle',
};
SpecialSmallSubtleWithIcon.args = {
  children: WithIcon(),
  buttonVariant: 'special_extra_tiny_subtle',
};
SpecialSmallSubtleWithIconR.args = {
  children: WithIconR(),
  buttonVariant: 'special_extra_tiny_subtle',
};
SecondaryWithHoverEffect.args = {
  buttonVariant: 'secondary',
  width: '100px',
};
IconOnly.args = {
  children: <IconWrapper icon={<DashboardStandard />} />,
  buttonVariant: 'icon_only',
};
