export interface TokenDetails {
  amount: number,
  token: string,
  total_usd: number,
  token_price: number,
  address: number,
}

export interface TableItem {
  id: number;
  tokenDetails: TokenDetails;
  tokenIcon: string;
  balance: string;
  wrappedBalance: string;
  inUse?: boolean;
}

export interface WalletBalanceList {
  type: 'dashboard' | 'checkout';
  wbData: any;
  selectedRow: string;
  setSelectedRow: (e:any) => void;
}
