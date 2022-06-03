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
  selectedRow: string,
  setSelectedRow: (e: any) => void,
) => {
  const data = useMemo(() => [...wbData], [wbData]);
  const checkoutColumns = useMemo(() => [
    {
      accessor: (row: TableItem) => (
        <Section>
          <IconWrapper icon={<row.token />} />
          <Text
            color={selectedRow === row.tokenName
              ? theme.colors.secondary.TURQUOISE : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenName ? 'S-Bold' : 'S-Regular'}
          >
            {row.tokenName}
          </Text>
        </Section>
      ),
      Header: 'Stablecoin',
    },
    {
      accessor: (row: TableItem) => (
        <Section>
          <Text
            color={selectedRow === row.tokenName
              ? theme.colors.secondary.TURQUOISE : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenName ? 'S-Bold' : 'S-Regular'}
          >
            {row.balance}
          </Text>
        </Section>
      ),
      Header: 'Balance',
    },
    {
      accessor: (row: TableItem) => (
        <Section>
          <Text
            color={selectedRow === row.tokenName
              ? theme.colors.secondary.TURQUOISE : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenName ? 'S-Bold' : 'S-Regular'}
          >
            {row.wrappedBalance}
          </Text>
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
            selected={selectedRow === row.tokenName}
            onClick={(e) => setSelectedRow(e.target.value)}
          />
        </SelectSection>
      ),
      id: 'select',
    },

  ], [selectedRow]);

  const dashboardColumns = useMemo(() => [
    {
      accessor: (row: TableItem) => (
        <Section>
          <IconWrapper icon={<row.token />} />
          <Text
            color={selectedRow === row.tokenName
              ? theme.colors.secondary.TURQUOISE : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenName ? 'S-Bold' : 'S-Regular'}
          >
            {row.tokenName}
          </Text>
        </Section>
      ),
      Header: 'Stablecoin',
    },
    {
      accessor: (row: TableItem) => (
        <Section>
          <Text
            color={selectedRow === row.tokenName
              ? theme.colors.secondary.TURQUOISE : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenName ? 'S-Bold' : 'S-Regular'}
          >
            {row.balance}
          </Text>
        </Section>
      ),
      Header: 'Balance',
    },
    {
      accessor: (row: TableItem) => (
        <Section>
          <Text
            color={selectedRow === row.tokenName
              ? theme.colors.secondary.TURQUOISE : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenName ? 'S-Bold' : 'S-Regular'}
          >
            {row.wrappedBalance}
          </Text>
        </Section>
      ),
      Header: 'Wrapped Balance',
    },
    {
      accessor: (row: TableItem) => {
        const renderIcon = selectedRow === row.tokenName;
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
      accessor: (row: TableItem) => (
        <WrapButtonSection>
          <IconWrapper onClick={() => setSelectedRow(row.tokenName)} icon={<Plus2Color />} />
          <IconWrapper onClick={() => setSelectedRow(row.tokenName)} icon={<MinusColor />} />
        </WrapButtonSection>
      ),
      Header: 'Wrap (+)(-)',
    },
  ], [selectedRow]);

  return { data, checkoutColumns, dashboardColumns };
};
