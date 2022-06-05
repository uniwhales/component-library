import { Dai, Usdc, Usdt } from '../../atoms/icons';

export const mockData = [
  {
    id: 1,
    tokenDetails: {
      amount: 1.2345,
      token: 'DAI',
      total_usd: 81303.625759,
      token_price: 1,
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    tokenIcon: Dai,
    balance: '10,567.00',
    wrappedBalance: '0000.0000',
  },
  {
    id: 2,
    tokenDetails: {
      amount: 81303.625759,
      token: 'USDC',
      total_usd: 81303.625759,
      token_price: 1,
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    tokenIcon: Usdc,
    balance: '10,567.00',
    wrappedBalance: '0000.0000',
  },
  {
    id: 3,
    tokenDetails: {
      amount: 81303.625759,
      token: 'USDT',
      total_usd: 81303.625759,
      token_price: 1,
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    tokenIcon: Usdt,
    balance: '10,567.00',
    wrappedBalance: '0000.0000',
  },
];
