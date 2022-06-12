import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sidebar } from './sidebar';
import { Plans, SidebarItemID, sidebarItems } from './mockData';
import { HasAccessGuard } from '../../atoms/navigationTab/types';

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  argTypes: {
    type: {
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Sidebar>;

const hasAccessGuard: HasAccessGuard = () => true;

const Template: ComponentStory<typeof Sidebar> = () => {
  const [expanded, setExpanded] = useState(true);
  const [selectedTab, setSelectedTab] = useState(SidebarItemID.Newsdesk);
  const account = '123';

  return (
    <Sidebar
      account={account}
      defaultSelectedTab={SidebarItemID.Newsdesk}
      expanded={expanded}
      setExpanded={setExpanded}
      hasAccessGuard={hasAccessGuard}
      onLogoClick={() => {}}
      version="1.8.0"
      plan={Plans.FREE}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      items={sidebarItems}
      id={SidebarItemID.Newsdesk}
      onClick={() => setExpanded(!expanded)}
      twitterLink="https://t.me/uniwhales"
      telegramLink="https://t.me/uniwhales"
      webappLink="https://www.uniwhales.io"
      onGetUwlClick={() => {
        window.open('https://info.uniswap.org/#/pools/0x6a61cd16ec0c73b3855beecc4c378dcbdb63f88e', '_self');
      }}
    />
  );
};

export const SidebarStandard = Template.bind({});

SidebarStandard.parameters = {
  backgrounds: { default: 'dark' },
};
