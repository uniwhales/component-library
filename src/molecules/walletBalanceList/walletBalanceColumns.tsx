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
          <IconWrapper icon={<row.tokenIcon />} />
          <Text
            color={selectedRow === row.tokenDetails.token
              ? theme.colors.secondary.TEAL : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenDetails.token ? 'S-Bold' : 'S-Regular'}
          >
            {row.tokenDetails.token}
          </Text>
        </Section>
      ),
      Header: 'Stablecoin',
    },
    {
      accessor: (row: TableItem) => (
        <Section>
          <Text
            color={selectedRow === row.tokenDetails.token
              ? theme.colors.secondary.TEAL : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenDetails.token ? 'S-Bold' : 'S-Regular'}
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
            color={selectedRow === row.tokenDetails.token
              ? theme.colors.secondary.TEAL : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenDetails.token ? 'S-Bold' : 'S-Regular'}
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
            name={row.tokenDetails.token}
            disabled={parseInt(row.balance, 10) < 1}
            value={row.tokenDetails.token}
            selected={selectedRow === row.tokenDetails.token}
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
          <IconWrapper icon={<row.tokenDetails.token />} />
          <Text
            color={selectedRow === row.tokenDetails.token
              ? theme.colors.secondary.TEAL : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenDetails.token ? 'S-Bold' : 'S-Regular'}
          >
            {row.tokenDetails.token}
          </Text>
        </Section>
      ),
      Header: 'Stablecoin',
    },
    {
      accessor: (row: TableItem) => (
        <Section>
          <Text
            color={selectedRow === row.tokenDetails.token
              ? theme.colors.secondary.TEAL : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenDetails.token ? 'S-Bold' : 'S-Regular'}
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
            color={selectedRow === row.tokenDetails.token
              ? theme.colors.secondary.TEAL : theme.textShades.SHADE_MINUS_2}
            size={selectedRow === row.tokenDetails.token ? 'S-Bold' : 'S-Regular'}
          >
            {row.wrappedBalance}
          </Text>
        </Section>
      ),
      Header: 'Wrapped Balance',
    },
    {
      accessor: (row: TableItem) => {
        const renderIcon = selectedRow === row.tokenDetails.token;
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
          <IconWrapper
            onClick={() => setSelectedRow(row.tokenDetails.token)}
            icon={<Plus2Color />}
          />
          <IconWrapper
            onClick={() => setSelectedRow(row.tokenDetails.token)}
            icon={<MinusColor />}
          />
        </WrapButtonSection>
      ),
      Header: 'Wrap (+)(-)',
    },
  ], [selectedRow]);

  return { data, checkoutColumns, dashboardColumns };
};
