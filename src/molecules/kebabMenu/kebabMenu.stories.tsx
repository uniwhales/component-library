import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { KebabMenu } from './kebabMenu';
import { Wrapper } from './kebabMenu.styles';
import { Text } from '../../atoms/texts/text';

export default {
  title: 'Molecules/FeedPageKebab',
  component: KebabMenu,
  argTypes: {
    type: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof KebabMenu>;

const Template: ComponentStory<typeof KebabMenu> = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Wrapper>
      <KebabMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        items={[
          {
            key: 'key1',
            content: <Text size="S-Regular">some text</Text>,
          },
          {
            key: 'key2',
            content: <Text size="S-Regular">more text</Text>,
          },
          {
            key: 'key3',
            content: <Text size="S-Regular">even more text</Text>,
          },
        ]}
      />
    </Wrapper>
  );
};

export const Kebab = Template.bind({});

Kebab.parameters = {
  backgrounds: { default: 'dark' },
};
