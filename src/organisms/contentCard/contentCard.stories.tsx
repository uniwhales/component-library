import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ContentCard } from './contentCard';
import { Styled } from '../../theme';
import { ContentType } from './types';

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export default {
  title: 'Organisms/ContentCard',
  component: ContentCard,
  argTypes: {},
} as ComponentMeta<typeof ContentCard>;

const defaultValues = {
  contentType: ContentType.Article,
  coverImgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  onClick: () => {},
  releaseDate: 'Nov 31st, 2021',
  tags: ['LP', 'DEFI', 'metaverse'],
  title: 'Title of Card on a one liner and Title of Card on a two liner only',
  chipText: 'Text',
  duration: '00:10:20',
  guest: 'Elon Musk',
  guestLink: 'https://twitter.com/elonmusk',
  size: 'LnM',
};

const Template: ComponentStory<typeof ContentCard> = (args) => (
  <Wrapper>
    <ContentCard {...defaultValues} {...args} />
  </Wrapper>
);

export const ContentCardMAndLarge = Template.bind({});
export const ContentCardS = Template.bind({});
ContentCardS.args = {
  size: 'S',
};
