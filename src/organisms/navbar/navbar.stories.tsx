import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Styled } from '../../theme';
import { Navbar } from './navbar';
import { Text } from '../../atoms/texts/text';
import { Checkbox } from '../../atoms/inputs/checkbox';
import { Input } from '../../atoms/inputs/input';
import { StarIcon } from '../../atoms/icons';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
  argTypes: {
  },
} as ComponentMeta<typeof Navbar>;

const Wrapper = Styled.div`
`;

const Dummy = Styled.div`
  width: 100%;
  height: 400px;
  background-color: rgb(0, 0 ,0, 0.5);
`;

const Template: ComponentStory<typeof Navbar> = (
  args,
) => {
  const [account, setAccount] = useState<undefined | null | string>(null);
  const handleSwitch = () => {
    if (account) {
      setAccount(null);
    } else {
      setAccount('0x32c2FE388ABbB3e678D44DF6a0471086D705316a');
    }
  };
  return (
    <Wrapper>
      <Navbar
        {...args}
        account={account}
        onWalletConnectClick={() => handleSwitch()}
      />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
      <Dummy />
    </Wrapper>
  );
};
export const Newsdesk = Template.bind({});
export const CustomColor = Template.bind({});
export const FeedPage = Template.bind({});
export const CollectionPage = Template.bind({});

const FeedLeftSideChildren = Styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  gap: 8px;
  margin-left: 10px;
`;

Newsdesk.args = {
  pageName: 'Newsdesk',
  plan: 'Whale',
};
FeedPage.args = {
  pageName: 'Feed',
  plan: 'Pro',
  onBackButtonClick: () => console.debug('Click back'),
  leftSideChildren: (
    <FeedLeftSideChildren>
      <Input
        icon={<StarIcon />}
        inputState={{ message: '', status: 'default' }}
        onChange={(e) => console.log(e)}
        type="text"
      />
      <Text href="TODO-ADD-LINK" size="S-Regular">
        <>
          Following:
          {' '}
          {1000}
        </>
      </Text>
    </FeedLeftSideChildren>
  ),
  rightSideChildren:
  <Checkbox
    disabled={false}
    onClick={() => {}}
    selected
    size="small"
  />,
};

CollectionPage.args = {
  pageName: '',
  bgColor: false,
};

CustomColor.args = {
  bgColor: 'red',
};
