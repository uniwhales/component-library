import { chainIcons, dexIcons } from './helpers/icons';

export interface SwapTransactionData {
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from: string;
  to: string;
  tx_hash: string;
  tx_type: 'swap';
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

export interface SwapTransactionProps extends ItemCardProps {
  txData: SwapTransactionData;
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
  tx_type: 'transfer';
  type: string;
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from_label: string;
  to_label: string;
  chain: keyof typeof chainIcons;
}

export interface TransferTransactionProps extends ItemCardProps {
  txData: TransferTransactionData
}

export interface NftTrade {
  tx_hash: string;
  contract: string;
  from: string;
  to: string;
  tx_type: 'nft_trade';
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

export interface NftTradeProps extends ItemCardProps {
  txData: NftTrade;
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
  tx_type: 'nft_transfer';
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

export interface NftTransferProps extends ItemCardProps {
  txData: NftTransfer;
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
  tx_type: ' nft_mint';
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

export interface NftMintProps extends ItemCardProps {
  txData: NftMint;
}

export interface LpPool {
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from: string;
  tx_hash: string;
  tx_type: 'lp';
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

export interface LpPoolProps extends ItemCardProps {
  txData: LpPool;
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
  tx_type: 'reward'
  index: number;
  chain: string
}

export interface RewardProps extends ItemCardProps {
  txData: Reward;
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
  tx_type: 'lending';
  platform: string;
  dex: keyof typeof dexIcons;
  health_factor?: number;
  index: number;
  chain: keyof typeof chainIcons;
}

export interface LendingProps extends ItemCardProps {
  txData: Lending;

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
  tx_type: 'approve_revoke';
  wallet: string;
  chain: keyof typeof chainIcons;
}

export interface ApproveRevokeProps extends ItemCardProps {
  txData: ApproveRevoke;
}

export interface Wrap {
  hash: string;
  timestamp: number;
  block: number;
  tx_type: 'wrap';
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

export interface WrapProps extends ItemCardProps {
  txData: Wrap;
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
  tx_type: 'bridge';
  type: string;
  bridge: string;
  index: number;
  chain: keyof typeof chainIcons;
}

export interface BridgeProps extends ItemCardProps {
  txData: Bridge;
}

export interface Perp {
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from: string;
  to: string;
  tx_hash: string;
  tx_type: 'perp';
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

export interface PerpProps extends ItemCardProps {
  txData: Perp;
}

export interface Option {
  hash: string;
  timestamp: number;
  block: number;
  wallet: string;
  from: string;
  to: string;
  tx_hash: string;
  tx_type: 'option';
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

export interface OptionProps extends ItemCardProps {
  txData: Option;
}

export interface NftSweep {
  tx_hash: string;
  contract: string;
  from: string;
  to: string;
  tx_type: 'nft_sweep';
  index: number;
  tx_from: string;
  tx_to: string;
  marketplace: string;
  nft_address: string;
  nft_token_id: number;
  amount: number;
  nft_symbol: string;
  nft_name: string;
  price: number;
  symbol: string;
  action: string;
  aggregator: string;
  wallet: string;
  timestamp: number;
  block: number;
  chain: keyof typeof chainIcons;
  address: string;
  count: number;
  price_symbol: string;
  buyer: string;
  sellers: string[],
  tokens: any[],
  items: any[],
}

export interface NftSweepProps extends ItemCardProps {
  txData: NftSweep;
}

export interface ItemCardProps {
  isMulti: boolean;
  isOpen: boolean;
  handleToggle: () => void;
  isFirst: boolean;
}
