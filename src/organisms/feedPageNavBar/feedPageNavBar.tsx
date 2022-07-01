import React from 'react';
import { useTheme } from 'styled-components';
import { ConnectWalletButton } from '../../atoms/connectWalletButton/connectWalletButton';
import { IdenticonComponent } from '../../atoms/identicon/Identicon';
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
  plan,
  following,
}: FeedPageNavBarProps) => {
  const theme: any = useTheme();
  return (
    <NavBar>
      <NavContainer>
        <Text size="S-Regular">{label}</Text>
        <Select
          placeholder={selectPlaceholder}
          options={selectOptions}
          onChange={selectOnChange}
          value={selectValue}
          isXL
          readOnly={false}
          isMulti={false}
        />
        <Text href="TODO-ADD-LINK" size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>
          <>
            Following:
            {' '}
            {following}
          </>
        </Text>
      </NavContainer>
      <NavContainer>
        {account && (
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_1}>
            <>
              Plan:
              {' '}
              {plan}
            </>
          </Text>
        )}
        <ConnectWalletButton onClick={onConnectClick} account={account} />
        {account && (
          <IdenticonComponent id={account} containerSize="36px" iconSize={24} />
        )}
      </NavContainer>
    </NavBar>
  );
};
