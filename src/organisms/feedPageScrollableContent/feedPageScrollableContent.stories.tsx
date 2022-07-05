import React, { useState, useRef, useEffect } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedPageScrollableContent } from './feedPageScrollableContent';
import { Text } from '../../atoms/texts/text';
import { HeaderWrapper, ItemWrapper, Wrapper } from './feedPageScrollableContent.styles';
import { groupTagOptions } from '../feedPageNavBar/mockData';
import { FeedPageNavBar } from '../feedPageNavBar/feedPageNavBar';

export default {
  title: 'Organisms/FeedPageScrollableContent',
  component: FeedPageScrollableContent,
  argTypes: {},
} as ComponentMeta<typeof FeedPageScrollableContent>;

const Template: ComponentStory<typeof FeedPageScrollableContent> = () => {
  const fakeData = Array.from(new Array(50), (val, index) => `some string ${index}`);
  const [data, setData] = useState(fakeData);
  const [updates, setUpdates] = useState<any>({ data: [], paging: {} });
  const [value, setValue] = useState<string | undefined>(undefined);
  const [account, setAccount] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleSwitch = () => {
    if (account) {
      setAccount(null);
    } else {
      setAccount('0x32c2FE388ABbB3e678D44DF6a0471086D705316a');
    }
  };

  const showNew = () => {
    setData([updates.data, ...data]);
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setUpdates({ data: ['test'], paging: {} });
    }, 1800);
  }, []);

  return (
    <Wrapper>
      <HeaderWrapper>
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
      </HeaderWrapper>
      <FeedPageScrollableContent
        newUpdates={updates && updates}
        onShowNew={showNew}
      >
        <div ref={ref} style={{ width: 1440 }}>
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
