import React from 'react';
import {
  Arbitrum as ArbitrumLogo,
  Avalanche as AvalancheIcon,
  Binance as BinanceIcon,
  Ethereum as EthereumIcon,
  Fantom as FantomIcon,
  Near as NearIcon,
  Polygon as PolygonIcon,
  Terra as TerraIcon,
  AlertBotStandard,
  HeartColor,
  WalletStandard,
  NewsStandard,
  DashboardStandard,
} from '../../atoms/icons';

export enum Plans {
  FREE = 'FREE',
  PRO = 'PRO',
  WHALE = 'WHALE',
}

export enum SidebarItemID {
  Account = 'Account',
  Newsdesk = 'Newsdesk',
  Tools = 'Tools',
  Ethereum = 'Ethereum',
  Binance = 'Binance',
  Polygon = 'Polygon',
  Terra = 'Terra',
  Avalanche = 'Avalanche',
  Fantom = 'Fantom',
  Arbitrum = 'Arbitrum',
  Alerts = 'Alerts',
  PriceAlerts = 'PriceAlerts',
  PowerBrokers = 'PowerBrokers',
  WalletAnalysis = 'WalletAnalysis',
  WalletAlerts = 'WalletAlerts',
  Favorites = 'Favorites',
  TrendingContracts = 'TrendingContracts',
  Aurora = 'Aurora',
  Near = 'Near',
  TransactionsETH = 'TransactionsETH',
  TransactionsBSC = 'TransactionsBSC',
  TransactionsPolygon = 'TransactionsPolygon',
  // NewTokens = 'NewTokens',
  LiquidityETH = 'LiquidityETH',
  LiquidityBSC = 'LiquidityBSC',
  LiquidityPolygon = 'LiquidityPolygon',
  EthereumRPS = 'EthereumRPS',
  PancakeswapRPS = 'PancakeswapRPS',
  BridgeTrackerPolygon = 'BridgeTrackerPolygon',
  BridgeTrackerTerra = 'BridgeTrackerTerra',
  BridgeTrackerAvalanche = 'BridgeTrackerAvalanche',
  BridgeTrackerFantom = 'BridgeTrackerFantom',
  BridgeTrackerArbitrum = 'BridgeTrackerArbitrum',
  BridgeTrackerNear = 'BridgeTrackerNear',
}

export enum DashboardNames {
  Newsdesk = 'Newsdesk',
  Ethereum = 'Ethereum',
  Tools = 'Tools',
  Transactions = 'Transactions',
  // NewTokens = 'New Tokens',
  Liquidity = 'Liquidity',
  RedPhonshipSaurus = 'RPS',
  PowerBrokers = 'Power Brokers',
  TrendingContracts = 'Trending Contracts',
  BridgeTracker = 'Bridge Tracker',
  Binance = 'Binance',
  Polygon = 'Polygon',
  Terra = 'Terra',
  Avalanche = 'Avalanche',
  Fantom = 'Fantom',
  Arbitrum = 'Arbitrum',
  Near = 'Near',
  WalletAnalysis = 'Wallet Analysis',
  WalletAlerts = 'Wallet Alerts',
  Favorites = 'Favorites',
  PriceAlerts = 'Price Alerts',
  Alerts = 'Alerts',
}

export type SidebarElement = {
  id: SidebarItemID
  name: string
  to?: string
  icon?: JSX.Element
  pro?: boolean
  whale?: boolean
  path?: string
  tag?: string
  subitems?: SidebarElement[]
};

export const sidebarItems: SidebarElement[] = [
  {
    id: SidebarItemID.Newsdesk,
    name: DashboardNames.Newsdesk,
    icon: <NewsStandard />,
    path: '/newsdesk',
  },
  {
    id: SidebarItemID.Tools,
    icon: <DashboardStandard />,
    name: DashboardNames.Tools,
    subitems: [
      {
        id: SidebarItemID.Ethereum,
        name: DashboardNames.Ethereum,
        icon: <EthereumIcon />,
        subitems: [
          {
            id: SidebarItemID.TransactionsETH,
            name: DashboardNames.Transactions,
            path: '/',
          },
          {
            id: SidebarItemID.LiquidityETH, name: DashboardNames.Liquidity, path: '/liquidity', pro: true, tag: 'Soon',
          },
          {
            id: SidebarItemID.EthereumRPS, name: DashboardNames.RedPhonshipSaurus, path: '/rps', whale: true, tag: 'Soon',
          },
          {
            id: SidebarItemID.PowerBrokers, name: DashboardNames.PowerBrokers, path: '/power-brokers', whale: true,
          },
          {
            id: SidebarItemID.TrendingContracts, name: DashboardNames.TrendingContracts, path: '/trending-contracts', whale: true,
          },
        ],
      },
      {
        id: SidebarItemID.Binance,
        name: DashboardNames.Binance,
        icon: <BinanceIcon />,
        subitems: [
          {
            id: SidebarItemID.TransactionsBSC,
            name: DashboardNames.Transactions,
            path: '/bsc-txs',
            pro: true,
            tag: 'Soon',

          },
          {
            id: SidebarItemID.LiquidityBSC, name: DashboardNames.Liquidity, path: '/bsc/liquidity', pro: true, tag: 'Soon',
          },
        ],
      },
      {
        id: SidebarItemID.Polygon,
        name: DashboardNames.Polygon,
        icon: <PolygonIcon />,
        subitems: [
          {
            id: SidebarItemID.TransactionsPolygon,
            name: DashboardNames.Transactions,
            path: '/polygon/txs',
            pro: true,
            tag: 'Soon',
          },
          {
            id: SidebarItemID.LiquidityPolygon,
            path: '/polygon/liquidity',
            name: DashboardNames.Liquidity,
            pro: true,
            tag: 'Soon',
          },
          { id: SidebarItemID.BridgeTrackerPolygon, path: '/polygon/bridge-tracker', name: DashboardNames.BridgeTracker },
        ],
      },
      {
        id: SidebarItemID.Fantom,
        name: DashboardNames.Fantom,
        icon: <FantomIcon />,
        subitems: [
          {
            id: SidebarItemID.BridgeTrackerFantom,
            name: DashboardNames.BridgeTracker,
            path: '/fantom/bridge-tracker',
          },
        ],
      },
      {
        id: SidebarItemID.Arbitrum,
        name: DashboardNames.Arbitrum,
        icon: <ArbitrumLogo />,
        subitems: [
          {
            id: SidebarItemID.BridgeTrackerArbitrum,
            name: DashboardNames.BridgeTracker,
            path: '/arbitrum/bridge-tracker',
          },
        ],
      },
      {
        id: SidebarItemID.Near,
        name: DashboardNames.Near,
        icon: <NearIcon />,
        subitems: [
          {
            id: SidebarItemID.BridgeTrackerNear,
            name: DashboardNames.BridgeTracker,
            path: '/near/bridge-tracker',
          },
        ],
      },
      {
        id: SidebarItemID.Avalanche,
        name: DashboardNames.Avalanche,
        icon: <AvalancheIcon />,
        subitems: [
          {
            id: SidebarItemID.BridgeTrackerAvalanche,
            name: DashboardNames.BridgeTracker,
            path: '/avalanche/bridge-tracker',
          },
        ],
      },
      {
        id: SidebarItemID.Terra,
        name: DashboardNames.Terra,
        icon: <TerraIcon />,
        subitems: [
          {
            id: SidebarItemID.BridgeTrackerTerra,
            name: DashboardNames.BridgeTracker,
            path: '/terra/bridge-tracker',
          },
        ],
      },
      {
        id: SidebarItemID.Favorites,
        name: DashboardNames.Favorites,
        icon: <HeartColor />,
        pro: true,
        path: '/favorites',
      },
    ],
  },
  {
    id: SidebarItemID.Alerts,
    name: DashboardNames.Alerts,
    icon: <AlertBotStandard />,
    subitems: [
      {
        id: SidebarItemID.WalletAlerts,
        name: DashboardNames.WalletAlerts,
        icon: <WalletStandard />,
        path: '/wallet-alerts',
        pro: true,
      },
    ],
  },
];
