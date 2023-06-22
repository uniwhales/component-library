import React, { } from 'react';
import {
  components,
} from 'react-select';
import { styled } from 'styled-components';
import { Text } from '../../../atoms/texts/text';

import { LogoUrlBase } from '../../../utils/constants';
import { shortenAddressTo11Chars } from '../../../utils/shortenAddress';

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: 30px;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 5px;

  div:nth-child(1) {
    grid-area: 1 / 1 / 4 / 2;
    border-radius: 50%;
  }
  div:nth-child(2) {
    grid-area: 1 / 2 / 2 / 4;
  }
  div:nth-child(3) {
    grid-area: 2 / 2 / 3 / 4;
  }
  div:nth-child(4) {
    grid-area: 3 / 2 / 4 / 4;
  }
`;

const Icon = styled.div<{ address: string }>`
  height: 20px;
  width: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${LogoUrlBase}${props.address}.jpg)`};
  justify-self: flex-end;
  margin-top: 6px;
`;

const OptionEntry = styled.div`
  display: flex;
  gap: 5px;
`;

export const Option = (props:any) => {
  const { data, theme, isSelected } = props;
  const color = isSelected ? theme.colors.system.WHITE : theme.textShades.SHADE_MINUS_2;
  return (
    <components.Option {...props}>
      <OptionGrid>
        <Icon address={data.address} />
        <OptionEntry>
          <Text size="14-Regular" color={color}>
            Symbol:
          </Text>
          <Text size="14-Bold" color={color}>{data.symbol}</Text>
        </OptionEntry>
        <OptionEntry>
          <Text size="14-Regular" color={color}>
            Name:
          </Text>
          <Text size="14-Bold" color={color}>{data.name}</Text>
        </OptionEntry>
        <OptionEntry>
          <Text size="14-Regular" color={color}>
            Address:
          </Text>
          <Text size="14-Bold" color={color}>{shortenAddressTo11Chars(data.address)}</Text>
        </OptionEntry>
      </OptionGrid>
    </components.Option>
  );
};
