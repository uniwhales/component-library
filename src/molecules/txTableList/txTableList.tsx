import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { useTable } from 'react-table';
import { Styled } from '../../theme';
import {
  Weth, Usdt, ArrowRightIcon, EtherscanColor,
} from '../../atoms/icons';
import { IconWrapper, Text, CopyToClipBoard } from '../../index';
import { formatNumber } from '../../utils/format';

const ImgGenerator = 'https://logos.uniwhales.io/';

export interface TxTableItemInterface {
  wsData:any;
}
export interface TransactionInterface {
  from: TokenInterface,
  for: TokenInterface
}
export interface TokenInterface {
  amount: number,
  token: string,
  total_usd: number,
  token_price: number,
  address: number,
}
const Table = Styled.table`
  td:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  td:last-child {
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
  }
  border-collapse: collapse;
`;
const Tbody = Styled.tbody`
  height: 64px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  
  // :nth-child(2n){
  //   background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  // }
`;
const Thead = Styled.thead`
  //text-align: left;
  th{
    color: ${(props) => props.theme.textShades.SHADE_MINUS_2};
    font-weight: 400!important;
    font-size: 14px;
  }
`;
const Section = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
const DateSection = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:4px;
`;
const SwapWrapper = Styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`;
const Block = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 9px;
`;
const TextArea = Styled.div<{ textAlign: string }>`
  display: flex;
  text-align: ${(props) => props.textAlign};
  flex-direction: column;
`;
export const TxTableItem:FC<TxTableItemInterface> = ({
  wsData,
}) => {
  const theme:any = useTheme();
  // table
  const data = React.useMemo(() => [...wsData], [wsData]);
  const columns = React.useMemo(
    () => [
      {
        accessor: (row:any) => (
          <DateSection>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{row.timestamp.split(' ').at(0)}</Text>
            <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>/</Text>
            <Text textDecoration="underline" size="S-Bold" color={theme.textShades.SHADE_MINUS_2}>{row.timestamp.split(' ').at(1)}</Text>
          </DateSection>
        ),
        Header: 'Time (Local)',
      },
      {
        accessor(row: any) {
          return (
            <Section>
              <div
                className="token-image"
                style={{
                  height: 30,
                  width: 30,
                  backgroundImage: `url(${ImgGenerator}${row.dex}.jpg)`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '50%',
                }}
              />
            </Section>
          );
        },
        Header: 'DEX',
      },
      {
        accessor: (row:any) => (
          <SwapWrapper>
            <Block>
              <TextArea textAlign="right">
                <Text size="S-Bold">{row.transaction.from.token}</Text>
                <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_2}>
                  <>
                    {formatNumber(row.transaction.from.total_usd.toFixed(2))}
                    /
                    {formatNumber(row.transaction.from.token_price.toFixed(2))}
                  </>
                </Text>
              </TextArea>
              <div
                className="token-image"
                style={{
                  height: 30,
                  width: 30,
                  backgroundImage: `url(${ImgGenerator}${row.transaction.from.address}.jpg)`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '50%',
                }}
              />
            </Block>
            <IconWrapper icon={<ArrowRightIcon />} />
            <Block>
              <div
                className="token-image"
                style={{
                  height: 30,
                  width: 30,
                  backgroundImage: `url(${ImgGenerator}${row.transaction.for.address}.jpg)`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '50%',
                }}
              />
              <TextArea textAlign="left">
                <Text size="S-Bold">{row.transaction.for.token}</Text>
                <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_2}>
                  <>
                    {formatNumber(row.transaction.for.total_usd.toFixed(2))}
                    /
                    {formatNumber(row.transaction.for.token_price.toFixed(2))}
                  </>
                </Text>
              </TextArea>
            </Block>
          </SwapWrapper>
        ),
        Header: 'Swap for',
      },
      {
        accessor: (row:any) => (
          <Section>
            <Text size="S-Regular">
              {`$${formatNumber(row.total_usd.toFixed(2))}`}
            </Text>
            <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_2}>
              {`(${row.slippage.toFixed(2)}%)`}
            </Text>
          </Section>
        ),
        Header: 'Average Total',
      },
      {
        accessor: (row:any) => (
          <Section>
            <CopyToClipBoard walletCut text={row.address} id={row.address} />
          </Section>
        ),
        Header: 'Address',
      }, {
        accessor: (row:any) => (
          <Section>
            <a target="_blank" href={`https://etherscan.io/tx/${row.hash}`} rel="noreferrer">
              <IconWrapper cursor="pointer" icon={<EtherscanColor />} />
            </a>
          </Section>
        ),
        Header: 'Link',
      },
    ],
    [],
  );
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
