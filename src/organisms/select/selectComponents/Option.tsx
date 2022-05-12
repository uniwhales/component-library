import React, { } from 'react';
import {
  components,
} from 'react-select';
import { IconWrapper } from '../../../atoms/icons/iconWrapper';
import { Text } from '../../../atoms/texts/text';
import { Styled } from '../../../theme';
import { shortenAddressTo11Chars } from '../../../utils/shortenAddress';

const OptionGrid = Styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  div:nth-child(1) {
    grid-area: 1 / 1 / 4 / 2;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
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

const OptionEntry = Styled.div`
  display: flex;
  gap: 5px;
`;

export const Option = (props:any) => {
  const { data, theme } = props;

  return (
    <div>
      <components.Option {...props}>
        <OptionGrid>
          <IconWrapper icon={data.icon} />
          <OptionEntry>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>
              Symbol:
            </Text>
            <Text size="S-Bold" color={theme.textShades.SHADE_MINUS_2}>{data.symbol}</Text>
          </OptionEntry>
          <OptionEntry>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>
              Name:
            </Text>
            <Text size="S-Bold" color={theme.textShades.SHADE_MINUS_2}>{data.name}</Text>
          </OptionEntry>
          <OptionEntry>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>
              Address:
            </Text>
            <Text size="S-Bold" color={theme.textShades.SHADE_MINUS_2}>{shortenAddressTo11Chars(data.address)}</Text>
          </OptionEntry>
        </OptionGrid>
      </components.Option>
    </div>
  );
};
