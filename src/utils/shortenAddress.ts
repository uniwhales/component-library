export const shortenAddressTo11Chars = (address: string) => `${address.slice(0, 4)}...${address.slice(address.length - 4)}`;
export const shortenAddressTo35Chars = (address: string) => `${address.slice(0, 20)}...${address.slice(address.length - 12)}`;
