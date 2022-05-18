import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TxTableItem } from './txTableList';
import { Styled } from '../../theme';
import { mockData } from './data';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default {
  title: 'Molecules/TxListItem',
  component: TxTableItem,
  argTypes: {},
} as ComponentMeta<typeof TxTableItem>;

const Template: ComponentStory<typeof TxTableItem> = () => (
  <Wrapper>
    <TxTableItem
      wsData={mockData as any}
    />
  </Wrapper>

);

export const PrimaryTabsGroups = Template.bind({});
