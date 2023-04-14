import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
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
} as ComponentMeta<typeof ControlledTooltipComponent>;

const Template: ComponentStory<typeof ControlledTooltipComponent> = () => {
  const target = (
    <Target>
      <Text size="14-Regular" color="#F8F9FF">Click to see tooltip</Text>
    </Target>
  );
  const content = (
    <Content>
      <Text size="14-Regular">Tooltip target</Text>
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
