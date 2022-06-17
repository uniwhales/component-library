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

const Template: ComponentStory<typeof ContentCard> = ({
  releaseDate, contentType, size, coverImgUrl, tags, duration, title, chipText, guestLink, guest,
}) => (
  <Wrapper>
    <ContentCard
      contentType={contentType || ContentType.Article}
      coverImgUrl={coverImgUrl || 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}
      onClick={() => {}}
      releaseDate={releaseDate || 'Nov 31st, 2021'}
      tags={tags || ['Text', 'Text', 'Text']}
      title={title || 'Title of Card on a one liner and Title of Card on a two liner only'}
      chipText={chipText || 'Text'}
      duration={duration || '00:10:20'}
      guest={guest || 'Elon Musk'}
      guestLink={guestLink || 'https://twitter.com/elonmusk'}
      size={size || 'LnM'}
    />
  </Wrapper>
);

export const ContentCardMAndLarge = Template.bind({});
export const ContentCardS = Template.bind({});
ContentCardS.args = {
  size: 'S',
};
