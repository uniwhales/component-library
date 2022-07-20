import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToolingLayoutOne } from './toolingLayout.styles';
import { Styled } from '../../theme';

export default {
  title: 'Layouts/Tooling',
  component: ToolingLayoutOne,
  argTypes: {
  },
} as ComponentMeta<typeof ToolingLayoutOne>;

const Wrapper = Styled.div`
    width: 100%;
`;

const RHSBar = Styled.div`
    width: 100%;
    height: 100vh;
    background-color: blue;
`;

const Content = Styled.div`
    width: 100%;
    height: 100vh;
    background-color: red;
`;

const Template: ComponentStory<typeof ToolingLayoutOne> = (args) => (
  <Wrapper>
    <ToolingLayoutOne {...args}>
      <Content />
      <RHSBar />
    </ToolingLayoutOne>
  </Wrapper>
);
export const Tooling = Template.bind({});

Tooling.parameters = {
  backgrounds: { default: 'dark' },
};
