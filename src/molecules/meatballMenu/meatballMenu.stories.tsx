import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MeatballMenu } from './meatballMenu';
import { Wrapper } from './meatballMenu.styles';
import { Text } from '../../atoms/texts/text';

const meta: Meta<typeof MeatballMenu> = {
  component: MeatballMenu,
};

export default meta;
type Story = StoryObj<typeof MeatballMenu>;

const Template = () => {
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

export const Meatball: Story = {
  render: () => <Template />,
};

Meatball.parameters = {
  backgrounds: { default: 'dark' },
};
