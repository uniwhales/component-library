import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';
import { ShortText } from './shortText';
import { ShortTextProps, TextPropsBase } from './types';

const meta: Meta<typeof ShortText> = {
  component: ShortText,
};

export default meta;
type Story = StoryObj<typeof ShortText>;

const Wrapper = styled.div`
  width: 200px;
  margin: 50px 0;
`;

const Template = (args: React.JSX.IntrinsicAttributes & TextPropsBase & ShortTextProps) => (
  <Wrapper>
    <ShortText {...args} />
  </Wrapper>
);

export const Primary: Story = {
  render: (args) => <Template {...args} />,
};
export const LongerLimit: Story = {
  render: (args) => <Template {...args} />,
};
export const Href: Story = {
  render: (args) => <Template {...args} />,
};

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
