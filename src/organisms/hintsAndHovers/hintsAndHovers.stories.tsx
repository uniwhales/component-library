import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HintsAndHovers } from './hintsAndHovers';
import { Styled } from '../../theme';
import { Text } from '../../atoms/texts/text';

export default {
  title: 'Organisms/HintsAndHovers',
  component: HintsAndHovers,
  argTypes: {
  },
} as ComponentMeta<typeof HintsAndHovers>;

const Wrapper = Styled.div`
  margin-left: 100px;
  margin-top: 100px;
`;

const Template: ComponentStory<typeof HintsAndHovers> = (
  args,
) => <Wrapper><HintsAndHovers {...args} /></Wrapper>;
export const Primary = Template.bind({});

Primary.args = {
  hint: <Text size="L-Regular">test</Text>,
  id: 'primary',
};

export const Top = Template.bind({});

Top.args = {
  hint: <Text size="L-Regular">Large text area</Text>,
  id: 'top',
  place: 'top',
};
export const Bottom = Template.bind({});

Bottom.args = {
  hint: <Text size="L-Regular">Large text area</Text>,
  id: 'bottom',
  place: 'bottom',
};
export const Left = Template.bind({});

Left.args = {
  hint: <Text size="L-Regular">Large text area</Text>,
  id: 'left',
  place: 'left',
};
export const Right = Template.bind({});

Right.args = {
  hint: <Text size="L-Regular">Large text area</Text>,
  id: 'Right',
  place: 'right',
};
export const HintSuperToken = Template.bind({});

HintSuperToken.args = {
  hint: (
    <div>
      <Text size="L-Bold">Super Tokens are what you need to open a Subscription Stream.</Text>
      <Text size="L-Regular">The duration of Subscription Stream will last based on your Super Token balance. You can add more Super tokens by wrapping your ERC20 tokens below</Text>
    </div>
  ),
  id: 'HintSuperToken',
  place: 'bottom',
};
export const HintSubscriptionDuration = Template.bind({});
HintSubscriptionDuration.args = {
  hint: (
    <div>
      <Text size="L-Regular">NOTE: Starting a subscription stream takes a security deposit worth</Text>
      <Text size="L-Bold">
        a minimum amount shown below.
        If you top up your Super Token balance
        or cancel your stream before your Super Token balance hits zero,
        your deposit is refunded to you.
      </Text>
      <Text size="L-Bold" color="#FE8F29">Otherwise, your deposit is lost.</Text>
    </div>
  ),
  id: 'HintSubscriptionDuration',
  place: 'bottom',
};
