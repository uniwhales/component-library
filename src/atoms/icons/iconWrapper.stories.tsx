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
  Binance,
  Boba,
  Aurora,
  Metis,
  AuroraColor,
  UniswapV2Color,
  UniswapV3Color,
  BobaColor,
  CieloColor,
  ArbitrumColor,
  AvalancheColor,
  BinanceColor,
  CurveColor,
  EthereumColor,
  EtherscanColor,
  FantomColor,
  HarmonyColor,
  MetaMaskColor,
  MetisColor,
  NearColor,
  OptimismColor,
  PolygonColor,
  SushiswapColor,
  TerraColor,
  WalletConnectColor,
  UniWhalesColor,
  Dai,
  Doge,
  Usdc,
  Usdt,
  Weth,
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
    <IconWrapper icon={<Binance />} />
    <IconWrapper icon={<Boba />} />
    <IconWrapper icon={<Aurora />} />
    <IconWrapper icon={<Metis />} />
  </>
);
const Template3: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper icon={<AuroraColor />} />
    <IconWrapper icon={<UniswapV2Color />} />
    <IconWrapper icon={<UniswapV3Color />} />
    <IconWrapper icon={<BobaColor />} />
    <IconWrapper icon={<CieloColor />} />
    <IconWrapper icon={<ArbitrumColor />} />
    <IconWrapper icon={<AvalancheColor />} />
    <IconWrapper icon={<BinanceColor />} />
    <IconWrapper icon={<CurveColor />} />
    <IconWrapper icon={<EthereumColor />} />
    <IconWrapper icon={<EtherscanColor />} />
    <IconWrapper icon={<FantomColor />} />
    <IconWrapper icon={<HarmonyColor />} />
    <IconWrapper icon={<MetaMaskColor />} />
    <IconWrapper icon={<MetisColor />} />
    <IconWrapper icon={<NearColor />} />
    <IconWrapper icon={<OptimismColor />} />
    <IconWrapper icon={<PolygonColor />} />
    <IconWrapper icon={<SushiswapColor />} />
    <IconWrapper icon={<TerraColor />} />
    <IconWrapper icon={<WalletConnectColor />} />
    <IconWrapper icon={<UniWhalesColor />} />
  </>
);

const Template4: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper icon={<Weth />} />
    <IconWrapper icon={<Dai />} />
    <IconWrapper icon={<Doge />} />
    <IconWrapper icon={<Usdc />} />
    <IconWrapper icon={<Usdt />} />

  </>
);
export const navigationIcons = Template.bind({});
export const chainsIcons = Template2.bind({});
export const chainsIconsColor = Template3.bind({});
export const tokens = Template4.bind({});

navigationIcons.parameters = {
  backgrounds: { default: 'dark' },
};
