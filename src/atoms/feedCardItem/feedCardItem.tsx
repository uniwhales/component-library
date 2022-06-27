import React from 'react';
import { IdleTransactionCard } from './idleTransactionCard';
import { LiquidityTransactionCard } from './liquidityTransactionCard';
import { NftTradeCard } from './nftTradeCard';
import { SwapTransactionCard } from './swapTransactionCard';
import { TransferTransactionCard } from './transferTransactionCard';

export const FeedCardItem = (
  {
    isMulti,
    txData,
    handleToggle,
    isOpen,
    isFirst,
  }: any,
) => {
  switch (txData.tx_type) {
    case 'swap':
      return (
        <SwapTransactionCard
          isMulti={isMulti}
          txData={txData}
          isOpen={isOpen}
          isFirst={isFirst}
          handleToggle={handleToggle}
        />
      );
    case 'transfer':
      return (
        <TransferTransactionCard
          isMulti={isMulti}
          txData={txData}
          isOpen={isOpen}
          isFirst={isFirst}
          handleToggle={handleToggle}
        />
      );
    case 'nft_trade':
      return (
        <NftTradeCard
          isMulti={isMulti}
          txData={txData}
          isOpen={isOpen}
          isFirst={isFirst}
          handleToggle={handleToggle}
        />
      );
    case 'lp':
      return (
        <LiquidityTransactionCard
          isMulti={isMulti}
          txData={txData}
          isOpen={isOpen}
          isFirst={isFirst}
          handleToggle={handleToggle}
        />
      );
    default:
      return (
        <IdleTransactionCard />
      );
  }
};
