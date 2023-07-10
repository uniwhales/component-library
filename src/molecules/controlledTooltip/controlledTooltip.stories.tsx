import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../atoms/texts/text';
import { ButtonAtom } from '../../atoms/buttons/button';
import { ControlledTooltipComponent } from './controlledTooltip';
import { Content, Target, Wrapper } from './styles';

const meta: Meta<typeof ControlledTooltipComponent> = {
  component: ControlledTooltipComponent,
};

export default meta;
type Story = StoryObj<typeof ControlledTooltipComponent>;

const Template = () => {
  const target = (
    <Target>
      <Text size={['14-Regular']} textColor="BG_SHADE_PLUS_4">Click to see tooltip</Text>
    </Target>
  );
  const content = (
    <Content>
      <Text size={['14-Regular']}>Each bar represents an onchain\n transaction. Cielo applies labels to\naid your understanding.</Text>
      <ButtonAtom $buttonVariant="secondary" onClick={() => console.log('clicked')}>click me</ButtonAtom>
    </Content>
  );

  return (
    <Wrapper>
      <ControlledTooltipComponent
        target={target}
        content={content}
      />
    </Wrapper>
  );
};

export const ControlledTooltip: Story = {
  render: () => <Template />,
};
