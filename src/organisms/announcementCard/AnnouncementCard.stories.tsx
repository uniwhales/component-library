import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AnnouncementCard } from './AnnouncementCard';
import { Styled } from '../../theme';

export default {
  title: 'Organisms/AnnouncementCard',
  component: AnnouncementCard,
  argTypes: {
  },
} as ComponentMeta<typeof AnnouncementCard>;

const Wrapper = Styled.div`
  margin-left: 400px;
  margin-top: 100px;
`;

const Template: ComponentStory<typeof AnnouncementCard> = (
  args,
) => <Wrapper><AnnouncementCard {...args} /></Wrapper>;
export const Regular = Template.bind({});

Regular.args = {
  coverUrl: 'https://d1yaedilx42rkd.cloudfront.net/media/2022/06/03/june.jpg',
  releaseDate: 'Aug 31st, 2021',
  title: 'Over 10,000 EVM Tracker Users',
  width: '344px',
  purifiedContent: `
  💸 EVM Tracker (Wallet Alerts) surpasses 10K users
  🔵 EVMOS support is live on EVM Tracker
  ⛓️ Tracking 11 chains
  🌉 Group mode enabled. 1 click add for to any Telegram group. Great for NFT friends, funds, and influencers who want to share the wallet alerts with their audience
  
  🎁 NEAR bot launching very soon
  🟢#BUIDL  
  `,
};
export const NoMaxWidth = Template.bind({});

NoMaxWidth.args = {
  coverUrl: 'https://d1yaedilx42rkd.cloudfront.net/media/2022/06/03/june.jpg',
  releaseDate: 'Aug 31st, 2021',
  title: 'Over 10,000 EVM Tracker Users',
  purifiedContent: `
  💸 EVM Tracker (Wallet Alerts) surpasses 10K users
  🔵 EVMOS support is live on EVM Tracker
  ⛓️ Tracking 11 chains
  🌉 Group mode enabled. 1 click add for to any Telegram group. Great for NFT friends, funds, and influencers who want to share the wallet alerts with their audience
  
  🎁 NEAR bot launching very soon
  🟢#BUIDL  
  `,
};
