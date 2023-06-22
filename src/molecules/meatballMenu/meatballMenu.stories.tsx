import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MeatballMenu } from './meatballMenu';
import { Wrapper } from './meatballMenu.styles';
import { Text } from '../../atoms/texts/text';

export default {
  title: 'Molecules/MeatballMenu',
  component: MeatballMenu,
  argTypes: {
    type: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof MeatballMenu>;

const Template: StoryFn<typeof MeatballMenu> = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Wrapper>
      <MeatballMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        items={[
          {
            key: 'key1',
            content: <Text size="14-Regular">some text</Text>,
          },
          {
            key: 'key2',
            content: <Text size="14-Regular">more text</Text>,
          },
          {
            key: 'key3',
            content: <Text size="14-Regular">even more text</Text>,
          },
        ]}
      />
    </Wrapper>
  );
};

export const Meatball = Template.bind({});

Meatball.parameters = {
  backgrounds: { default: 'dark' },
};
