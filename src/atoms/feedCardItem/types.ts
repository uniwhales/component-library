export interface TransactionData {
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from: string;
  to: string;
  tx_hash: string;
  tx_type: string;
  dex: '0x'
  | '1inchV3'
  | '1inchV4'
  | 'BalancerV2'
  | 'Bancor'
  | 'CurveV2'
  | 'MetaMask'
  | 'ParaSwapP4'
  | 'ParaSwapP5'
  | 'SushiSwap'
  | 'UniswapV2'
  | 'UniswapV3'
  ;
  token0_address: string;
  token0_name: string;
  token0_symbol: string;
  token0_amount: number,
  token0_amount_usd: number;
  token0_price_usd: number;
  token1_address: string;
  token1_name: string;
  token1_symbol: string;
  token1_amount: number;
  token1_amount_usd: number;
  token1_price_usd: number;
  index: number;
  chain:
  'arbitrum'
  | 'aurora'
  | 'avalanche'
  | 'binance'
  | 'boba'
  | 'cielo'
  | 'curve'
  | 'ethereum'
  | 'fantom'
  | 'metis'
  | 'near'
  | 'optimism'
  | 'polygon'
  | 'sushiswap'
  | 'terra'
  | 'uniswap'
  | 'uniWhales'
}
export interface FeedCardItemProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: TransactionData;
  handleToggle: () => void;
  isFirst: boolean;
}
