import React from 'react';
import { ContractInteractionCard } from './transactionTypes/contractInteractionCard';
import { ErrorTransactionCard } from './transactionTypes/errorTransactionCard';
import { LiquidityTransactionCard } from './transactionTypes/liquidityTransactionCard';
import { NftMintCard } from './transactionTypes/nftMintCard';
import { NftSweepCard } from './transactionTypes/nftSweepCard';
import { NftTradeCard } from './transactionTypes/nftTradeCard';
import { SwapTransactionCard } from './transactionTypes/swapTransactionCard';
import { TransferTransactionCard } from './transactionTypes/transferTransactionCard';
import {
  ItemCardProps,
} from './types';

export const FeedCardItem = (
  {
    isMulti,
    txData,
    handleToggle,
    isOpen,
    isFirst,
  }: ItemCardProps,
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
    case 'nft_sweep':
      return (
        <NftSweepCard
          isMulti={isMulti}
          txData={txData}
          isOpen={isOpen}
          isFirst={isFirst}
          handleToggle={handleToggle}
        />
      );
    case 'nft_mint':
      return (
        <NftMintCard
          isMulti={isMulti}
          txData={txData}
          isOpen={isOpen}
          isFirst={isFirst}
          handleToggle={handleToggle}
        />
      );
    case 'contract_interaction':
      return (
        <ContractInteractionCard
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
        <ErrorTransactionCard txData={txData} />
      );
  }
};
