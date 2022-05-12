export const shortenAddressTo11Chars = (address: string) => `${address.slice(0, 4)}...${address.slice(address.length - 4)}`;
export const shortenAddressTo35Chars = (address: string) => `${address.slice(0, 20)}...${address.slice(address.length - 12)}`;
// 0x1f9840a85d5af5bf1d...addc4201f984
