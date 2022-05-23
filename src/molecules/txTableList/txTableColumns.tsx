import React, { useMemo } from 'react';
import { Text } from '../../atoms/texts/text';
import { formatNumber } from '../../utils/format';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import {
  ArrowRightIcon, BalancerColor,
  BancorColor, CurveColor,
  EtherscanColor, MetaMaskColor, OneInchV3, OneInchV4, OxColor, ParaSwapV4, ParaSwapV5,
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
  isNew?: boolean;
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
  align-items: center;
  gap:4px;
`;
const SectionTotal = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p:nth-child(2){
    color: ${(props) => props.theme.textShades.SHADE_MINUS_2};
  }
`;
const DateSection = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:4px;
  p:nth-child(1){
    color: ${(props) => props.theme.textShades.SHADE_MINUS_2};
  }
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
  p:nth-child(2){
    color: ${(props) => props.theme.textShades.SHADE_MINUS_2};
  }
`;
export const dexIcons:Readonly<{
  '0x': JSX.Element,
  '1inchV3': JSX.Element,
  '1inchV4': JSX.Element,
  BalancerV2: JSX.Element,
  Bancor: JSX.Element,
  CurveV2: JSX.Element,
  MetaMask: JSX.Element,
  ParaSwapP4: JSX.Element,
  ParaSwapP5: JSX.Element,
  SushiSwap: JSX.Element,
  UniswapV2: JSX.Element,
  UniswapV3: JSX.Element,

}> = {
  MetaMask: <MetaMaskColor />,
  UniswapV2: <UniswapV2Color />,
  UniswapV3: <UniswapV3Color />,
  SushiSwap: <Sushiswap />,
  BalancerV2: <BalancerColor />,
  ParaSwapP4: <ParaSwapV4 />,
  ParaSwapP5: <ParaSwapV5 />,
  '1inchV3': <OneInchV3 />,
  '1inchV4': <OneInchV4 />,
  '0x': <OxColor />,
  Bancor: <BancorColor />,
  CurveV2: <CurveColor />,
};

export const TxTableColumns = (wsData :TableItem[], theme:any) => {
  const data = useMemo(() => [...wsData], [wsData]);
  const columns = React.useMemo(
    () => [
      {
        accessor: (row:TableItem) => (
          <DateSection>
            {/* <Text size="S-Regular">{row.timestamp.split(' ').at(0)}</Text> */}
            {/* <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>/</Text> */}
            <Text textDecoration="underline" color={row.isNew ? theme.colors.primary.UWL_BLUE : theme.textShades.SHADE_MINUS_2} size="S-Bold">{row.timestamp.split(' ').at(1)}</Text>
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
        width: 10,
      },
      {
        accessor: (row:TableItem) => (
          <SwapWrapper>
            <Block justifyContent="flex-end">
              <TextArea textAlign="right">
                <Text size="S-Bold">{row.transaction.from.token}</Text>
                <Text size="XS-Regular">
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
        width: 60,
      },
      {
        accessor: (row:TableItem) => (
          <LinkSection>
            <Text size="S-Regular" />
            <a target="_blank" href={`https://etherscan.io/tx/${row.hash}`} rel="noreferrer">
              <IconWrapper cursor="pointer" icon={<EtherscanColor />} />
            </a>
            <Text size="S-Regular" />
          </LinkSection>
        ),
        Header: 'Link',
      },
    ],
    [],
  );
  return { data, columns };
};
