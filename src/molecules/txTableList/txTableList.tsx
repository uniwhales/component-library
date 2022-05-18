import React, { FC } from 'react';
import { useTable } from 'react-table';
import { motion, AnimatePresence } from 'framer-motion';
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
  const spring = React.useMemo(
    () => ({
      type: 'spring',
      damping: 50,
      stiffness: 100,
    }),
    [],
  );
  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <motion.th
                {...column.getHeaderProps({
                  // @ts-ignore
                  layoutTransition: spring,
                })}
              >
                {column.render('Header')}
              </motion.th>
            ))}
          </tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        <AnimatePresence>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <motion.tr {...row.getRowProps({
                // @ts-ignore
                layoutTransition: spring,
                exit: { opacity: 0, maxHeight: 0 },
              })}
              >
                {row.cells.map((cell) => (
                  <motion.td {...cell.getCellProps({
                    // @ts-ignore
                    layoutTransition: spring,
                  })}
                  >
                    {cell.render('Cell')}
                  </motion.td>
                ))}
              </motion.tr>
            );
          })}
        </AnimatePresence>
      </Tbody>
    </Table>
  );
};
