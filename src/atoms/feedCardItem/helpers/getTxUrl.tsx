export const getTxUrl = (hash: string, chain: string) => {
  switch (chain) {
    case 'ethereum':
      return `https://etherscan.io/tx/${hash}`;
    case 'bsc':
      return `https://bscscan.com/tx/${hash}`;
    case 'polygon':
      return `https://polygonscan.com/tx/${hash}`;
    case 'fantom':
      return `https://ftmscan.com/tx/${hash}`;
    case 'arbitrum':
      return `https://arbiscan.io/tx/${hash}`;
    case 'avalanche':
      return `https://snowtrace.io/tx/${hash}`;
    case 'boba':
      return `https://blockexplorer.boba.network/tx/${hash}`;
    case 'metis':
      return `https://andromeda-explorer.metis.io/tx/${hash}`;
    case 'aurora':
      return `https://aurorascan.dev/tx/${hash}`;
    case 'optimism':
      return `https://optimistic.etherscan.io/tx/${hash}`;
    case 'evmos':
      return `https://evm.evmos.org/tx/${hash}`;
    default:
      return `https://etherscan.io/tx/${hash}`;
  }
};
