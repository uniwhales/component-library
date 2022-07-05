export const getTotal = (
  token0AmountUsd: number,
  token1AmountUsd?: number,
  token2AmountUsd?: number,
) => {
  if (token1AmountUsd && token2AmountUsd) {
    return token0AmountUsd + token1AmountUsd + token2AmountUsd;
  } if (token1AmountUsd && !token2AmountUsd) {
    return token0AmountUsd + token1AmountUsd;
  }
  return token0AmountUsd;
};
