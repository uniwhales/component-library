import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ShortText } from './shortText';
import { Styled } from '../../theme';

export default {
  title: 'Atoms/shortenText',
  component: ShortText,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof ShortText>;

const Wrapper = Styled.div`
  width: 200px;
  margin: 50px 0;
`;

const Template: ComponentStory<typeof ShortText> = (args) => (
  <Wrapper>
    <ShortText {...args} />
  </Wrapper>
);

export const Primary = Template.bind({});
export const LongerLimit = Template.bind({});
export const Href = Template.bind({});

Primary.args = {
  text: 'This is a very long text that will be shortened',
  size: '16-Regular',
};
LongerLimit.args = {
  text: 'This is a very long text that will be shortened',
  size: '16-Regular',
  chars: 8,
};
Href.args = {
  text: 'This is a very long text that will be shortened',
  size: '16-Regular',
  chars: 15,
  href: 'https://www.google.com',
  target: '_blank',
};
