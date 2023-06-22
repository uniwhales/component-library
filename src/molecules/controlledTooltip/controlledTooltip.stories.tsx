import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Text } from '../../atoms/texts/text';
import { ButtonAtom } from '../../atoms/buttons/button';
import { ControlledTooltipComponent } from './controlledTooltip';
import { Content, Target, Wrapper } from './styles';

export default {
  title: 'Molecules/ControlledTooltip',
  component: ControlledTooltipComponent,
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    type: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof ControlledTooltipComponent>;

const Template: StoryFn<typeof ControlledTooltipComponent> = () => {
  const target = (
    <Target>
      <Text size="14-Regular" color="#F8F9FF">Click to see tooltip</Text>
    </Target>
  );
  const content = (
    <Content>
      <Text size="14-Regular">Each bar represents an onchain\n transaction. Cielo applies labels to\naid your understanding.</Text>
      <ButtonAtom buttonVariant="secondary" onClick={() => console.log('clicked')}>click me</ButtonAtom>
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

export const ControlledTooltip = Template.bind({});
