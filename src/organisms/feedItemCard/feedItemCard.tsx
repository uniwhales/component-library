import React from 'react';
import { useTheme } from 'styled-components';
import { Identicon, Kebab } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Text } from '../../atoms/texts/text';
import { getDate } from '../../utils/getDate';
import {
  FeedCardHeader, MainCardContent, Wrapper, DateTime,
} from './feedItemCard.styles';
import { FeedItemCardProps } from './types';

export const FeedItemCard = ({ children, datetime }: FeedItemCardProps) => {
  const theme: any = useTheme();
  return (
    <Wrapper>
      <IconWrapper icon={<Identicon />} />
      <MainCardContent>
        <FeedCardHeader>
          <Text size="M-Regular">Label Name</Text>
          <DateTime>
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>
              {getDate(datetime).date}
            </Text>

            /

            <Text size="S-Bold" color={theme.textShades.SHADE_MINUS_2} textDecoration="underline">{getDate(datetime).time}</Text>
          </DateTime>
        </FeedCardHeader>
        {children}
      </MainCardContent>
      <IconWrapper cursor="pointer" icon={<Kebab />} />
    </Wrapper>
  );
};
