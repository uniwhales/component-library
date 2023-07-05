import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { styled } from 'styled-components';

import { BrochureLayout } from './brochureLayout.styles';

export default {
  title: 'Layouts/Brochure',
  component: BrochureLayout,
  argTypes: {
  },
} as Meta<typeof BrochureLayout>;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
`;

const TopBar = styled.div`
  background-color: blue;
`;

const Content = styled.div`
  background-color: red;
  width: 100%;
  height: 1024px;
`;

const Template: StoryFn<typeof BrochureLayout> = (args) => (
  <Wrapper>
    <BrochureLayout {...args}>
      <TopBar />
      <Content />
    </BrochureLayout>
  </Wrapper>
);
export const Brochure = Template.bind({});

Brochure.parameters = {
  backgrounds: { default: 'dark' },
};
