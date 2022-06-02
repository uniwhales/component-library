import React, { FC, useState } from 'react';
import { useTable } from 'react-table';
import { useTheme } from 'styled-components';
import { TableItem } from './types';
import { Table, Tbody, Thead } from './walletBalance.styles';
import { WalletBalanceColumns } from './walletBalanceColumns';

export const WalletBalanceListItem: FC<any> = ({ wsData }) => {
  const [selected, setSelected] = useState<null | string>(null);
  const theme: any = useTheme();
  const { data, columns } = WalletBalanceColumns(wsData as TableItem[], theme);
  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } = useTable({ columns, data });
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
