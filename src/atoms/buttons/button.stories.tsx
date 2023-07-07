import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ButtonAtom, ButtonWrapper } from './button';
import { IconWrapper } from '../icons/iconWrapper';
import { AlertBotStandard, DashboardStandard, RefreshIcon } from '../icons';
import { ButtonProps } from './types';

const meta: Meta<typeof ButtonAtom> = {
  component: ButtonAtom,
};

export default meta;
type Story = StoryObj<typeof ButtonAtom>;

const WithIcon = (isText = true) => (
  <>
    <IconWrapper icon={<DashboardStandard />} />
    {isText && 'With Icon'}
  </>
);
const IconNoText = () => (
  <IconWrapper icon={<DashboardStandard />} />
);
const WithIconR = (isText = true) => (
  <>
    {isText && 'With IconR'}
    <IconWrapper icon={<DashboardStandard />} />
  </>
);

const Template = (args: React.JSX.IntrinsicAttributes & ButtonProps) => {
  const { children } = args;
  return (
    <ButtonWrapper>
      <ButtonAtom {...args}>{children}</ButtonAtom>
    </ButtonWrapper>
  );
};

const TemplateHover = (args: React.JSX.IntrinsicAttributes & ButtonProps) => {
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

export const Primary: Story = {
  render: (args) => <Template {...args} />,
};

export const PrimaryWithIcon: Story = {
  render: (args) => <Template {...args} />,
};

export const Secondary: Story = {
  render: (args) => <Template {...args} />,
};

export const SecondaryWithIcon: Story = {
  render: (args) => <Template {...args} />,
};

export const Tertiary: Story = {
  render: (args) => <Template {...args} />,
};

export const TertiaryWithIcon: Story = {
  render: (args) => <Template {...args} />,
};

export const TertiaryIconOnly: Story = {
  render: (args) => <Template {...args} />,
};

export const PrimaryAction: Story = {
  render: (args) => <Template {...args} />,
};

export const SecondaryAction: Story = {
  render: (args) => <Template {...args} />,
};

export const TinyAction: Story = {
  render: (args) => <Template {...args} />,
};

export const SecondaryActionInverse: Story = {
  render: (args) => <Template {...args} />,
};

export const SpecialSmallNormal: Story = {
  render: (args) => <Template {...args} />,
};

export const SpecialSmallNormalWithIcon: Story = {
  render: (args) => <Template {...args} />,
};

export const SpecialSmallRound: Story = {
  render: (args) => <Template {...args} />,
};
export const SpecialTinyRound: Story = {
  render: (args) => <Template {...args} />,
};

export const SpecialExtraTinyRound: Story = {
  render: (args) => <Template {...args} />,
};

export const SpecialSmallSubtle: Story = {
  render: (args) => <Template {...args} />,
};

export const SpecialSmallSubtleWithIcon: Story = {
  render: (args) => <Template {...args} />,
};

export const SpecialSmallSubtleWithIconR: Story = {
  render: (args) => <Template {...args} />,
};

export const SquareButton: Story = {
  render: (args) => <Template {...args} />,
};

export const SquareButtonCustomSize: Story = {
  render: (args) => <Template {...args} />,
};

export const OnboardingButtonPrimary: Story = {
  render: (args) => <Template {...args} />,
};

export const OnboardingButtonPrimaryCustomWidthButton: Story = {
  render: (args) => <Template {...args} />,
};

export const OnboardingButtonSecondary: Story = {
  render: (args) => <Template {...args} />,
};

export const OnboardingButtonSecondaryCustomWidthButton: Story = {
  render: (args) => <Template {...args} />,
};

export const CloseButtonPrimary: Story = {
  render: (args) => <Template {...args} />,
};

export const CloseButtonSecondary: Story = {
  render: (args) => <Template {...args} />,
};

export const CloseButtonModal: Story = {
  render: (args) => <Template {...args} />,
};

export const TwitterExample: Story = {
  render: (args) => <Template {...args} />,
};

export const TelegramExample: Story = {
  render: (args) => <Template {...args} />,
};

export const SecondaryWithHoverEffect: Story = {
  render: (args) => <TemplateHover {...args} />,
};

PrimaryWithIcon.args = {
  children: WithIcon(),
  $buttonVariant: 'primary',
};
Primary.args = {
  children: 'Primary',
  $buttonVariant: 'primary',
};
Secondary.args = {
  children: 'Secondary',
  $buttonVariant: 'secondary',
};
SecondaryWithIcon.args = {
  children: WithIcon(),
  $buttonVariant: 'secondary',
};
Tertiary.args = {
  children: 'Tertiary',
  $buttonVariant: 'tertiary',
};
TertiaryWithIcon.args = {
  children: WithIcon(),
  $buttonVariant: 'tertiary',
};
TertiaryIconOnly.args = {
  children: IconNoText(),
  $buttonVariant: 'tertiary',
};
PrimaryAction.args = {
  children: WithIcon(false),
  $buttonVariant: 'primary_action',
};
SecondaryAction.args = {
  children: WithIcon(false),
  $buttonVariant: 'secondary_action',
};
TinyAction.args = {
  children: WithIcon(false),
  $buttonVariant: 'tiny_action',
};
SecondaryActionInverse.args = {
  children: WithIcon(false),
  $buttonVariant: 'secondary_action_inverse',
};
SpecialSmallNormal.args = {
  children: 'Special Small',
  $buttonVariant: 'special_small',
};
SpecialSmallNormalWithIcon.args = {
  children: WithIcon(),
  $buttonVariant: 'special_small',
};
SpecialSmallRound.args = {
  children: WithIcon(false),
  $buttonVariant: 'special_small_round',
};
SpecialTinyRound.args = {
  children: WithIcon(false),
  $buttonVariant: 'special_tiny_round',
};
SpecialExtraTinyRound.args = {
  children: WithIcon(false),
  $buttonVariant: 'special_extra_tiny_round',
};
SpecialSmallSubtle.args = {
  children: 'Test',
  $buttonVariant: 'special_extra_tiny_subtle',
};
SpecialSmallSubtleWithIcon.args = {
  children: WithIcon(),
  $buttonVariant: 'special_extra_tiny_subtle',
};
SpecialSmallSubtleWithIconR.args = {
  children: WithIconR(),
  $buttonVariant: 'special_extra_tiny_subtle',
};
SecondaryWithHoverEffect.args = {
  $buttonVariant: 'secondary',
  width: '100px',
};
SquareButton.args = {
  children: WithIcon(),
  $buttonVariant: 'square',
};
SquareButtonCustomSize.args = {
  children: WithIcon(),
  $buttonVariant: 'square',
  size: '140px',
};
OnboardingButtonPrimary.args = {
  children: 'Onboarding',
  $buttonVariant: 'onboarding_primary',
};
OnboardingButtonPrimaryCustomWidthButton.args = {
  children: 'Onboarding',
  $buttonVariant: 'onboarding_primary',
  width: '225px',
};
OnboardingButtonSecondary.args = {
  children: 'Onboarding',
  $buttonVariant: 'onboarding_secondary',
};
OnboardingButtonSecondaryCustomWidthButton.args = {
  children: 'Onboarding',
  $buttonVariant: 'onboarding_secondary',
  width: '225px',
};
CloseButtonPrimary.args = {
  $buttonVariant: 'close_primary',
  size: '30px',
};
CloseButtonSecondary.args = {
  $buttonVariant: 'close_secondary',
  size: '30px',
};
CloseButtonModal.args = {
  $buttonVariant: 'close_modal',
};
TwitterExample.args = {
  $buttonVariant: 'special_extra_tiny_subtle',
  color: '#1D86E8',
  children: (
    <>
      <IconWrapper icon={<RefreshIcon />} />
      Twitter Connect
    </>
  ),
};
TelegramExample.args = {
  $buttonVariant: 'special_extra_tiny_subtle',
  color: '#B4B5C6',
  children: (
    <>
      <IconWrapper icon={<AlertBotStandard />} />
      Telegram Bots
    </>
  ),
};
