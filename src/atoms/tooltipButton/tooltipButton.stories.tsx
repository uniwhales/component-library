import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TooltipButton } from './tooltipButton';
import { Wrapper } from './styles';

const meta: Meta<typeof TooltipButton> = {
  component: TooltipButton,
};

export default meta;
type Story = StoryObj<typeof TooltipButton>;

export const TooltipBtn: Story = {
  render: () => (
    <Wrapper>
      <TooltipButton
        position="left"
        content={(<div>Additional content, triggered on click</div>)}
      />
    </Wrapper>
  ),
};
