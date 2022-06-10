import React from 'react';
import { useTheme } from 'styled-components';
import { Identicon, Kebab } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { MasterFeedItemTx } from '../../atoms/masterFeedItemTx/masterFeedItemTx';
import { Text } from '../../atoms/texts/text';
import { getDate } from '../../utils/getDate';
import {
  FeedCardHeader, MainCardContent, TransactionWrapper, Wrapper, DateTime,
} from './feedItemCard.styles';

export const FeedItemCard = () => {
  const theme: any = useTheme();
  return (
    <Wrapper>
      <IconWrapper icon={<Identicon />} />
      <MainCardContent>
        <FeedCardHeader>
          <Text size="M-Regular">Label Name</Text>
          <DateTime>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>
              {getDate(1654701292).date}
            </Text>

            /

            <Text size="S-Bold" color={theme.textShades.SHADE_MINUS_2} textDecoration="underline">{getDate(1654701292).time}</Text>
          </DateTime>
        </FeedCardHeader>
        <TransactionWrapper>
          <MasterFeedItemTx isOpen={false} isMulti={false} />
          <MasterFeedItemTx isOpen={false} isMulti={false} />
          <MasterFeedItemTx isOpen={false} isMulti={false} />
        </TransactionWrapper>
      </MainCardContent>
      <IconWrapper cursor="pointer" icon={<Kebab />} />
    </Wrapper>
  );
};
