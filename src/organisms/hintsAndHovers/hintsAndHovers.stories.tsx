import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HintsAndHovers } from './hintsAndHovers';
import { Styled } from '../../theme';

export default {
  title: 'Organisms/HintsAndHovers',
  component: HintsAndHovers,
  argTypes: {
  },
} as ComponentMeta<typeof HintsAndHovers>;

const Wrapper = Styled.div`
    position: absolute;
    margin: auto;
    width: 100px;
    height: 100px;
    background: red;

`

const Template: ComponentStory<typeof HintsAndHovers> = (args) => <Wrapper><HintsAndHovers {...args}/></Wrapper>;

export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
  id: "primary",
  hint: "testing hints and hovers"
};
