import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TooltipButton } from './tooltipButton';
import { Wrapper } from './styles';

export default {
  title: 'Atoms/TooltipButton',
  component: TooltipButton,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    buttonVariant: {
      control: {
        type: null,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof TooltipButton>;

const Template: ComponentStory<typeof TooltipButton> = () => (
  <Wrapper>
    <TooltipButton
      content={(<div>hello</div>)}
    />
  </Wrapper>
);

export const TooltipBtn = Template.bind({});
