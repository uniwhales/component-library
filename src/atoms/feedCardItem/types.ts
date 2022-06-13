export interface TransactionData {
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from: string;
  to: string;
  tx_hash: string;
  tx_type: string;
  dex: string;
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
  chain: string;
}
export interface FeedCardItemProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: TransactionData;
  handleToggle: () => void;
  isFirst: boolean;
}
