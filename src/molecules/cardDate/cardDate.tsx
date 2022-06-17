import React, { FC } from 'react';
import { Chip } from '../../atoms/chips/chip';
import { ChipProps } from '../../atoms/chips/types';
import { Text } from '../../atoms/texts/text';
import { CardDateContainer } from './styles';
import { CardDateProps } from './types';

export const CardDate: FC<CardDateProps> = ({ state, date }) => {
  const secondaryTypeBgColor: ChipProps['secondaryTypeBgColor'] = state === 'Upcoming' ? 'orange' : state === 'New' ? 'green' : 'red';
  return (
    <CardDateContainer>
      <Chip secondaryTypeBgColor={secondaryTypeBgColor} type="secondary">{state}</Chip>
      <Text size="L-Bold">{date}</Text>
    </CardDateContainer>
  );
};
