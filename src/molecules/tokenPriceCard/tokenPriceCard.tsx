import React, { FC, useState } from 'react';
import { styled, useTheme } from 'styled-components';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import {
  ArrowDownIcon,
  ArrowUpIcon, LinkIcon, HeartStandard,
} from '../../atoms/icons';
import { Text } from '../../atoms/texts/text';

import { LogoUrlBase } from '../../utils/constants';
import { formatter } from '../../utils/format';

export type TokenPriceCardData = {
  symbol: string,
  name: string,
  address: string,
  price: number,
  price_change_percentage_1h: number,
  price_change_percentage_24h: number,
  price_change_percentage_7d: number,
};

export interface TokenPriceCardInterface {
  data:any;
  index:number;
  onClick: (data: TokenPriceCardData) => void;
  onHeartClick?: (data: TokenPriceCardData) => void;
  isFavorite?: boolean
}

export const TokenPriceCardWrapper = styled.div`
  background: ${(props) => props.theme.containerAndCardShades.SHADE_PLUS_3};
  border-radius: 12px;
  transition: all .2s;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  width: 100%;
  padding: 28px 24px;
  box-sizing: border-box;
  :hover {
    transform: translateY(-2px);
  }
`;
const Section = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;
const SectionColumn = styled(Section)`
  flex-direction: column;
  align-items: flex-end;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const TimeSection = styled.div`
  display: flex;
  gap: 8px;
`;
const TextBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
const ClickBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TokenPriceCard:FC<TokenPriceCardInterface> = ({
  data, index, onClick, onHeartClick, isFavorite,
}) => {
  const theme:any = useTheme();
  const generateColor = (stat:number) => {
    if (stat.toString().includes('-')) {
      return theme.colors.system.RED;
    }
    return theme.colors.system.GREEN;
  };

  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <TokenPriceCardWrapper>
      <Section>
        <TextBlock>
          <IconWrapper
            key={index}
            cursor="pointer"
            fill={(isFavorite && !isHighlighted) || (!isFavorite && isHighlighted)
              ? theme.colors.primary.MAIN_BLUE
              : (isFavorite && isHighlighted) || (!isFavorite && !isHighlighted)
                ? theme.textShades.SHADE_MINUS_1
                : theme.textShades.SHADE_MINUS_1}
            icon={<HeartStandard />}
            onClick={() => onHeartClick && onHeartClick(data)}
            onMouseEnter={() => setIsHighlighted(true)}
            onMouseLeave={() => setIsHighlighted(false)}
          />
          <ClickBlock onClick={() => onClick(data)}>
            <Text size="H6-Bold">{index + 1}</Text>
            <div
              className="token-image"
              style={{
                height: 30,
                width: 30,
                backgroundImage: `url(${LogoUrlBase}${data.address}.jpg)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                borderRadius: '50%',
                backgroundPositionY: 'center',
              }}
            />
            <Text size="14-Bold" color={theme.textShades.SHADE_MINUS_2}>{data.symbol}</Text>
          </ClickBlock>
          <a target="_blank" href={`https://etherscan.io/token/${data.address}`} rel="noreferrer">
            <IconWrapper cursor="pointer" width="17px" height="17px" icon={<LinkIcon />} />
          </a>
        </TextBlock>
      </Section>
      <SectionColumn onClick={() => onClick(data)}>
        <Block>
          <Text size="H4-Regular" color={theme.textShades.SHADE_MINUS_2}>
            <>
              {formatter(true).format(data.price)}
            </>
          </Text>
          <IconWrapper
            width="21px"
            height="21px"
            fill={generateColor(data.price_change_percentage_1h)}
            icon={data.price_change_percentage_1h.toString().includes('-')
              ? <ArrowDownIcon /> : <ArrowUpIcon />}
          />
        </Block>
        <Block>
          <TimeSection>
            <Text size="14-Regular" color={theme.textShades.SHADE_MINUS_1}>1h</Text>
            <Text size="14-Regular" color={generateColor(data.price_change_percentage_1h)}>
              {`${data.price_change_percentage_1h.toFixed(2)}%`}
            </Text>
          </TimeSection>
          <TimeSection>
            <Text size="14-Regular" color={theme.textShades.SHADE_MINUS_1}>1d</Text>
            <Text size="14-Regular" color={generateColor(data.price_change_percentage_24h)}>
              {`${data.price_change_percentage_24h.toFixed(2)}%`}
            </Text>
          </TimeSection>
          <TimeSection>
            <Text size="14-Regular" color={theme.textShades.SHADE_MINUS_1}>7d</Text>
            <Text size="14-Regular" color={generateColor(data.price_change_percentage_7d)}>
              {`${data.price_change_percentage_7d.toFixed(2)}%`}
            </Text>
          </TimeSection>
        </Block>
      </SectionColumn>
    </TokenPriceCardWrapper>
  );
};
