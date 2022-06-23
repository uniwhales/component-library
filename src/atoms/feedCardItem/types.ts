import { chainIcons, dexIcons } from './icons';

export interface SwapTransactionData {
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from: string;
  to: string;
  tx_hash: string;
  tx_type: string;
  dex: keyof typeof dexIcons;
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
  chain: keyof typeof chainIcons;
}

export interface SwapTransactionProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: SwapTransactionData;
  handleToggle: () => void;
  isFirst: boolean;
}

export interface TransferTransactionData {
  from: string;
  to: string;
  tx_hash: string;
  amount: number;
  amount_usd: number;
  token_price_usd: number;
  index: number;
  contract_address: string;
  symbol: string;
  name: string;
  tx_type: string;
  type: string;
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from_label: string;
  to_label: string;
  chain: keyof typeof chainIcons;
}

export interface TransferTransactionProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: TransferTransactionData
  handleToggle: () => void;
  isFirst: boolean;
}

export interface NftTransferTransactionData {
  from: string;
  to: string;
  tx_hash: string;
  index: 1,
  contract_address: string;
  symbol: string;
  name: string;
  contract_type: string;
  tx_type: string;
  type: string;
  amount: number;
  token_id: string;
  value: number;
  fee: number;
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from_label: string;
  to_label: string;
  chain: keyof typeof chainIcons;
}

export interface NftTransferTransactionProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: NftTransferTransactionData;
  handleToggle: () => void;
  isFirst: boolean;
}
