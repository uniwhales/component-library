import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TokenPoolCard } from './tokenPoolCard';
import { Styled } from '../../theme';
import { fakePoolData } from './data';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default {
  title: 'Molecules/TokenPoolCard',
  component: TokenPoolCard,
  argTypes: {},
} as ComponentMeta<typeof TokenPoolCard>;

const Template: ComponentStory<typeof TokenPoolCard> = () => (
  <Wrapper>
    {fakePoolData.map((
      item,
      index,
    ) => <TokenPoolCard data={item} index={index + 1} />)}

  </Wrapper>

);

export const PrimaryTabsGroups = Template.bind({});
