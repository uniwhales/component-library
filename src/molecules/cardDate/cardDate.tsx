import React, { FC } from 'react';
import { Chip } from '../../atoms/chips/chip';
import { ChipProps } from '../../atoms/chips/types';
import { Text } from '../../atoms/texts/text';
import { CardDateContainer } from './styles';
import { CardDateProps } from './types';

export const CardDate: FC<CardDateProps> = ({ state, date, size }) => {
  const secondaryTypeBgColor: ChipProps['secondaryTypeBgColor'] = state === 'Upcoming' ? 'orange' : state === 'New' ? 'green' : 'red';
  return (
    <CardDateContainer size={size}>
      <Chip secondaryTypeBgColor={secondaryTypeBgColor} type="secondary">
        <Text size={size === 'S' ? '10-Bold' : '14-Bold'}>
          {size === 'S' ? state.toUpperCase() : state}
        </Text>
      </Chip>
      <Text size={size === 'S' ? '12-Bold' : '14-Bold'}>{date}</Text>
    </CardDateContainer>
  );
};
