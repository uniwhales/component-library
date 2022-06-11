import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedPageScrollableContent } from './feedPageScrollableContent';
import { Text } from '../../atoms/texts/text';
import { ButtonAtom } from '../../atoms/buttons/button';

export default {
  title: 'Organisms/FeedPageScrollableContent',
  component: FeedPageScrollableContent,
  argTypes: {},
} as ComponentMeta<typeof FeedPageScrollableContent>;

const Template: ComponentStory<typeof FeedPageScrollableContent> = () => {
  const [updates, setUpdates] = useState<undefined | any[]>(undefined);

  return (
    <FeedPageScrollableContent
      newUpdates={updates && updates}
      onShowNew={() => setUpdates(undefined)}
    >
      <Text size="M-Bold">Content Here</Text>
      {!updates && (
        <ButtonAtom buttonVariant="primary" onClick={() => setUpdates(['foo', 'bar', 'baz'])}>
          <Text size="M-Regular">Show load more notifications</Text>
        </ButtonAtom>
      )}
    </FeedPageScrollableContent>
  );
};
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
