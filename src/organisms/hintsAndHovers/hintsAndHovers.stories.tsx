import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HintsAndHovers } from './hintsAndHovers';
import { Styled } from '../../theme';
import { Arbitrum } from '../../atoms/icons';

export default {
  title: 'Organisms/HintsAndHovers',
  component: HintsAndHovers,
  argTypes: {
  },
} as ComponentMeta<typeof HintsAndHovers>;

const Wrapper = Styled.div`
  margin-left: 400px;
  margin-top: 100px;
`;

const Template: ComponentStory<typeof HintsAndHovers> = (
  args,
) => <Wrapper><HintsAndHovers {...args} /></Wrapper>;
export const Primary = Template.bind({});

Primary.args = {
  hint: 'test',
  id: 'primary',
};

export const Clickable = Template.bind({});

Clickable.args = {
  hint: 'clickable',
  id: 'clickable',
  event: 'click',
};

export const CustomIcon = Template.bind({});

CustomIcon.args = {
  hint: 'Custom Icon',
  id: 'customIcon',
  icon: <Arbitrum />,
};

export const Top = Template.bind({});

Top.args = {
  hint: 'Large text area',
  id: 'top',
  place: 'top',
};
export const Bottom = Template.bind({});

Bottom.args = {
  hint: 'Large text area',
  id: 'bottom',
  place: 'bottom',
};
export const Left = Template.bind({});

Left.args = {
  hint: 'Large text area',
  id: 'left',
  place: 'left',
};
export const Right = Template.bind({});

Right.args = {
  hint: <div>Large text area</div>,
  id: 'Right',
  place: 'right',
};
export const HintSuperToken = Template.bind({});

HintSuperToken.args = {
  hint: (
    <div>
      <div style={{ fontWeight: 'bold' }}>Super Tokens are what you need to open a Subscription Stream.</div>
      <div>
        The duration of Subscription Stream will last based on your Super Token balance.
        You can add more Super tokens by wrapping your ERC20 tokens below
      </div>
    </div>
  ),
  id: 'HintSuperToken',
  place: 'bottom',
};
export const HintSubscriptionDuration = Template.bind({});
HintSubscriptionDuration.args = {
  hint: (
    <div>
      <div>NOTE: Starting a subscription stream takes a security deposit worth</div>
      <div>
        a minimum amount shown below.
        If you top up your Super Token balance
        or cancel your stream before your Super Token balance hits zero,
        your deposit is refunded to you.
      </div>
      <div>Otherwise, your deposit is lost.</div>
    </div>
  ),
  id: 'HintSubscriptionDuration',
  place: 'bottom',
};
