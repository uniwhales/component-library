import React, { FC } from 'react';
import { useTable } from 'react-table';
import { useTheme } from 'styled-components';
import { Styled } from '../../theme';
import { TxTableColumns } from './txTableColumns';

export interface TableItem {
  address: string;
  block: number;
  contract: string;
  dex: string;
  hash: string;
  maker: string;
  pair: string;
  slippage: number;
  source: string;
  swap_num: number
  timestamp: string;
  timestamp_int: number
  total_usd: number;
  transaction: TransactionInterface
  version: string;
  isNew?:boolean;
}
export interface TokenInterface {
  amount: number,
  token: string,
  total_usd: number,
  token_price: number,
  address: number,
}
export interface TxTableItemInterface {
  wsData:TableItem[];
}
export interface TransactionInterface {
  from: TokenInterface,
  for: TokenInterface
}

const Table = Styled.table`
  height: fit-content;
  table-layout: auto;
  width: 100%;
  td {
    padding: 10px 0;
  }
  th:first-child {
    text-align: left;
  }
  td:first-child {
    padding-left: 24px!important;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  td:last-child {
    padding-right: 24px!important;
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  }
  border-collapse: separate;
  border-spacing: 0 16px;

`;
const Tbody = Styled.tbody`
  tr:hover {
    transform: translateY(-2px);
  }
  tr{
     transition: all .2s;
     background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  }
  tr:nth-child(2n){
    transition: all .2s;
    background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  }
`;
const Thead = Styled.thead`
  th{
    color: ${(props) => props.theme.textShades.SHADE_MINUS_2};
    font-weight: 400!important;
    font-size: 14px;
  }
`;

export const TxTableItem:FC<TxTableItemInterface> = ({
  wsData,
}) => {
  const theme:any = useTheme();
  const { data, columns } = TxTableColumns(wsData as TableItem[], theme);
  const {
    getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
  } = useTable({ columns, data });
  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
              >
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
              {row.cells.map((cell) => <td {...cell.getCellProps()}>{cell.render('Cell')}</td>)}
            </tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
