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
  AlertBotStandard,
  AllIcon,
  AllStandard,
  ArticleStandard,
  AudioStandard,
  ChartStandard,
  CoinStandard,
  CommentStandard,
  CopyStandard,
  CSVDocStandard,
  DashboardStandard,
  DeleteStandard,
  DownloadStandard,
  EditStandard,
  GlobeStandard,
  HeartStandard,
  ImageIcon,
  InfoStandard,
  MediaStandard,
  MinusStandard,
  MoreCircleStandard,
  NewsStandard,
  NotificationStandard,
  PlusStandard,
  RocketStandard,
  SearchStandard,
  SendStandard,
  SettingsStandard,
  SubscribeStandard,
  SwapStandard,
  TckSquareStandard,
  TelegramStandard,
  TimeStandard,
  TwitterStandard,
  WalletStandard,
  WebinarStandard,
  WrapStandard,
  AlertBotColor,
  ArticleColor,
  AudioColor,
  ChartColor,
  Check,
  CoinColor,
  CommentColor,
  CopyColor,
  DashboardColor,
  DeleteColor,
  DocColor,
  EditColor,
  GlobeColor,
  HeartColor,
  InfoColor,
  MediaColor,
  MoreCircleColor,
  NewsColor,
  NotificationColor,
  Plus1Color,
  Plus2Color,
  PlusColor,
  RocketColor,
  SearchColor,
  SendColor,
  SettingsColor,
  SubscribeColor,
  SwapColor,
  TelegramColor,
  TimeColor,
  TwitterColor,
  WalletColor,
  WebinarColor,
  UploadStandard,
  StarIcon,
  RedCross,
} from '.';

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
    <IconWrapper name="RedCross" icon={<RedCross />} />
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
  </>
);

const Template6: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Star Icon" icon={<StarIcon />} />
    <IconWrapper name="Identicon" icon={<Identicon />} />
  </>
);

const Template7: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Alert Bot" icon={<AlertBotStandard />} />
    <IconWrapper name="All Icon" icon={<AllIcon />} />
    <IconWrapper name="All Icon" icon={<AllStandard />} />
    <IconWrapper name="Article Icon" icon={<ArticleStandard />} />
    <IconWrapper name="Audio Icon" icon={<AudioStandard />} />
    <IconWrapper name="Chart Icon" icon={<ChartStandard />} />
    <IconWrapper name="Coin Icon" icon={<CoinStandard />} />
    <IconWrapper name="Comment Icon" icon={<CommentStandard />} />
    <IconWrapper name="Copy Icon" icon={<CopyStandard />} />
    <IconWrapper name="CSVDoc Icon" icon={<CSVDocStandard />} />
    <IconWrapper name="Dashboard Icon" icon={<DashboardStandard />} />
    <IconWrapper name="Delete Icon" icon={<DeleteStandard />} />
    <IconWrapper name="Download Icon" icon={<DownloadStandard />} />
    <IconWrapper name="Edit Icon" icon={<EditStandard />} />
    <IconWrapper name="Globe Icon" icon={<GlobeStandard />} />
    <IconWrapper name="Heart Icon" icon={<HeartStandard />} />
    <IconWrapper name="Image Icon" icon={<ImageIcon />} />
    <IconWrapper name="Info Icon" icon={<InfoStandard />} />
    <IconWrapper name="Media Icon" icon={<MediaStandard />} />
    <IconWrapper name="Minus Icon" icon={<MinusStandard />} />
    <IconWrapper name="MoreCircle Icon" icon={<MoreCircleStandard />} />
    <IconWrapper name="News Icon" icon={<NewsStandard />} />
    <IconWrapper name="Notification Icon" icon={<NotificationStandard />} />
    <IconWrapper name="Plus Icon" icon={<PlusStandard />} />
    <IconWrapper name="Rocket Icon" icon={<RocketStandard />} />
    <IconWrapper name="Search Icon" icon={<SearchStandard />} />
    <IconWrapper name="Send Icon" icon={<SendStandard />} />
    <IconWrapper name="Settings Icon" icon={<SettingsStandard />} />
    <IconWrapper name="Subscribe Icon" icon={<SubscribeStandard />} />
    <IconWrapper name="Swap Icon" icon={<SwapStandard />} />
    <IconWrapper name="TckSquare Icon" icon={<TckSquareStandard />} />
    <IconWrapper name="Telegram Icon" icon={<TelegramStandard />} />
    <IconWrapper name="Time Icon" icon={<TimeStandard />} />
    <IconWrapper name="Twitter Icon" icon={<TwitterStandard />} />
    <IconWrapper name="Wallet Icon" icon={<WalletStandard />} />
    <IconWrapper name="Webinar Icon" icon={<WebinarStandard />} />
    <IconWrapper name="Wrap Icon" icon={<WrapStandard />} />
    <IconWrapper name="Upload Icon" icon={<UploadStandard />} />
  </>
);

const Template8: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Alert Bot" icon={<AlertBotColor />} />
    <IconWrapper name="Article Icon" icon={<ArticleColor />} />
    <IconWrapper name="Audio Icon" icon={<AudioColor />} />
    <IconWrapper name="Chart Icon" icon={<ChartColor />} />
    <IconWrapper name="Check Icon" icon={<Check />} />
    <IconWrapper name="Coin Icon" icon={<CoinColor />} />
    <IconWrapper name="Comment Icon" icon={<CommentColor />} />
    <IconWrapper name="Copy Icon" icon={<CopyColor />} />
    <IconWrapper name="CSVDoc Icon" icon={<DocColor />} />
    <IconWrapper name="Dashboard Icon" icon={<DashboardColor />} />
    <IconWrapper name="Delete Icon" icon={<DeleteColor />} />
    <IconWrapper name="Edit Icon" icon={<EditColor />} />
    <IconWrapper name="Globe Icon" icon={<GlobeColor />} />
    <IconWrapper name="Heart Icon" icon={<HeartColor />} />
    <IconWrapper name="Image Icon" icon={<ImageIcon />} />
    <IconWrapper name="Info Icon" icon={<InfoColor />} />
    <IconWrapper name="Media Icon" icon={<MediaColor />} />
    <IconWrapper name="MoreCircle Icon" icon={<MoreCircleColor />} />
    <IconWrapper name="News Icon" icon={<NewsColor />} />
    <IconWrapper name="Notification Icon" icon={<NotificationColor />} />
    <IconWrapper name="Plus Icon" icon={<PlusColor />} />
    <IconWrapper name="Plus1 Icon" icon={<Plus1Color />} />
    <IconWrapper name="Plus2 Icon" icon={<Plus2Color />} />
    <IconWrapper name="Rocket Icon" icon={<RocketColor />} />
    <IconWrapper name="Search Icon" icon={<SearchColor />} />
    <IconWrapper name="Send Icon" icon={<SendColor />} />
    <IconWrapper name="Settings Icon" icon={<SettingsColor />} />
    <IconWrapper name="Subscribe Icon" icon={<SubscribeColor />} />
    <IconWrapper name="Swap Icon" icon={<SwapColor />} />
    <IconWrapper name="Telegram Icon" icon={<TelegramColor />} />
    <IconWrapper name="Time Icon" icon={<TimeColor />} />
    <IconWrapper name="Twitter Icon" icon={<TwitterColor />} />
    <IconWrapper name="Wallet Icon" icon={<WalletColor />} />
    <IconWrapper name="Webinar Icon" icon={<WebinarColor />} />
  </>
);

export const navigationIcons = Template.bind({});
export const chainsIcons = Template2.bind({});
export const chainsIconsColor = Template3.bind({});
export const tokens = Template4.bind({});
export const misc = Template5.bind({});
export const placeholder = Template6.bind({});
export const generalIcons = Template7.bind({});
export const generalIconsColor = Template8.bind({});

navigationIcons.parameters = {
  backgrounds: { default: 'dark' },
};
