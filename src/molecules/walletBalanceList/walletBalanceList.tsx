import React, { FC } from 'react';
import { useTable } from 'react-table';
import { useTheme } from 'styled-components';
import { TableItem, WalletBalanceList } from './types';
import {
  Table, Thead, Trow,
} from './walletBalance.styles';
import { WalletBalanceColumns } from './walletBalanceColumns';

export const WalletBalanceListItem: FC<WalletBalanceList> = ({
  wbData, type, selectedRow, setSelectedRow,
}) => {
  const theme: any = useTheme();
  const { data, checkoutColumns, dashboardColumns } = WalletBalanceColumns(
    wbData as TableItem[],
    theme,
    selectedRow,
    setSelectedRow,
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
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const { token } = row.original.tokenDetails;
          return (
            <Trow
              isSelected={selectedRow === token}
              {...row.getRowProps()}
            >
              {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell', { selectedRow, setSelectedRow })}</td>)}
            </Trow>
          );
        })}
      </tbody>
    </Table>
  );
};
