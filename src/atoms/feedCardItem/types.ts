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

export interface NftTrade {
  tx_hash: string;
  contract: string;
  from: string;
  to: string;
  tx_type: string;
  index: number;
  tx_from: string;
  tx_to: string;
  marketplace: string;
  symbol: string;
  price: number;
  nft_address: string;
  nft_token_id: number;
  amount: number;
  nft_symbol: string;
  nft_name: string;
  action: string;
  wallet: string;
  timestamp: number;
  block: number;
  chain: keyof typeof chainIcons;
}

export interface NftTradeProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: NftTrade;
  handleToggle: () => void;
  isFirst: boolean;
}

export interface NftTransfer {
  from: string;
  to: string;
  tx_hash: string;
  index: number;
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

export interface NftTransferProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: NftTransfer;
  handleToggle: () => void;
  isFirst: boolean;
}

export interface NftMint {
  hash: string;
  from: string;
  to: string;
  tx_hash: string;
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
  timestamp: number;
  block: number;
  wallet: string;
  value_usd: number;
  native_token: string;
  from_label: string;
  to_label: string;
  chain: keyof typeof chainIcons;
}

export interface NftMintProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: NftMint;
  handleToggle: () => void;
  isFirst: boolean;
}

export interface LpPool {
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from: string;
  tx_hash: string;
  tx_type: string;
  type: string;
  token0_address: string;
  token0_name: string;
  token0_symbol: string;
  token0_amount: number;
  token0_amount_usd: number;
  token0_price_usd: number;
  token1_address: string;
  token1_name: string;
  token1_symbol: string;
  token1_amount: number;
  token1_amount_usd: number;
  token1_price_usd: number;
  dex: keyof typeof dexIcons;
  index: number;
  chain: keyof typeof chainIcons;
}

export interface LpPoolProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: LpPool;
  handleToggle: () => void;
  isFirst: boolean;
}

export interface Reward {
  hash: string;
  timestamp: number;
  block: number
  wallet: string;
  from: string;
  tx_hash: string;
  address: string;
  name: string;
  symbol: string;
  amount: number
  amount_usd: number;
  price_usd: number;
  dex: keyof typeof dexIcons;
  tx_type: string
  index: number;
  chain: string
}

export interface RewardProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: Reward;
  handleToggle: () => void;
  isFirst: boolean;
}

export interface Lending {
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  action: string;
  from: string;
  tx_hash: string;
  address: string;
  name: string;
  symbol: string;
  amount: number;
  amount_usd: number;
  price_usd: number;
  tx_type: string;
  platform: string;
  dex: keyof typeof dexIcons;
  health_factor?: number;
  index: number;
  chain: keyof typeof chainIcons;
}

export interface LendingProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: Lending;
  handleToggle: () => void;
  isFirst: boolean;
}

export interface ApproveRevoke {
  hash: string;
  timestamp: number;
  block: number;
  from: string;
  contract: string;
  contract_label: string;
  symbol: string;
  name: string;
  token_type: string;
  action: string;
  tx_type: string;
  wallet: string;
  chain: keyof typeof chainIcons;
}

export interface ApproveRevokeProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: ApproveRevoke;
  handleToggle: () => void;
  isFirst: boolean;
}

export interface Wrap {
  hash: string;
  timestamp: number;
  block: number;
  tx_type: string;
  action: string;
  contract_address: string;
  amount: number;
  amount_usd: number;
  token_price_usd: number;
  symbol: string;
  name: string;
  token_type: string;
  wallet: string;
  chain: keyof typeof chainIcons;
}

export interface WrapProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: Wrap;
  handleToggle: () => void;
  isFirst: boolean;
}

export interface Bridge {
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from: string;
  to: string;
  tx_hash: string;
  amount: number;
  price: number;
  amount_usd: number;
  symbol: string;
  name: string;
  tx_type: string;
  type: string;
  bridge: string;
  index: number;
  chain: keyof typeof chainIcons;
}

export interface BridgeProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: Bridge;
  handleToggle: () => void;
  isFirst: boolean;
}

export interface Perp {
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
  token0_amount: number;
  token0_amount_usd: number;
  token0_price_usd: number;
  token1_address: string;
  token1_name: string;
  token1_symbol: string;
  token1_amount: number;
  token1_amount_usd: number;
  token1_price_usd: number;
  liquidation_price: number;
  index: number;
  chain: keyof typeof chainIcons;
}

export interface PerpProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: Perp;
  handleToggle: () => void;
  isFirst: boolean;
}

export interface Option {
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from: string;
  to: string;
  tx_hash: string;
  tx_type: string;
  dex: keyof typeof dexIcons;
  direction: string;
  status: string;
  type: string;
  strike_price_usd: number;
  option_price_usd: number;
  amount: number;
  spot_price_usd: number;
  expiry: string;
  asset: string;
  index: number;
  chain: keyof typeof chainIcons;
}

export interface OptionProps {
  isMulti: boolean;
  isOpen: boolean;
  txData: Option;
  handleToggle: () => void;
  isFirst: boolean;
}
