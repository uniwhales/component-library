import React from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { WalletIcon } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Select } from '../../atoms/inputs/select';
import { Text } from '../../atoms/texts/text';
import { NavContainer, NavBar } from './feedPageNavBar.styles';
import { FeedPageNavBarProps } from './types';

export const FeedPageNavBar = ({
  label, selectOptions, selectPlaceholder, selectOnChange, selectValue,
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
      <ButtonAtom onClick={() => { }} buttonVariant="secondary">
        <>
          <IconWrapper icon={<WalletIcon />} />
          {' '}
          Connect
        </>
      </ButtonAtom>
    </NavContainer>
  </NavBar>
);
