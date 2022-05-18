import React, { FC } from 'react';
import { useTable } from 'react-table';
import { Styled } from '../../theme';
import { TxTableColumns } from './txTableColumns';

interface TableItem {
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
}
export interface TokenInterface {
  amount: number,
  token: string,
  total_usd: number,
  token_price: number,
  address: number,
}
interface TxTableItemInterface {
  wsData:TableItem[];
}
interface TransactionInterface {
  from: TokenInterface,
  for: TokenInterface
}

const Table = Styled.table`
  td{
    height: 64px;
  };
  td:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  td:last-child {
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  }
  border-collapse: separate;
  border-spacing: 0 20px;
`;
const Tbody = Styled.tbody`
  tr{
    background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  }

  tr:nth-child(2n){
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
  const { data, columns } = TxTableColumns(wsData as TableItem[]);
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
