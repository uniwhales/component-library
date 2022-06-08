import React from 'react';
import { ConnectWalletButton } from '../../atoms/connectWalletButton/connectWalletButton';
import { Select } from '../../atoms/inputs/select';
import { Text } from '../../atoms/texts/text';
import { NavContainer, NavBar } from './feedPageNavBar.styles';
import { FeedPageNavBarProps } from './types';

export const FeedPageNavBar = ({
  label,
  selectOptions,
  selectPlaceholder,
  selectOnChange,
  selectValue,
  onConnectClick,
  account,
}: FeedPageNavBarProps) => (
  <NavBar>
    <NavContainer>
      <Text size="S-Regular">{label}</Text>
      <Select
        placeholder={selectPlaceholder}
        options={selectOptions}
        onChange={(e: any) => selectOnChange(e)}
        value={selectValue}
      />
    </NavContainer>
    <NavContainer>
      <ConnectWalletButton onClick={onConnectClick} account={account} />
    </NavContainer>
  </NavBar>
);
