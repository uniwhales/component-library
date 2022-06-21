import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedPageScrollableContent } from './feedPageScrollableContent';
import { Text } from '../../atoms/texts/text';
import { ItemWrapper, Wrapper, LoadMoreContainer } from './feedPageScrollableContent.styles';
import { groupTagOptions } from '../feedPageNavBar/mockData';
import { FeedPageNavBar } from '../feedPageNavBar/feedPageNavBar';
import { PlusStandard } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';

export default {
  title: 'Organisms/FeedPageScrollableContent',
  component: FeedPageScrollableContent,
  argTypes: {},
} as ComponentMeta<typeof FeedPageScrollableContent>;

const Template: ComponentStory<typeof FeedPageScrollableContent> = () => {
  const [updates, setUpdates] = useState<undefined | any[]>(undefined);
  const [value, setValue] = useState<string | undefined>(undefined);
  const [account, setAccount] = useState<string | null>(null);

  const handleSwitch = () => {
    if (account) {
      setAccount(null);
    } else {
      setAccount('0x32c2FE388ABbB3e678D44DF6a0471086D705316a');
    }
  };

  const data = Array.from(new Array(50), (val, index) => `some string ${index}`);

  return (
    <Wrapper>
      <FeedPageNavBar
        label="Alert Feed"
        selectValue={value}
        selectOnChange={() => setValue(value)}
        account={account}
        onConnectClick={handleSwitch}
        plan="Whale"
        following={1000}
        selectPlaceholder="Select Group Tags"
        selectOptions={groupTagOptions}
      />
      <FeedPageScrollableContent
        newUpdates={updates && updates}
        onShowNew={() => setUpdates(undefined)}
      >
        <div style={{ width: 1440 }}>
          {!updates && (
            <LoadMoreContainer onClick={() => setUpdates(['foo', 'bar', 'baz'])}>
              <IconWrapper
                cursor="pointer"
                height="16px"
                width="16px"
                icon={<PlusStandard />}
              />
              <Text size="S-Regular">Load More</Text>
            </LoadMoreContainer>
          )}
          {data.map((someString) => (
            <ItemWrapper key={someString}>
              <Text size="M-Regular">{someString}</Text>
            </ItemWrapper>
          ))}
        </div>
      </FeedPageScrollableContent>
    </Wrapper>
  );
};
export const Primary = Template.bind({});

Primary.parameters = {
  backgrounds: { default: 'dark' },
};
