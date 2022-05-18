import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Styled } from '../../theme';
// eslint-disable-next-line import/no-cycle
import { Text } from '../..';
import { formatter } from '../../utils/format';
import { dexIcons } from '../txTableList/txTableColumns';

export interface TokenPoolCardInterface {
  data: CardInterface
  index?:number;
}
export interface CardInterface {
  address: string;
  token0: string;
  token1: string;
  token0_address: string;
  token1_address: string;
  volume_usd:number;
  liquidity: number;
  dex: string;
  token0_image: string;
  token1_image: string;
}
const Wrapper = Styled.div`
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  border-radius: 12px;
  transition: all .2s;
  max-width: 500px;
  height: 144px;
  width: 100%;
  padding: 24px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  :hover {
    transform: translateY(-2px);
  }
  img{
    max-width: 32px;
    border-radius: 50%;
  }
`;
const Section = Styled.div`
  display: flex;
  justify-content: space-between;
`;
const TokenInfo = Styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const DexInfo = Styled.div``;
const TotalLiquidity = Styled.div``;
const Volume = Styled.div``;
const ImgBlock = Styled.div`
  img:nth-child(1){
    margin-right: -16px;
  }
`;
const TextBlock = Styled.div`
  display: flex;
  align-items: center;
`;

export const TokenPoolCard:FC<TokenPoolCardInterface> = (
  { index, data },
) => {
  const theme:any = useTheme();
  return (
    <Wrapper>
      <Section>
        <TokenInfo>
          <Text color={theme.textShades.SHADE_MINUS_3} size="H6-Bold">{index}</Text>
          <ImgBlock>
            <img src={data.token0_image} alt="token0_image" />
            <img src={data.token1_image} alt="token1_image" />
          </ImgBlock>
          <TextBlock>
            <Text color={theme.textShades.SHADE_MINUS_2} size="M-Bold">{data.token0}</Text>
            <Text color={theme.textShades.SHADE_MINUS_2} size="M-Bold">+</Text>
            <Text color={theme.textShades.SHADE_MINUS_2} size="M-Bold">{data.token1}</Text>
          </TextBlock>
        </TokenInfo>
        <DexInfo>
          {(dexIcons as any)[data.dex]}
        </DexInfo>
      </Section>
      <Section>
        <TotalLiquidity>
          <Text color={theme.textShades.SHADE_MINUS_1} size="S-Regular">Total Liquidity</Text>
          <Text color={theme.textShades.SHADE_MINUS_2} size="M-Bold">{formatter(false).format(data.liquidity)}</Text>
        </TotalLiquidity>
        <Volume>
          <Text color={theme.textShades.SHADE_MINUS_1} size="S-Regular">24 Hour  Volume</Text>
          <Text color={theme.textShades.SHADE_MINUS_2} size="M-Bold">{formatter(false).format(data.volume_usd)}</Text>
        </Volume>
      </Section>
    </Wrapper>
  );
};
