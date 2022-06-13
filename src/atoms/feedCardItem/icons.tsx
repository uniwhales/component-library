import React from 'react';

import {
  ArbitrumColor,
  AuroraColor,
  AvalancheColor,
  BalancerColor,
  BancorColor,
  BinanceColor,
  BobaColor,
  CieloColor,
  CurveColor,
  EthereumColor,
  FantomColor,
  MetaMaskColor,
  MetisColor,
  NearColor,
  OneInchV3,
  OneInchV4,
  OptimismColor,
  OxColor,
  ParaSwapV4,
  ParaSwapV5,
  PolygonColor,
  Sushiswap,
  SushiswapColor,
  TerraColor,
  UniswapV2Color,
  UniswapV3Color,
  UniWhalesColor,
} from '../icons';

export const dexIcons: Readonly<{
  '0x': JSX.Element,
  '1inchV3': JSX.Element,
  '1inchV4': JSX.Element,
  BalancerV2: JSX.Element,
  Bancor: JSX.Element,
  CurveV2: JSX.Element,
  MetaMask: JSX.Element,
  ParaSwapP4: JSX.Element,
  ParaSwapP5: JSX.Element,
  SushiSwap: JSX.Element,
  UniswapV2: JSX.Element,
  UniswapV3: JSX.Element,

}> = {
  MetaMask: <MetaMaskColor />,
  UniswapV2: <UniswapV2Color />,
  UniswapV3: <UniswapV3Color />,
  SushiSwap: <Sushiswap />,
  BalancerV2: <BalancerColor />,
  ParaSwapP4: <ParaSwapV4 />,
  ParaSwapP5: <ParaSwapV5 />,
  '1inchV3': <OneInchV3 />,
  '1inchV4': <OneInchV4 />,
  '0x': <OxColor />,
  Bancor: <BancorColor />,
  CurveV2: <CurveColor />,
};

export const chainIcons: Readonly<{
  'arbitrum': JSX.Element,
  'aurora': JSX.Element,
  'avalanche': JSX.Element,
  'binance': JSX.Element,
  'boba': JSX.Element,
  'cielo': JSX.Element,
  'curve': JSX.Element,
  'ethereum': JSX.Element,
  'fantom': JSX.Element,
  'metis': JSX.Element,
  'near': JSX.Element,
  'optimism': JSX.Element,
  'polygon': JSX.Element,
  'sushiswap': JSX.Element,
  'terra': JSX.Element,
  'uniswap': JSX.Element,
  'uniWhales': JSX.Element,
}> = {
  arbitrum: <ArbitrumColor />,
  aurora: <AuroraColor />,
  avalanche: <AvalancheColor />,
  binance: <BinanceColor />,
  boba: <BobaColor />,
  cielo: <CieloColor />,
  curve: <CurveColor />,
  ethereum: <EthereumColor />,
  fantom: <FantomColor />,
  metis: <MetisColor />,
  near: <NearColor />,
  optimism: <OptimismColor />,
  polygon: <PolygonColor />,
  sushiswap: <SushiswapColor />,
  terra: <TerraColor />,
  uniswap: <UniswapV3Color />,
  uniWhales: <UniWhalesColor />,

};
