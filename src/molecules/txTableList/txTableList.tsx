import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Styled } from '../../theme';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import {
  SushiswapColor, Weth, Usdt, ArrowRightIcon, EtherscanColor,
} from '../../atoms/icons';
import { CopyToClipBoard, Text } from '../..';

export interface TxTableItemInterface {
  data:any
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

export const TxTableItem:FC<TxTableItemInterface> = ({ data }) => {
  const theme:any = useTheme();
  const customTimestamp = data.timestamp.split(' ');
  const getDexIcon = (dexIndex:string) => {
    console.log(dexIndex);
    switch (dexIndex) {
      case 'sushiswap':
        return <IconWrapper icon={<SushiswapColor />} />;
      default:
        return <IconWrapper icon={<SushiswapColor />} />;
    }
  };
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
      <Section>{getDexIcon(data.dex)}</Section>
      <Section>
        <SwapWrapper>
          <Block>
            <TextArea textAlign="right">
              <Text size="S-Bold">{data.transaction.from.token}</Text>
              <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_2}>
                <>
                  {data.transaction.from.total_usd.toFixed(1)}
                  /
                  {data.transaction.from.token_price.toFixed(1)}
                </>
              </Text>
            </TextArea>
            <IconArea>{getTransactionIcon(data.transaction.from.token)}</IconArea>
          </Block>
          <IconWrapper icon={<ArrowRightIcon />} />
          <Block>
            <IconArea>{getTransactionIcon(data.transaction.for.token)}</IconArea>
            <TextArea textAlign="left">
              <Text size="S-Bold">{data.transaction.for.token}</Text>
              <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_2}>
                <>
                  {data.transaction.for.total_usd.toFixed(1)}
                  /
                  {data.transaction.for.token_price.toFixed(1)}
                </>
              </Text>
            </TextArea>
          </Block>
        </SwapWrapper>
      </Section>
      <Section>
        <Text size="S-Regular">Amount</Text>
        <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_2}>(+/-%00)</Text>
      </Section>
      <Section>
        <CopyToClipBoard walletCut text={data.address} id={data.address} />
      </Section>
      <Section>
        <IconWrapper icon={<EtherscanColor />} />
      </Section>
    </Wrapper>
  );
};
