import React from 'react';
import { IdleTransactionCard } from './transactionTypes/idleTransactionCard';
import { LiquidityTransactionCard } from './transactionTypes/liquidityTransactionCard';
import { NftTradeCard } from './transactionTypes/nftTradeCard';
import { SwapTransactionCard } from './transactionTypes/swapTransactionCard';
import { TransferTransactionCard } from './transactionTypes/transferTransactionCard';
import {
  LpPoolProps, NftTradeProps, SwapTransactionProps, TransferTransactionProps,
} from './types';

export const FeedCardItem = (
  {
    isMulti,
    txData,
    handleToggle,
    isOpen,
    isFirst,
  }: SwapTransactionProps | TransferTransactionProps | NftTradeProps | LpPoolProps,
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
