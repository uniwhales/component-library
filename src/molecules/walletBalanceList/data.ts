import { Dai, Usdc, Usdt } from '../../atoms/icons';

export const mockData = [
  {
    id: 1,
    token: Dai,
    tokenName: 'DAI',
    balance: '10,567.00',
    wrappedBalance: '0000.0000',
    inUse: true,
  },
  {
    id: 2,
    token: Usdt,
    tokenName: 'USDT',
    balance: '8,324.00',
    wrappedBalance: '0000.0000',
    inUse: false,
  },
  {
    id: 3,
    token: Usdc,
    tokenName: 'USDC',
    balance: '0000.0000',
    wrappedBalance: '0000.0000',
    inUse: false,
  },

];
