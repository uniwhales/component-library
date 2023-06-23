import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { styled } from 'styled-components';
import { ContentCard } from './contentCard';

import { ContentCardProps, ContentType } from './types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 420px;
`;
const meta: Meta<typeof ContentCard> = {
  component: ContentCard,
};

export default meta;
type Story = StoryObj<typeof ContentCard>;

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

const Template = (args: React.JSX.IntrinsicAttributes & ContentCardProps) => (
  <Wrapper>
    <ContentCard {...defaultValues} {...args} />
  </Wrapper>
);

export const ContentCardMAndLarge: Story = {
  render: (args) => <Template {...args} />,
};

export const ContentCardS: Story = {
  render: (args) => <Template {...args} />,
};

export const ContentCardSSingleLineTitle: Story = {
  render: (args) => <Template {...args} />,
};

ContentCardS.args = {
  size: 'S',
};

ContentCardSSingleLineTitle.args = {
  title: 'Title of Card on a one liner',
};
