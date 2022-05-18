import React, { useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../../atoms/texts/text';
import { formatNumber } from '../../utils/format';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import {
  ArrowRightIcon, BalancerColor,
  EtherscanColor, OneInchV3, OneInchV4, ParaSwapV4, ParaSwapV5,
  PolygonColor,
  Sushiswap,
  UniswapV2Color,
  UniswapV3Color,
} from '../../atoms/icons';
import { CopyToClipBoard } from '../copyToClipBoard/copyToClipBoard';
import { Styled } from '../../theme';

const ImgGenerator = 'https://logos.uniwhales.io/';

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

interface TokenInterface {
  amount: number,
  token: string,
  total_usd: number,
  token_price: number,
  address: number,
}
interface TransactionInterface {
  from: TokenInterface,
  for: TokenInterface
}

const Section = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
const LinkSection = Styled.div`
  display: flex;
  justify-content: center;
`;
const SectionTotal = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
const Block = Styled.div<{ justifyContent: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'center'};
  flex: 1;
  gap: 9px;
`;
const TextArea = Styled.div<{ textAlign: string }>`
  display: flex;
  text-align: ${(props) => props.textAlign};
  flex-direction: column;
`;

const dexIcons:Readonly<{
  uniswap_v2: JSX.Element,
  uniswap_v3: JSX.Element,
  sushiswap: JSX.Element,
  polygon: JSX.Element,
  balancer: JSX.Element,
  paraswap_v4:JSX.Element,
  paraswap_v5:JSX.Element,
  '1inch_v3':JSX.Element,
  '1inch_v4':JSX.Element,
}> = {
  uniswap_v2: <UniswapV2Color />,
  uniswap_v3: <UniswapV3Color />,
  sushiswap: <Sushiswap />,
  polygon: <PolygonColor />,
  balancer: <BalancerColor />,
  paraswap_v4: <ParaSwapV4 />,
  paraswap_v5: <ParaSwapV5 />,
  '1inch_v3': <OneInchV3 />,
  '1inch_v4': <OneInchV4 />,
};

export const TxTableColumns = (wsData :TableItem[]) => {
  const data = useMemo(() => [...wsData], [wsData]);
  const theme:any = useTheme();
  const columns = React.useMemo(
    () => [
      {
        accessor: (row:TableItem) => (
          <DateSection>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{row.timestamp.split(' ').at(0)}</Text>
            <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>/</Text>
            <Text textDecoration="underline" size="S-Bold" color={theme.textShades.SHADE_MINUS_2}>{row.timestamp.split(' ').at(1)}</Text>
          </DateSection>
        ),
        Header: 'Time (Local)',
      },
      {
        accessor(row:TableItem) {
          return (
            <Section>
              {(dexIcons as any)[row.dex]}
            </Section>
          );
        },
        Header: 'DEX',
      },
      {
        accessor: (row:TableItem) => (
          <SwapWrapper>
            <Block justifyContent="flex-end">
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
            <Block justifyContent="flex-start">
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
        accessor: (row:TableItem) => (
          <SectionTotal>
            <Text size="S-Regular">
              {`$${formatNumber(row.total_usd.toFixed(2))}`}
            </Text>
            <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_2}>
              {`(${row.slippage.toFixed(2)}%)`}
            </Text>
          </SectionTotal>
        ),
        Header: 'Average Total',
      },
      {
        accessor: (row:TableItem) => (
          <Section>
            <CopyToClipBoard walletCut text={row.address} id={row.hash} />
          </Section>
        ),
        Header: 'Address',
      },
      {
        accessor: (row:TableItem) => (
          <LinkSection>
            <a target="_blank" href={`https://etherscan.io/tx/${row.hash}`} rel="noreferrer">
              <IconWrapper cursor="pointer" icon={<EtherscanColor />} />
            </a>
          </LinkSection>
        ),
        Header: 'Link',
      },
    ],
    [],
  );
  return { data, columns };
};
