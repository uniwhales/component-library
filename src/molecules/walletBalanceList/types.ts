export interface TableItem {
  id: number;
  token: any;
  tokenName: string;
  balance: string;
  wrappedBalance: string;
  inUse?: boolean;
}

export interface WalletBalanceList {
  type: 'dashboard' | 'checkout';
  wbData: any;
}
