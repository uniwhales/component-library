import React from 'react';
import { useTheme } from 'styled-components';
import { Theme } from '../../theme';
import { RedCross } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { OverlappedIcon } from '../overlappedIcon/overlappedIcon';
import { Text } from '../texts/text';
import {
  MasterContainer,
  TxTypeContainer,
  SecondaryActionContainer,
  CenterContent,
  InfoContainer,
} from './feedCardItem.styles';

export const ErrorTransactionCard = () => {
  const theme = useTheme() as typeof Theme;

  return (
    <MasterContainer>

      <OverlappedIcon
        noIcon
        bgColor={theme.containerAndCardShades.SHADE_PLUS_2}
      />

      <TxTypeContainer>
        <InfoContainer>
          <IconWrapper icon={<RedCross />} />
          <Text size="S-Regular" color={theme.colors.system.RED}>Error loading data</Text>
        </InfoContainer>
      </TxTypeContainer>

      <CenterContent />
      <SecondaryActionContainer />
    </MasterContainer>
  );
};
