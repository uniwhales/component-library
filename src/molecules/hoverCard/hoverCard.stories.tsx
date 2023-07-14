import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../atoms/texts/text';
import { ButtonAtom } from '../../atoms/buttons/button';
import { HoverCardComponent } from './hoverCard';

const meta: Meta<typeof HoverCardComponent> = {
  component: HoverCardComponent,
};

export default meta;
type Story = StoryObj<typeof HoverCardComponent>;

const Template = () => {
  const content = (
    <div>
      <Text size={['14-Regular']}>hover Card content</Text>
      <ButtonAtom buttonVariant="secondary" onClick={() => console.log('clicked')}>click me</ButtonAtom>
    </div>
  );

  return (
    <div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => (
        <HoverCardComponent
          key={i}
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
          content={content}
        />
      ))}
    </div>
  );
};

export const HoverCard: Story = {
  render: () => <Template />,
};
