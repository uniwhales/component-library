import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IconWrapper } from './iconWrapper';
import {
  ArrowDownIcon, ArrowUpIcon,
  ArrowRightIcon,
  ArrowRightSquareIcon,
  ArrowLeftSquareIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CrossIcon,
  LinkIcon,
  NoticeIcon,
  RefreshIcon,
  Ethereum,
  Polygon,
  Fantom,
  Arbitrum,
  Avalanche,
  Optimism,
} from '.';

export default {
  title: 'Atoms/Icons',
  component: IconWrapper,
  argTypes: {
  },
} as ComponentMeta<typeof IconWrapper>;

const Template: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper icon={<ArrowDownIcon />} />
    <IconWrapper icon={<ArrowUpIcon />} />
    <IconWrapper icon={<ArrowLeftIcon />} />
    <IconWrapper icon={<ArrowRightIcon />} />
    <IconWrapper icon={<ArrowRightSquareIcon />} />
    <IconWrapper icon={<ArrowLeftSquareIcon />} />
    <IconWrapper icon={<ChevronDownIcon />} />
    <IconWrapper icon={<ChevronUpIcon />} />
    <IconWrapper icon={<ChevronLeftIcon />} />
    <IconWrapper icon={<ChevronRightIcon />} />
    <IconWrapper icon={<CrossIcon />} />
    <IconWrapper icon={<LinkIcon />} />
    <IconWrapper icon={<NoticeIcon />} />
    <IconWrapper icon={<RefreshIcon />} />
  </>
);
const Template2: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper icon={<Ethereum />} />
    <IconWrapper icon={<Polygon />} />
    <IconWrapper icon={<Fantom />} />
    <IconWrapper icon={<Arbitrum />} />
    <IconWrapper icon={<Avalanche />} />
    <IconWrapper icon={<Optimism />} />
  </>
);
export const navigationIcons = Template.bind({});
export const chainsIcons = Template2.bind({});

navigationIcons.parameters = {
  backgrounds: { default: 'dark' },
};
