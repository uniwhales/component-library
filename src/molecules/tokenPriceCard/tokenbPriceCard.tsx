import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
// eslint-disable-next-line import/no-cycle
import {
  ArrowDownIcon,
  ArrowUpIcon, LinkIcon, Text,
} from '../..';
import { Styled } from '../../theme';
import { formatter } from '../../utils/format';

export interface TokenPriceCardInterface {
  data:any;
  index:number;
  onClick: (data:any) => void;
}
const ImgGenerator = 'https://logos.uniwhales.io/';

export const Wrapper = Styled.div`
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
const Section = Styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;
const SectionColumn = Styled(Section)`
  flex-direction: column;
  align-items: flex-end;
`;
const Block = Styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const TimeSection = Styled.div`
  display: flex;
  gap: 8px;
`;
const TextBlock = Styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const TokenPriceCard:FC<TokenPriceCardInterface> = ({ data, index, onClick }) => {
  const theme:any = useTheme();
  const generateColor = (stat:number) => {
    if (stat.toString().includes('-')) {
      return theme.colors.system.RED;
    }
    return theme.colors.system.GREEN;
  };
  return (
    <Wrapper onClick={() => onClick(data)}>
      <Section>
        <TextBlock>
          {/* <IconWrapper icon={<HeartStandard />} /> */}
          <Text size="H6-Bold">{index + 1}</Text>
          <div
            className="token-image"
            style={{
              height: 30,
              width: 30,
              backgroundImage: `url(${ImgGenerator}${data.address}.jpg)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              borderRadius: '50%',
            }}
          />
          <Text size="M-Bold" color={theme.textShades.SHADE_MINUS_2}>{data.symbol}</Text>
          <a target="_blank" href={`https://etherscan.io/token/${data.token_address}`} rel="noreferrer">
            <IconWrapper cursor="pointer" width="17px" height="17px" icon={<LinkIcon />} />
          </a>
        </TextBlock>
      </Section>
      <SectionColumn>
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
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_1}>1h</Text>
            <Text size="S-Regular" color={generateColor(data.price_change_percentage_1h)}>
              {`${data.price_change_percentage_1h.toFixed(2)}%`}
            </Text>
          </TimeSection>
          <TimeSection>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_1}>1d</Text>
            <Text size="S-Regular" color={generateColor(data.price_change_percentage_24h)}>
              {`${data.price_change_percentage_24h.toFixed(2)}%`}
            </Text>
          </TimeSection>
          <TimeSection>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_1}>7d</Text>
            <Text size="S-Regular" color={generateColor(data.price_change_percentage_7d)}>
              {`${data.price_change_percentage_7d.toFixed(2)}%`}
            </Text>
          </TimeSection>
        </Block>
      </SectionColumn>
    </Wrapper>
  );
};
