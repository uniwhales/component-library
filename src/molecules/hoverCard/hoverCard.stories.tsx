import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../atoms/texts/text';
import { ButtonAtom } from '../../atoms/buttons/button';
import { HoverCardComponent } from './hoverCard';

export default {
  title: 'Molecules/HoverCard',
  component: HoverCardComponent,
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
} as ComponentMeta<typeof HoverCardComponent>;

const Template: ComponentStory<typeof HoverCardComponent> = () => (
  <HoverCardComponent
    target={(
      <div style={{ width: 'fit-content', margin: 50 }}>
        <ButtonAtom
          buttonVariant="primary"
          onClick={() => {}}
        >
          Hover over
        </ButtonAtom>
      </div>
)}
    content={(
      <div>
        <Text size="S-Regular">hover Card content</Text>
        <ButtonAtom buttonVariant="secondary" onClick={() => console.log('clicked')}>click me</ButtonAtom>
      </div>
)}
  />
);

export const HoverCard = Template.bind({});
