import React from 'react';
import { useTheme } from 'styled-components';
import { Theme } from '../../../theme';
import { RefreshIcon } from '../../icons';
import { IconWrapper } from '../../icons/iconWrapper';
import { OverlappedIcon } from '../../overlappedIcon/overlappedIcon';
import { Text } from '../../texts/text';
import {
  MasterContainer,
  TxTypeContainer,
  SecondaryActionContainer,
  CenterContent,
  InfoContainer,
  TxTypeWrapper,
} from '../feedCardItem.styles';

export const IdleTransactionCard = () => {
  const theme = useTheme() as typeof Theme;

  return (
    <MasterContainer>
      <TxTypeWrapper>
        <OverlappedIcon
          noIcon
          bgColor={theme.containerAndCardShades.SHADE_PLUS_2}
        />
        <TxTypeContainer>
          <InfoContainer>
            <IconWrapper icon={<RefreshIcon />} />
            <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>Loading </Text>
          </InfoContainer>
        </TxTypeContainer>
      </TxTypeWrapper>
      <CenterContent />
      <SecondaryActionContainer />
    </MasterContainer>
  );
};
