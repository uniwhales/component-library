import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IdenticonComponent } from './Identicon';
import { MarkedIdenticon } from './MarkedIdenticon';
import { CrownStandard, DynamicList } from '../icons';
import { Styled, SvgGradients, Theme } from '../../theme';
import { SelectableMarkedIdenticon } from './SelectMarkedIdenticon';
import { Text } from '../texts/text';
import { IdentMark } from './IdentMark';

export default {
  title: 'Atoms/Identicon',
  component: IdenticonComponent,
  argTypes: {},
} as ComponentMeta<typeof IdenticonComponent>;
const WalletWrapper = Styled.div<{ $isMintersTab?: boolean }>`
  padding: 8px 16px;
  display: flex;
  cursor: pointer;
  border-radius: 12px;
  align-items: center;
  gap: 8px;
  width: ${({ $isMintersTab }) => ($isMintersTab ? '840px' : '100%')};
  box-sizing: border-box;
  :hover {
    p {
      color: ${(props) => props.theme.textShades.SHADE_MINUS_3};
    }
    background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
  }
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  :nth-child(2n) {
    :hover {
      background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_1};
    }
    background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  }
`;
const Template: ComponentStory<typeof IdenticonComponent> = (props) => (
  <IdenticonComponent {...props} />
);
const MarkTemplate: ComponentStory<typeof MarkedIdenticon> = (props) => (
  <MarkedIdenticon {...props} />
);
const IdentMarkTemplate: ComponentStory<typeof IdentMark> = (props) => (
  <IdentMark {...props} />
);
const SelectableMarkTemplate: ComponentStory<typeof SelectableMarkedIdenticon> = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <WalletWrapper>

      <SelectableMarkedIdenticon
        {...props}
        checkbox={{
          // eslint-disable-next-line
          ...props.checkbox,
          selected: checked,
          onClick: () => setChecked(!checked),
        }}
      />
    </WalletWrapper>
  );
};
export const Primary = Template.bind({});
export const NoInteraction = Template.bind({});
export const WithTealMarkBig = MarkTemplate.bind({});
export const WithCanaryMarkSmall = MarkTemplate.bind({});
export const WithSelectableCanaryMarkSmall = SelectableMarkTemplate.bind({});
export const JustMarkIcon = IdentMarkTemplate.bind({});

Primary.args = {
  id: 'someRandomString',
  size: 'big',
  hasInteraction: true,
  onClick: () => console.log('Clicked'),
};

NoInteraction.args = {
  id: 'someRandomString',
  hasInteraction: false,
  size: 'big',
};

WithTealMarkBig.args = {
  size: 'big',
  identicon: {
    id: 'someRandomString',
    hasInteraction: true,
    href: 'https://staging.app.cielo.finance/',
    target: 'blank',
    onClick: () => {
      console.debug('click');
    },
  },
  markIcon: {
    gradient: SvgGradients.TEAL,
    icon: <CrownStandard />,
  },
  onMouseEnter: () => {
    console.debug('preload called');
  },
};

WithSelectableCanaryMarkSmall.args = {
  text: <Text size="S-Regular" color={Theme.textShades.SHADE_MINUS_2}>Label of a wallet</Text>,
  checkbox: {
    disabled: false,
    selected: false,
    onClick: () => { console.debug('click select'); },
  },
  markedIdenticon: {
    size: 'big',
    markIcon: {
      gradient: SvgGradients.CANARY,
      icon: <DynamicList />,
    },
    identicon: {
      id: 'someRandomString',
      hasInteraction: true,
      href: 'https://staging.app.cielo.finance/',
      target: 'blank',
      onClick: () => {
        console.debug('click');
      },
    },
    onMouseEnter: () => {
      console.debug('preload called');
    },
  },

};

JustMarkIcon.args = {
  icon: {
    icon: <CrownStandard />,
  },
  size: 'big',
};
