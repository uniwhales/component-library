import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Styled } from '../../theme';
import { BrochureLayout } from './brochureLayout.styles';

export default {
  title: 'Layouts/Brochure',
  component: BrochureLayout,
  argTypes: {
  },
} as ComponentMeta<typeof BrochureLayout>;

const Wrapper = Styled.div`
    width: 100%;
    height: 100vh;
`;

const TopBar = Styled.div`
  background-color: blue;
`;

const Content = Styled.div`
  background-color: red;
  width: 100%;
  height: 1024px;
`;

const Template: ComponentStory<typeof BrochureLayout> = (args) => (
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
