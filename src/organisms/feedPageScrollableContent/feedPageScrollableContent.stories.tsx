import React, { useState, useRef, useEffect } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FeedPageScrollableContent } from './feedPageScrollableContent';
import { Text } from '../../atoms/texts/text';
import { HeaderWrapper, ItemWrapper, Wrapper } from './feedPageScrollableContent.styles';
import { groupTagOptions } from '../navbar/mockData';
import { Navbar } from '../navbar/navbar';
import { Select } from '../../atoms/inputs/select';
import { localTheme, Styled } from '../../theme';

export default {
  title: 'Organisms/FeedPageScrollableContent',
  component: FeedPageScrollableContent,
  argTypes: {},
} as ComponentMeta<typeof FeedPageScrollableContent>;

const FeedLeftSideChildren = Styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  gap: 24px;
  margin-left: 24px;
`;

const Template: ComponentStory<typeof FeedPageScrollableContent> = () => {
  const fakeData = Array.from(new Array(50), (val, index) => `some string ${index}`);
  const [data, setData] = useState(fakeData);
  const [updates, setUpdates] = useState<any>({ data: [], paging: {} });
  const [value, setValue] = useState<string | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);
  const [account, setAccount] = useState<string | null>(null);
  const theme = localTheme();

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
        <Navbar
          account={account}
          onBackButtonClick={() => {}}
          onWalletConnectClick={() => { handleSwitch(); }}
          pageName="Feed"
          plan="Whale"
          avatarUrl=""
          leftSideChildren={(
            <FeedLeftSideChildren>
              <Select
                options={groupTagOptions}
                placeholder="Select Group Tags"
                onChange={(e: any) => { setValue(e); }}
                value={value}
                isXL
                readOnly={false}
                isMulti={false}
              />
              <Text href="TODO-ADD-LINK" size="S-Regular" color={theme?.textShades.SHADE_MINUS_2}>
                <>
                  Following:
                  {' '}
                  {1000}
                </>
              </Text>
            </FeedLeftSideChildren>
         )}
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
