import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';
import { ToolingLayoutOne } from './toolingLayout.styles';

const meta: Meta<typeof ToolingLayoutOne> = {
  component: ToolingLayoutOne,
};

export default meta;
type Story = StoryObj<typeof ToolingLayoutOne>;

const Wrapper = styled.div`
    width: 100%;
`;

const RHSBar = styled.div`
    width: 100%;
    height: 100vh;
    background-color: blue;
`;

const Content = styled.div`
    width: 100%;
    height: 100vh;
    background-color: red;
`;
export const Tooling: Story = {
  render: () => (
    <Wrapper>
      <ToolingLayoutOne>
        <Content />
        <RHSBar />
      </ToolingLayoutOne>
    </Wrapper>
  ),
};

Tooling.parameters = {
  backgrounds: { default: 'dark' },
};
