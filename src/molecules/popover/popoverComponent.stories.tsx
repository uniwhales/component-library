import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PopoverComponent } from './PopoverComponent';
import { Text } from '../../atoms/texts/text';
import { ButtonAtom } from '../../atoms/buttons/button';

export default {
  title: 'Molecules/Popover',
  component: PopoverComponent,
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
} as ComponentMeta<typeof PopoverComponent>;

const Template: ComponentStory<typeof PopoverComponent> = () => (
  <PopoverComponent
    target={(
      <div style={{ width: 'fit-content', margin: 50 }}>
        <ButtonAtom
          buttonVariant="primary"
          onClick={() => {}}
        >
          Toggle Popover
        </ButtonAtom>
      </div>
)}
    content={(
      <div>
        <Text size="S-Regular">Popover content</Text>
        <ButtonAtom buttonVariant="secondary" onClick={() => console.log('clicked')}>click me</ButtonAtom>
      </div>
)}
  />
);

const Template2: ComponentStory<typeof PopoverComponent> = () => {
  const [open, setOpen] = useState(false);
  return (
    <PopoverComponent
      opened={open}
      target={(
        <div
          onMouseEnter={() => setOpen(false)}
          onMouseLeave={() => setOpen(false)}
          style={{ width: 'fit-content', margin: 50 }}
        >
          <ButtonAtom
            buttonVariant="primary"
            onClick={() => {}}
          >
            Hover Popover
          </ButtonAtom>
        </div>
)}
      content={(
        <div>
          <Text size="S-Regular">Popover content</Text>
          <ButtonAtom buttonVariant="secondary" onClick={() => console.log('clicked')}>click me</ButtonAtom>
        </div>
)}
    />
  );
};

export const PopoverOnClick = Template.bind({});
export const PopoverOnHover = Template2.bind({});
