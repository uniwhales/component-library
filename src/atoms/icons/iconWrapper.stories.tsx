import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
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
  Usdc,
  Usdt,
  Weth,
  OxColor, OneInchV3, OneInchV4,
  ArrowRightColor,
  ArrowLeftColor,
  NoticeColor,
  SelectedCheck,
  SelectedCross,
  AlertBotStandard,
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
  HoldersStandard, ActivityStandard, LoadError,
  FetchError, Interaction, FloatingClose, Kebab, Meatball, UniswapGenFilled, UniswapV3Filled,
  UniswapV2Filled, NearFilled, MagicLinkFilled, UniwhalesFilled, CieloFilled, SushiswapFilled,
  CurveFilled, ZeroXFilled, OneInchV3Filled, OneInchV2Filled, DogecoinFilled,
  BalencerFilled, EvmosFilled, BancorFilled, RedCross, ChainScan,
  CrownStandard, ShareLinkStandard, LeaderboardStandard, Suggested,
  Follow, PlanetStandard, MultipartFormStandard, Timestamp, TrendingFlame,
  OnboardingRegistration1, OnboardingRegistration2, OnboardingRegistration3,
  OnboardingRegistration4, OnboardingRegistration5, OnboardingRegistration6,
  YourFeed, Configure, CieloLogoTyped, WalletConnect,
} from '.';
import { Collection } from './generalIcons/filledStyle/Collection';
import { EvmosColor } from './chains/fullColorStyle/EvmosColor';
import { DogechainColor } from './chains/fullColorStyle/DogechainColor';
import { ApproveIcon } from './feed/ApproveIcon';
import { BridgeIcon } from './feed/BridgeIcon';
import { Call } from './feed/Call';
import { LpIcon } from './feed/LpIcon';
import { NftTradeIcon } from './feed/NftTradeIcon';
import { RevokeIcon } from './feed/RevokeIcon';
import { SwapIcon } from './feed/SwapIcon';
import { Sweep } from './feed/Sweep';
import { Unknown } from './feed/Unknown';
import { GnosisColor } from './chains/fullColorStyle/GnosisColor';
import { NftSidebarStandard } from './generalIcons/filledStyle/NftSidebarStandard';
import { Gmx } from './tokens/GMX';
import { Lyra } from './tokens/LYRA';
import { Blur } from './chains/Blur';
import { Magic } from './miscIcons/Magic';
import { Punk } from './miscIcons/Punk';
import { Canto } from './chains/fullColorStyle/Canto';
import { Swap } from './feed/Swap';
import { Withdraw } from './feed/Withdraw';
import { Reward } from './feed/Reward';
import { Perp } from './feed/Perp';
import { OptionIcon } from './feed/OptionIcon';
import { FilterTokens } from './feed/FilterTokens';
import { FilterTx } from './feed/FilterTx';
import { ZkSyncColor } from './chains/fullColorStyle/ZkSync';
import { ZkEvmColor } from './chains/fullColorStyle/ZkEvm';
import { OpenseaProColor } from './chains/fullColorStyle/OpenseaProColor';
import { PulsechainColor } from './chains/fullColorStyle/PulsechainColor';
import { NotOptimisedForModalSvg } from './miscIcons/NotOptimisedForModalSvg';

const meta: Meta<typeof IconWrapper> = {
  component: IconWrapper,
};

export default meta;
type Story = StoryObj<typeof IconWrapper>;

const Template = () => (
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
    <IconWrapper name="Hamburger" icon={<HamburgerIcon />} />
    <IconWrapper name="Meatball" icon={<Meatball />} />
    <IconWrapper name="Kebab" icon={<Kebab />} />
    <IconWrapper name="Floating Close" icon={<FloatingClose />} />
    <IconWrapper name="Load Error" icon={<LoadError />} />
    <IconWrapper name="Fetch Error" icon={<FetchError />} />
    <IconWrapper name="Filter" icon={<SettingsBars />} />
  </>
);
const Template2 = () => (
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
    <IconWrapper name="Balencer" icon={<BalencerFilled />} />
    <IconWrapper name="Bancor" icon={<BancorFilled />} />
    <IconWrapper name="Cielo" icon={<CieloFilled />} />
    <IconWrapper name="Curve" icon={<CurveFilled />} />
    <IconWrapper name="Dogecoin" icon={<DogecoinFilled />} />
    <IconWrapper name="Evmos" icon={<EvmosFilled />} />
    <IconWrapper name="Magic Link" icon={<MagicLinkFilled />} />
    <IconWrapper name="Near" icon={<NearFilled />} />
    <IconWrapper name="OneInchV2" icon={<OneInchV2Filled />} />
    <IconWrapper name="OneInchV3" icon={<OneInchV3Filled />} />
    <IconWrapper name="Sushiswap" icon={<SushiswapFilled />} />
    <IconWrapper name="Uniswap Gen" icon={<UniswapGenFilled />} />
    <IconWrapper name="Uniswap V3" icon={<UniswapV3Filled />} />
    <IconWrapper name="Uniswap V2" icon={<UniswapV2Filled />} />
    <IconWrapper name="Uniwhales" icon={<UniwhalesFilled />} />
    <IconWrapper name="0x" icon={<ZeroXFilled />} />
  </>
);
const Template3 = () => (
  <>
    <IconWrapper name="X2Y2" icon={<X2Y2Color />} />
    <IconWrapper name="Opensea" icon={<OpenseaColor />} />
    <IconWrapper name="OpenseaPro" icon={<OpenseaProColor />} />
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

    <IconWrapper name="ZkSync" icon={<ZkSyncColor />} />
    <IconWrapper name="ZkEvm" icon={<ZkEvmColor />} />
    <IconWrapper name="Etherscan" icon={<EtherscanColor />} />
    <IconWrapper name="Fantom" icon={<FantomColor />} />
    <IconWrapper name="Harmony" icon={<HarmonyColor />} />
    <IconWrapper name="Metamask" icon={<MetaMaskColor />} />
    <IconWrapper name="Metis" icon={<MetisColor />} />
    <IconWrapper name="Near" icon={<NearColor />} />
    <IconWrapper name="Optimism" icon={<OptimismColor />} />
    <IconWrapper name="Polygon" icon={<PolygonColor />} />
    <IconWrapper name="Pulse" icon={<PulsechainColor />} />
    <IconWrapper name="Sushiswap" icon={<SushiswapColor />} />
    <IconWrapper name="Terra" icon={<TerraColor />} />
    <IconWrapper name="Wallet Connect Color" icon={<WalletConnectColor />} />
    <IconWrapper name="Wallet Connect" icon={<WalletConnect />} />
    <IconWrapper name="Uniwhales" icon={<UniWhalesColor />} />
    <IconWrapper name="0x" icon={<OxColor />} />
    <IconWrapper name="evmos" icon={<EvmosColor />} />
    <IconWrapper name="dogechain" icon={<DogechainColor />} />
    <IconWrapper name="gnosis" icon={<GnosisColor />} />
    <IconWrapper name="blur" icon={<Blur />} />
    <IconWrapper name="Canto" icon={<Canto />} />
  </>
);

const Template4 = () => (
  <>
    <IconWrapper name="Weth" icon={<Weth />} />
    <IconWrapper name="Dai" icon={<Dai />} />
    <IconWrapper name="USDC" icon={<Usdc />} />
    <IconWrapper name="USDT" icon={<Usdt />} />
    <IconWrapper name="GMX" icon={<Gmx />} />
    <IconWrapper name="Lyra" icon={<Lyra />} />
  </>
);

const Template5 = () => (
  <>
    <IconWrapper name="Identicon Icon" icon={<Identicon />} cursor="pointer" />
    <IconWrapper name="Star Icon" icon={<StarIcon />} cursor="pointer" />
    <IconWrapper name="Image Icon" icon={<ImageIcon />} cursor="pointer" />
    <IconWrapper name="NFT" icon={<NftIcon />} />
    <IconWrapper name="Magic" icon={<Magic />} />
    <IconWrapper name="Punk" icon={<Punk />} />
    <IconWrapper name="Mobile" height="" width="" icon={<NotOptimisedForModalSvg />} />
  </>
);

const Template6 = () => (
  <>
    <IconWrapper name="Arrow Right" icon={<ArrowRightColor />} />
    <IconWrapper name="Arrow Left" icon={<ArrowLeftColor />} />
    <IconWrapper name="Notice" icon={<NoticeColor />} />
    <IconWrapper name="Selected Check" icon={<SelectedCheck />} />
    <IconWrapper name="Selected Cross" icon={<SelectedCross />} />
    <IconWrapper name="Red Cross" icon={<RedCross />} />
  </>
);
const Template7 = () => (
  <>
    <IconWrapper name="MultiPlatform" icon={<MultipartFormStandard />} />
    <IconWrapper name="Planet" icon={<PlanetStandard />} />
    <IconWrapper name="Hide" icon={<Hide />} />
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
    <IconWrapper name="Microscope" icon={<Microscope />} />
    <IconWrapper name="Sonar" icon={<Sonar />} />
    <IconWrapper name="Suitcase" icon={<Suitcase />} />
    <IconWrapper name="Collection" icon={<Collection />} />
    <IconWrapper name="Bundle" icon={<BundleStandard />} />
    <IconWrapper name="Unfollow" icon={<UnfollowStandard />} />
    <IconWrapper name="Notification Off" icon={<NotificationOff />} />
    <IconWrapper name="Trending" icon={<TrendingStandard />} />
    <IconWrapper name="Bridge" icon={<BridgeStandard />} />
    <IconWrapper name="Transactions" icon={<TransactionsStandard />} />
    <IconWrapper name="Dynamic List" icon={<DynamicList />} />
    <IconWrapper name="Holders Standard" icon={<HoldersStandard />} />
    <IconWrapper name="Activity Standard" icon={<ActivityStandard />} />
    <IconWrapper name="NFT Sidebar" icon={<NftSidebarStandard />} />
    <IconWrapper name="Interaction" icon={<Interaction />} />
    <IconWrapper name="Sweep" icon={<Sweep />} />
    <IconWrapper name="Crown" icon={<CrownStandard />} />
    <IconWrapper name="Share Link" icon={<ShareLinkStandard />} />
    <IconWrapper name="Approve" icon={<ApproveIcon />} />
    <IconWrapper name="Revoke" icon={<RevokeIcon />} />
    <IconWrapper name="Leaderboard" icon={<LeaderboardStandard />} />
    <IconWrapper name="Suggested" icon={<Suggested />} />
    <IconWrapper name="Chain Scan" icon={<ChainScan />} />
    <IconWrapper name="Follow" icon={<Follow />} />
    <IconWrapper name="info" icon={<InfoStandard />} />
  </>
);

const Template8 = () => (
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

const Template9 = () => (
  <>
    <IconWrapper name="Approve" icon={<ApproveIcon />} />
    <IconWrapper name="Bridge" icon={<BridgeIcon />} />
    <IconWrapper name="Call" icon={<Call />} />
    <IconWrapper name="LP" icon={<LpIcon />} />
    <IconWrapper name="NFT Trade" icon={<NftTradeIcon />} />
    <IconWrapper name="Revoke" icon={<RevokeIcon />} />
    <IconWrapper name="Swap" icon={<SwapIcon />} />
    <IconWrapper name="Sweep" icon={<Sweep />} />
    <IconWrapper name="Unknown" icon={<Unknown />} />
    <IconWrapper name="Swap" icon={<Swap />} />
    <IconWrapper name="Withdraw" icon={<Withdraw />} />
    <IconWrapper name="Transfer" icon={<ArrowRightIcon />} />
    <IconWrapper name="Borrow" icon={<ArrowLeftIcon />} />
    <IconWrapper name="Reward" icon={<Reward />} />
    <IconWrapper name="Perp" icon={<Perp />} />
    <IconWrapper name="Option" icon={<OptionIcon />} />
    <IconWrapper name="Filter Tokens" icon={<FilterTokens />} />
    <IconWrapper name="Filter Tx" icon={<FilterTx />} />
    <IconWrapper name="Timestamp" icon={<Timestamp />} />
    <IconWrapper name="TrendingFlame" icon={<TrendingFlame />} />
    <IconWrapper name="Cielo Logo Typed" icon={<CieloLogoTyped />} />
  </>
);

const Template10 = () => (
  <>
    <IconWrapper href="1231321" name="Ethereum" icon={<Ethereum />} />
    <IconWrapper href="1231321" name="Polygon" icon={<Polygon />} />
    <IconWrapper href="1231321" name="Fantom" icon={<Fantom />} />
    <IconWrapper href="1231321" name="Arbitrum" icon={<Arbitrum />} />
    <IconWrapper href="1231321" name="Avalanche" icon={<Avalanche />} />
    <IconWrapper href="1231321" name="Optimism" icon={<Optimism />} />
    <IconWrapper href="1231321" name="Binance" icon={<Binance />} />
    <IconWrapper href="1231321" name="Boba" icon={<Boba />} />
    <IconWrapper href="1231321" name="Aurora" icon={<Aurora />} />
    <IconWrapper href="1231321" name="Metis" icon={<Metis />} />
  </>
);

const Template11 = () => (
  <>
    <IconWrapper width="25px" disabled height="25px" href="1231321" name="Href disabled" icon={<Ethereum />} />
    <IconWrapper width="25px" disabled height="25px" name="Non href disabled" icon={<Ethereum />} />
  </>
);

const Template12 = () => (
  <>
    <IconWrapper hasHover name="MultiPlatform" icon={<MultipartFormStandard />} />
    <IconWrapper hasHover name="Planet" icon={<PlanetStandard />} />
    <IconWrapper hasHover name="Hide" icon={<Hide />} />
    <IconWrapper hasHover name="Watch" icon={<WatchStandard />} />
    <IconWrapper hasHover name="Profile" icon={<ProfileStandard />} />
    <IconWrapper hasHover name="Feed" icon={<Feed />} />
    <IconWrapper hasHover name="Fire" icon={<Fire />} />
    <IconWrapper hasHover name="Alert Bot" icon={<AlertBotStandard />} />
  </>
);

const Template13 = () => (
  <>
    <IconWrapper width="" height="" name="Onboarding_Registration_1" icon={<OnboardingRegistration1 />} />
    <IconWrapper height="" width="" name="Onboarding_Registration_2" icon={<OnboardingRegistration2 />} />
    <IconWrapper height="" width="" name="Onboarding_Registration_3" icon={<OnboardingRegistration3 />} />
    <IconWrapper height="" width="" name="Onboarding_Registration_4" icon={<OnboardingRegistration4 />} />
    <IconWrapper height="" width="" name="Onboarding_Registration_5" icon={<OnboardingRegistration5 />} />
    <IconWrapper height="" width="" name="Onboarding_Registration_6" icon={<OnboardingRegistration6 />} />
  </>
);

const Template14 = () => (
  <>
    <IconWrapper width="" height="" name="Your Feed" icon={<YourFeed />} />
    <IconWrapper height="" width="" name="Configure" icon={<Configure />} />
  </>
);

export const navigationIcons: Story = {
  render: () => <Template />,
};

export const chainsIcons: Story = {
  render: () => <Template2 />,
};

export const chainsIconsColor: Story = {
  render: () => <Template3 />,
};

export const tokens: Story = {
  render: () => <Template4 />,
};

export const misc: Story = {
  render: () => <Template5 />,
};

export const navigationIconsColor: Story = {
  render: () => <Template6 />,
};

export const generalFilledStyle: Story = {
  render: () => <Template7 />,
};

export const generalFullColor: Story = {
  render: () => <Template8 />,
};

export const feedIcons: Story = {
  render: () => <Template9 />,
};

export const hrefIcons: Story = {
  render: () => <Template10 />,
};

export const otherIcons: Story = {
  render: () => <Template11 />,
};

export const IconsWithHover: Story = {
  render: () => <Template12 />,
};
export const OnboardingRegistration: Story = {
  render: () => <Template13 />,
};
export const Tutorial: Story = {
  render: () => <Template14 />,
};

navigationIcons.parameters = {
  backgrounds: { default: 'dark' },
};
