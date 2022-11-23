import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IdenticonComponent } from './Identicon';
import { MarkedIdenticon } from './MarkedIdenticon';
import { CrownStandard, DynamicList } from '../icons';
import { SvgGradients } from '../../theme';

export default {
  title: 'Atoms/Identicon',
  component: IdenticonComponent,
  argTypes: {},
} as ComponentMeta<typeof IdenticonComponent>;

const Template: ComponentStory<typeof IdenticonComponent> = (props) => (
  <IdenticonComponent {...props} />
);
const MarkTemplate: ComponentStory<typeof MarkedIdenticon> = (props) => (
  <MarkedIdenticon {...props} />
);
export const Primary = Template.bind({});
export const NoInteraction = Template.bind({});
export const WithTealMarkBig = MarkTemplate.bind({});
export const WithCanaryMarkSmall = MarkTemplate.bind({});

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
  preload: () => {
    console.debug('preload called');
  },
};

WithCanaryMarkSmall.args = {
  size: 'small',
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
    gradient: SvgGradients.CANARY,
    icon: <DynamicList />,
  },
  preload: () => {
    console.debug('preload called');
  },
};
