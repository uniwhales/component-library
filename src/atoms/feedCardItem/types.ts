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
  tx_hash: string;
  contract: string;
  from: string;
  to: string;
  tx_type: string;
  index: 165,
  tx_from: string;
  tx_to: string;
  marketplace: string;
  symbol: string;
  price: 0.55,
  nft_address: string;
  nft_token_id: 15959,
  amount: 1,
  nft_symbol: string;
  nft_name: string;
  action: string;
  wallet: string;
  timestamp: 1655940705,
  block: 15010106,
  chain: keyof typeof chainIcons;
}

export interface NftTransferTransactionProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: NftTransferTransactionData;
  handleToggle: () => void;
  isFirst: boolean;
}
