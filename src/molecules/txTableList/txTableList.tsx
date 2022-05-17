import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Styled } from '../../theme';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import {
  SushiswapColor, Weth, Usdt, ArrowRightIcon, EtherscanColor,
} from '../../atoms/icons';
// eslint-disable-next-line import/no-cycle
import { CopyToClipBoard, Text } from '../../index';
import { formatNumber } from '../../utils/format';

const ImgGenerator = 'https://logos.uniwhales.io/';

export interface TxTableItemInterface {
  timestamp:string;
  dex:string;
  transaction: TransactionInterface;
  address: string;
  total_usd:number;
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
const Wrapper = Styled.div`
  :nth-child(2n){
    background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_2};
  }
  padding: 8px 24px;
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Section = Styled.div``;
const DateSection = Styled.div`
  display: flex;
  gap:4px;
`;
const SwapWrapper = Styled.div`
  display: flex;
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
const IconArea = Styled.div``;

export const TxTableItem:FC<TxTableItemInterface> = ({
  timestamp, dex, transaction, address, total_usd,
}) => {
  const theme:any = useTheme();
  const customTimestamp:string[] = timestamp.split(' ');
  // const getDexIcon = (dexIndex:string) => {
  //   switch (dexIndex) {
  //     case 'sushiswap':
  //       return <IconWrapper icon={<SushiswapColor />} />;
  //     default:
  //       return <IconWrapper icon={<SushiswapColor />} />;
  //   }
  // };
  const getTransactionIcon = (transIndex:string) => {
    console.log(transIndex);
    switch (transIndex) {
      case 'ETH':
        return <IconWrapper icon={<Weth />} />;
      case 'SUSHI':
        return <IconWrapper icon={<Usdt />} />;
      default: return <IconWrapper icon={<Usdt />} />;
    }
  };
  return (
    <Wrapper>
      <DateSection>
        <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{customTimestamp.at(0)}</Text>
        <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>/</Text>
        <Text textDecoration="underline" size="S-Bold" color={theme.textShades.SHADE_MINUS_2}>{customTimestamp.at(1)}</Text>
      </DateSection>
      <Section>
        <div
          className="token-image"
          style={{
            height: 30,
            width: 30,
            backgroundImage: `url(${ImgGenerator}${dex}.jpg)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            borderRadius: '50%',
          }}
        />
      </Section>
      <Section>
        <SwapWrapper>
          <Block>
            <TextArea textAlign="right">
              <Text size="S-Bold">{transaction.from.token}</Text>
              <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_2}>
                <>
                  {formatNumber(transaction.from.total_usd.toFixed(2))}
                  /
                  {formatNumber(transaction.from.token_price.toFixed(2))}
                </>
              </Text>
            </TextArea>
            <IconArea>{getTransactionIcon(transaction.from.token)}</IconArea>
          </Block>
          <IconWrapper icon={<ArrowRightIcon />} />
          <Block>
            <IconArea>{getTransactionIcon(transaction.for.token)}</IconArea>
            <TextArea textAlign="left">
              <Text size="S-Bold">{transaction.for.token}</Text>
              <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_2}>
                <>
                  {formatNumber(transaction.for.total_usd.toFixed(2))}
                  /
                  {formatNumber(transaction.for.token_price.toFixed(2))}
                </>
              </Text>
            </TextArea>
          </Block>
        </SwapWrapper>
      </Section>
      <Section>
        <Text size="S-Regular">
          {`$${formatNumber(total_usd.toFixed(2))}`}
        </Text>
        <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_2}>(+0.15%)</Text>
      </Section>
      <Section>
        <CopyToClipBoard walletCut text={address} id={address} />
      </Section>
      <Section>
        <IconWrapper icon={<EtherscanColor />} />
      </Section>
    </Wrapper>
  );
};
