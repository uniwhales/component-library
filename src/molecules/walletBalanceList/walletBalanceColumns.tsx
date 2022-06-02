import React, { useMemo } from 'react';
import {
  Plus2Color, SelectedCheck, MinusColor,
} from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Radio } from '../../atoms/radio/radio';
import { Text } from '../../atoms/texts/text';
import { TableItem } from './types';
import {
  InUseSection, Section, SelectSection, WrapButtonSection,
} from './walletBalance.styles';

export const WalletBalanceColumns = (
  wbData: TableItem[],
  theme: any,
  selected: string,
  setSelected: (e: any) => void,
) => {
  const data = useMemo(() => [...wbData], [wbData]);
  const checkoutColumns = useMemo(() => [
    {
      accessor: (row: TableItem) => (
        <Section>
          <IconWrapper icon={<row.token />} />
          <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">{row.tokenName}</Text>
        </Section>
      ),
      Header: 'Stablecoin',
    },
    {
      accessor: (row: TableItem) => (
        <Section>
          <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">{row.balance}</Text>
        </Section>
      ),
      Header: 'Balance',
    },
    {
      accessor: (row: TableItem) => (
        <Section>
          <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">{row.wrappedBalance}</Text>
        </Section>
      ),
      Header: 'Wrapped Balance',
    },
    {
      accessor: (row: TableItem) => (
        <SelectSection>
          <Radio
            name={row.tokenName}
            disabled={parseInt(row.balance, 10) < 1}
            value={row.tokenName}
            selected={selected === row.tokenName}
            onClick={(e) => setSelected(e.target.value)}
          />
        </SelectSection>
      ),
      id: 'select',
    },

  ], []);

  const dashboardColumns = useMemo(() => [
    {
      accessor: (row: TableItem) => (
        <Section>
          <IconWrapper icon={<row.token />} />
          <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">{row.tokenName}</Text>
        </Section>
      ),
      Header: 'Stablecoin',
    },
    {
      accessor: (row: TableItem) => (
        <Section>
          <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">{row.balance}</Text>
        </Section>
      ),
      Header: 'Balance',
    },
    {
      accessor: (row: TableItem) => (
        <Section>
          <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">{row.wrappedBalance}</Text>
        </Section>
      ),
      Header: 'Wrapped Balance',
    },
    {
      accessor: (row: TableItem) => {
        const renderIcon = row.inUse;
        if (!renderIcon) return null;
        return (
          <InUseSection>
            <IconWrapper icon={<SelectedCheck />} />
          </InUseSection>
        );
      },
      Header: 'in Use',
    },
    {
      accessor: () => (
        <WrapButtonSection>
          <IconWrapper onClick={() => console.log('increment')} icon={<Plus2Color />} />
          <IconWrapper onClick={() => console.log('decrement')} icon={<MinusColor />} />
        </WrapButtonSection>
      ),
      Header: 'Wrap (+)(-)',
    },
  ], []);

  return { data, checkoutColumns, dashboardColumns };
};
