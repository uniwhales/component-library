import React, { FC, useState } from 'react';
import { useTable } from 'react-table';
import { useTheme } from 'styled-components';
import { TableItem, WalletBalanceList } from './types';
import { Table, Tbody, Thead } from './walletBalance.styles';
import { WalletBalanceColumns } from './walletBalanceColumns';

export const WalletBalanceListItem: FC<WalletBalanceList> = ({ wbData, type }) => {
  const [selected, setSelected] = useState<string>('');
  const theme: any = useTheme();
  const { data, checkoutColumns, dashboardColumns } = WalletBalanceColumns(
    wbData as TableItem[],
    theme,
    selected,
    setSelected,
  );
  const selectType = type === 'checkout' ? checkoutColumns : dashboardColumns;
  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } = useTable({ columns: selectType, data });
  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell', { selected, setSelected })}</td>)}
            </tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
