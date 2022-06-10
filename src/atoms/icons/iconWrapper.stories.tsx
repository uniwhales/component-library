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
  OxColor, OneInchV3, OneInchV4,
  DashedSpinner,
  Meatball,
  Kebab,
  Identicon,
} from '.';
import { OverlappedIcon } from './placeholder/OverlappedIcon';
import { StarIcon } from './placeholder/StarIcon';

export default {
  title: 'Atoms/Icons',
  component: IconWrapper,
  argTypes: {
  },
} as ComponentMeta<typeof IconWrapper>;

const Template: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Arrow Down" icon={<ArrowDownIcon />} />
    <IconWrapper name="Arrow Up" icon={<ArrowUpIcon />} />
    <IconWrapper name="Arrow Left" icon={<ArrowLeftIcon />} />
    <IconWrapper name="Arrow Right" icon={<ArrowRightIcon />} />
    <IconWrapper name="Arrow Right Square" icon={<ArrowRightSquareIcon />} />
    <IconWrapper name="Arrow Left Square" icon={<ArrowLeftSquareIcon />} />
    <IconWrapper name="Chevron Down" icon={<ChevronDownIcon />} />
    <IconWrapper name="Chevron Up" icon={<ChevronUpIcon />} />
    <IconWrapper name="Chevron Left" icon={<ChevronLeftIcon />} />
    <IconWrapper name="ChevronRight" icon={<ChevronRightIcon />} />
    <IconWrapper name="Cross" icon={<CrossIcon />} />
    <IconWrapper name="Link" icon={<LinkIcon />} />
    <IconWrapper name="Notice" icon={<NoticeIcon />} />
    <IconWrapper name="Refresh" icon={<RefreshIcon />} />
  </>
);
const Template2: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Ethereum" icon={<Ethereum />} />
    <IconWrapper name="Polygon" icon={<Polygon />} />
    <IconWrapper name="Fantom" icon={<Fantom />} />
    <IconWrapper name="Arbitrum" icon={<Arbitrum />} />
    <IconWrapper name="Avalanche" icon={<Avalanche />} />
    <IconWrapper name="Optimism" icon={<Optimism />} />
    <IconWrapper name="Binance" icon={<Binance />} />
    <IconWrapper name="Boba" icon={<Boba />} />
    <IconWrapper name="Aurora" icon={<Aurora />} />
    <IconWrapper name="Metis" icon={<Metis />} />
  </>
);
const Template3: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Aurora" icon={<AuroraColor />} />
    <IconWrapper name="UniswapV2" icon={<UniswapV2Color />} />
    <IconWrapper name="UniswapV3" icon={<UniswapV3Color />} />
    <IconWrapper name="OneInchV3" icon={<OneInchV3 />} />
    <IconWrapper name="OneInchV4" icon={<OneInchV4 />} />
    <IconWrapper name="Boba" icon={<BobaColor />} />
    <IconWrapper name="Cielo" icon={<CieloColor />} />
    <IconWrapper name="Arbitrum" icon={<ArbitrumColor />} />
    <IconWrapper name="Avalanche" icon={<AvalancheColor />} />
    <IconWrapper name="Binance" icon={<BinanceColor />} />
    <IconWrapper name="Curve" icon={<CurveColor />} />
    <IconWrapper name="Ethereum" icon={<EthereumColor />} />
    <IconWrapper name="Etherscan" icon={<EtherscanColor />} />
    <IconWrapper name="Fantom" icon={<FantomColor />} />
    <IconWrapper name="Harmony" icon={<HarmonyColor />} />
    <IconWrapper name="Metamask" icon={<MetaMaskColor />} />
    <IconWrapper name="Metis" icon={<MetisColor />} />
    <IconWrapper name="Near" icon={<NearColor />} />
    <IconWrapper name="Optimism" icon={<OptimismColor />} />
    <IconWrapper name="Polygon" icon={<PolygonColor />} />
    <IconWrapper name="Sushiswap" icon={<SushiswapColor />} />
    <IconWrapper name="Terra" icon={<TerraColor />} />
    <IconWrapper name="Wallet Connect" icon={<WalletConnectColor />} />
    <IconWrapper name="Uniwhales" icon={<UniWhalesColor />} />
    <IconWrapper name="0x" icon={<OxColor />} />
  </>
);

const Template4: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Weth" icon={<Weth />} />
    <IconWrapper name="Dai" icon={<Dai />} />
    <IconWrapper name="Doge" icon={<Doge />} />
    <IconWrapper name="USDC" icon={<Usdc />} />
    <IconWrapper name="USDT" icon={<Usdt />} />

  </>
);

const Template5: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Modal Icon" icon={<DashedSpinner />} />
    <IconWrapper name="Meatball Icon" icon={<Meatball />} cursor="pointer" />
    <IconWrapper name="Kebab Icon" icon={<Kebab />} cursor="pointer" />
    <IconWrapper name="Overlapped Icon" icon={<OverlappedIcon />} cursor="pointer" />
  </>
);

const Template6: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Star Icon" icon={<StarIcon />} />
    <IconWrapper name="Identicon" icon={<Identicon />} />
  </>
);

export const navigationIcons = Template.bind({});
export const chainsIcons = Template2.bind({});
export const chainsIconsColor = Template3.bind({});
export const tokens = Template4.bind({});
export const misc = Template5.bind({});
export const placeholder = Template6.bind({});

navigationIcons.parameters = {
  backgrounds: { default: 'dark' },
};
