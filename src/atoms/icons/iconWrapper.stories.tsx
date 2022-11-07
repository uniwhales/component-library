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
  ArrowRightColor,
  ArrowLeftColor,
  NoticeColor,
  SelectedCheck,
  SelectedCross,
  AlertBotStandard,
  Meatball,
  Kebab,
  Identicon,
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
  NftIcon,
  Fire,
  Feed,
  Announcements,
  SettingsBars,
  Microscope,
  Sonar,
  Suitcase,
  BundleStandard,
  UnfollowStandard,
  NotificationOff,
  TrendingStandard,
  BridgeStandard,
  TransactionsStandard,
  HamburgerIcon, ProfileStandard,
  DynamicList, GemColor, GenieColor, LooksRareColor, OpenseaColor, X2Y2Color, WatchStandard, Hide,
  HoldersStandard, ActivityStandard, LoadError, FetchError,
} from '.';
import { Collection } from './generalIcons/filledStyle/Collection';
import { VerticalDots } from './navigationIcons/VerticalDots';
import { HorizontalDots } from './navigationIcons/HorizontalDots';
import { EvmosColor } from './chains/fullColorStyle/EvmosColor';
import { DogechainColor } from './chains/fullColorStyle/DogechainColor';
import { ApproveIcon } from './feed/ApproveIcon';
import { BridgeIcon } from './feed/BridgeIcon';
import { Call } from './feed/Call';
import { LpIcon } from './feed/LpIcon';
import { NftTradeIcon } from './feed/NftTradeIcon';
import { RevokeIcon } from './feed/RevokeIcon';
import { SwapIcon } from './feed/SwapIcon';
import { Unknown } from './feed/Unknown';
import { SvgGradients } from '../../theme';
import { GnosisColor } from './chains/fullColorStyle/GnosisColor';
import { NftSidebarStandard } from './generalIcons/filledStyle/NftSidebarStandard';

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
    <IconWrapper name="Hamburger" icon={<HamburgerIcon />} />
    <IconWrapper name="Horizontal Dots" icon={<HorizontalDots />} />
    <IconWrapper name="Vertical Dots" icon={<VerticalDots />} />
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
    <IconWrapper name="X2Y2" icon={<X2Y2Color />} />
    <IconWrapper name="Opensea" icon={<OpenseaColor />} />
    <IconWrapper name="LooksRare" icon={<LooksRareColor />} />
    <IconWrapper name="Genie" icon={<GenieColor />} />
    <IconWrapper name="Gem" icon={<GemColor />} />
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
    <IconWrapper name="evmos" icon={<EvmosColor />} />
    <IconWrapper name="dogechain" icon={<DogechainColor />} />
    <IconWrapper name="gnosis" icon={<GnosisColor />} />
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
    <IconWrapper name="Identicon Icon" icon={<Identicon />} cursor="pointer" />
    <IconWrapper name="Star Icon" icon={<StarIcon />} cursor="pointer" />
    <IconWrapper name="Image Icon" icon={<ImageIcon />} cursor="pointer" />
    <IconWrapper name="NFT" icon={<NftIcon />} />
  </>
);

const Template6: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Arrow Right" icon={<ArrowRightColor />} />
    <IconWrapper name="Arrow Left" icon={<ArrowLeftColor />} />
    <IconWrapper name="Notice" icon={<NoticeColor />} />
    <IconWrapper name="Selected Check" icon={<SelectedCheck />} />
    <IconWrapper name="Selected Cross" icon={<SelectedCross />} />
    <IconWrapper name="Red Cross" icon={<RedCross />} />
  </>
);
const Template7: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Fetch Error" icon={<Hide />} />
    <IconWrapper name="Load Error" icon={<LoadError />} />
    <IconWrapper name="Hide" icon={<FetchError />} />
    <IconWrapper name="Watch" icon={<WatchStandard />} />
    <IconWrapper name="Profile" icon={<ProfileStandard />} />
    <IconWrapper name="Feed" icon={<Feed />} />
    <IconWrapper name="Fire" icon={<Fire />} />
    <IconWrapper name="Alert Bot" icon={<AlertBotStandard />} />
    <IconWrapper name="All" icon={<AllStandard />} />
    <IconWrapper name="All Icon" icon={<AllIcon />} />
    <IconWrapper name="Article" icon={<ArticleStandard />} />
    <IconWrapper name="Audio" icon={<AudioStandard />} />
    <IconWrapper name="Chart" icon={<ChartStandard />} />
    <IconWrapper name="Coin" icon={<CoinStandard />} />
    <IconWrapper name="Comment" icon={<CommentStandard />} />
    <IconWrapper name="Copy" icon={<CopyStandard />} />
    <IconWrapper name="CSVDoc" icon={<CSVDocStandard />} />
    <IconWrapper name="Dashboard" icon={<DashboardStandard />} />
    <IconWrapper name="Delete" icon={<DeleteStandard />} />
    <IconWrapper name="Download" icon={<DownloadStandard />} />
    <IconWrapper name="Edit" icon={<EditStandard />} />
    <IconWrapper name="Globe" icon={<GlobeStandard />} />
    <IconWrapper name="Heart" icon={<HeartStandard />} />
    <IconWrapper name="Info" icon={<InfoStandard />} />
    <IconWrapper name="Media" icon={<MediaStandard />} />
    <IconWrapper name="Minus" icon={<MinusStandard />} />
    <IconWrapper name="MoreCircle" icon={<MoreCircleStandard />} />
    <IconWrapper name="News" icon={<NewsStandard />} />
    <IconWrapper name="Notification" icon={<NotificationStandard />} />
    <IconWrapper name="Plus" icon={<PlusStandard />} />
    <IconWrapper name="Rocket" icon={<RocketStandard />} />
    <IconWrapper name="Search" icon={<SearchStandard />} />
    <IconWrapper name="Send" icon={<SendStandard />} />
    <IconWrapper name="Settings" icon={<SettingsStandard />} />
    <IconWrapper name="Subscribe" icon={<SubscribeStandard />} />
    <IconWrapper name="Swap" icon={<SwapStandard />} />
    <IconWrapper name="TckSquare" icon={<TckSquareStandard />} />
    <IconWrapper name="Telegram" icon={<TelegramStandard />} />
    <IconWrapper name="Time" icon={<TimeStandard />} />
    <IconWrapper name="Twitter" icon={<TwitterStandard />} />
    <IconWrapper name="Wallet" icon={<WalletStandard />} />
    <IconWrapper name="Webinar" icon={<WebinarStandard />} />
    <IconWrapper name="Wrap" icon={<WrapStandard />} />
    <IconWrapper name="Upload" icon={<UploadStandard />} />
    <IconWrapper name="Announcements" icon={<Announcements />} />
    <IconWrapper name="Settings Bars" icon={<SettingsBars />} />
    <IconWrapper name="Microscope" icon={<Microscope />} />
    <IconWrapper name="Sonar" icon={<Sonar />} />
    <IconWrapper name="Suitcase" icon={<Suitcase />} />
    <IconWrapper name="Collection" icon={<Collection />} />
    <IconWrapper name="Bundle" icon={<BundleStandard />} />
    <IconWrapper name="Unfollow" icon={<UnfollowStandard />} />
    <IconWrapper name="Notification Off" icon={<NotificationOff />} />
    <IconWrapper name="Treding" icon={<TrendingStandard />} />
    <IconWrapper name="Bridge" icon={<BridgeStandard />} />
    <IconWrapper name="Transactions" icon={<TransactionsStandard />} />
    <IconWrapper name="Dynamic List" icon={<DynamicList />} />
    <IconWrapper name="Holders Standard" icon={<HoldersStandard />} />
    <IconWrapper name="Activity Standard" icon={<ActivityStandard />} />
    <IconWrapper name="NFT Sidebar" icon={<NftSidebarStandard />} />
  </>
);

const Template8: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Alert Bot" icon={<AlertBotColor />} />
    <IconWrapper name="Article" icon={<ArticleColor />} />
    <IconWrapper name="Audio" icon={<AudioColor />} />
    <IconWrapper name="Chart" icon={<ChartColor />} />
    <IconWrapper name="Check" icon={<Check />} />
    <IconWrapper name="Coin" icon={<CoinColor />} />
    <IconWrapper name="Comment" icon={<CommentColor />} />
    <IconWrapper name="Copy" icon={<CopyColor />} />
    <IconWrapper name="Doc" icon={<DocColor />} />
    <IconWrapper name="Dashboard" icon={<DashboardColor />} />
    <IconWrapper name="Delete" icon={<DeleteColor />} />
    <IconWrapper name="Edit" icon={<EditColor />} />
    <IconWrapper name="Globe" icon={<GlobeColor />} />
    <IconWrapper name="Heart" icon={<HeartColor />} />
    <IconWrapper name="Info" icon={<InfoColor />} />
    <IconWrapper name="Media" icon={<MediaColor />} />
    <IconWrapper name="MoreCircle" icon={<MoreCircleColor />} />
    <IconWrapper name="News" icon={<NewsColor />} />
    <IconWrapper name="Notification" icon={<NotificationColor />} />
    <IconWrapper name="Plus" icon={<PlusColor />} />
    <IconWrapper name="Plus2" icon={<Plus2Color />} />
    <IconWrapper name="Rocket" icon={<RocketColor />} />
    <IconWrapper name="Search" icon={<SearchColor />} />
    <IconWrapper name="Send" icon={<SendColor />} />
    <IconWrapper name="Settings" icon={<SettingsColor />} />
    <IconWrapper name="Subscribe" icon={<SubscribeColor />} />
    <IconWrapper name="Swap" icon={<SwapColor />} />
    <IconWrapper name="Telegram" icon={<TelegramColor />} />
    <IconWrapper name="Time" icon={<TimeColor />} />
    <IconWrapper name="Twitter" icon={<TwitterColor />} />
    <IconWrapper name="Wallet" icon={<WalletColor />} />
    <IconWrapper name="Webinar" icon={<WebinarColor />} />
  </>
);

const Template9: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper name="Approve" icon={<ApproveIcon />} />
    <IconWrapper name="Bridge" icon={<BridgeIcon />} />
    <IconWrapper name="Call" icon={<Call />} />
    <IconWrapper name="LP" icon={<LpIcon />} />
    <IconWrapper name="NFT Trade" icon={<NftTradeIcon />} />
    <IconWrapper name="Revoke" icon={<RevokeIcon />} />
    <IconWrapper name="Swap" icon={<SwapIcon />} />
    <IconWrapper name="Unknown" icon={<Unknown />} />
  </>
);

const Template10: ComponentStory<typeof IconWrapper> = () => (
  <IconWrapper gradient={SvgGradients.CANARY} name="Dynamic list" icon={<DynamicList />} />
);

const Template11: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper width="25px" height="25px" href="1231321" name="Ethereum" icon={<Ethereum />} />
    <IconWrapper width="25px" height="25px" href="1231321" name="Polygon" icon={<Polygon />} />
    <IconWrapper width="25px" height="25px" href="1231321" name="Fantom" icon={<Fantom />} />
    <IconWrapper width="25px" height="25px" href="1231321" name="Arbitrum" icon={<Arbitrum />} />
    <IconWrapper width="25px" height="25px" href="1231321" name="Avalanche" icon={<Avalanche />} />
    <IconWrapper width="25px" height="25px" href="1231321" name="Optimism" icon={<Optimism />} />
    <IconWrapper width="25px" height="25px" href="1231321" name="Binance" icon={<Binance />} />
    <IconWrapper width="25px" height="25px" href="1231321" name="Boba" icon={<Boba />} />
    <IconWrapper width="25px" height="25px" href="1231321" name="Aurora" icon={<Aurora />} />
    <IconWrapper width="25px" height="25px" href="1231321" name="Metis" icon={<Metis />} />
  </>
);

const Template12: ComponentStory<typeof IconWrapper> = () => (
  <>
    <IconWrapper width="25px" disabled height="25px" href="1231321" name="Href disabled" icon={<Ethereum />} />
    <IconWrapper width="25px" disabled height="25px" name="Non href disabled" icon={<Ethereum />} />
  </>
);

export const navigationIcons = Template.bind({});
export const chainsIcons = Template2.bind({});
export const chainsIconsColor = Template3.bind({});
export const tokens = Template4.bind({});
export const misc = Template5.bind({});
export const navigationIconsColor = Template6.bind({});
export const generalFilledStyle = Template7.bind({});
export const generalFullColor = Template8.bind({});
export const feedIcons = Template9.bind({});
export const gradientIcons = Template10.bind({});
export const hrefIcons = Template11.bind({});
export const otherIcons = Template12.bind({});

navigationIcons.parameters = {
  backgrounds: { default: 'dark' },
};
