import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
  ChevronDownIcon,
  LinkIcon, Meatball, OverlappedIcon, TwitterColor,
} from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { StarIcon } from '../icons/placeholder/StarIcon';
import { Text } from '../texts/text';
import {
  CenterContentContainer,
  HoverItemsContainer,
  MasterContainer,
  TxTypeContainer,
  TxTypeWrapper,
  XPartyContent,
  YPartyContent,
  ChevronButton,
  IconContainer,
  SecondaryActionContainer,
  TransactionWrapper,
} from './masterFeedItemTx.styles';
import { MasterFeedItemTxProps } from './types';

export const MasterFeedItemTx = ({ isMulti, data }: MasterFeedItemTxProps) => {
  const theme: any = useTheme();
  const firstItem = data[0];
  const fiveTransactions = data.slice(0, 5);
  const hasMoreThanFiveTransactions = data.length > 5;
  const [hover, setHover] = useState<boolean>(false);
  const [itemsToDisplay, setItemsToDisplay] = useState([firstItem]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (itemsToDisplay.length === 1) {
      setItemsToDisplay(fiveTransactions);
    } else {
      setItemsToDisplay([firstItem]);
    }
  };
  return (
    <TransactionWrapper>
      {itemsToDisplay.map((tx: any, index: number) => {
        console.log('Transaction', tx);
        return (
          <MasterContainer
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            key={tx.hash}
            isMulti={isMulti}
          >
            <TxTypeWrapper>
              <IconContainer>
                <IconWrapper icon={<OverlappedIcon />} />
              </IconContainer>
              <TxTypeContainer>
                <Text size="S-Regular">Tx Type</Text>
                <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>Platform</Text>
              </TxTypeContainer>
            </TxTypeWrapper>
            <CenterContentContainer>
              <XPartyContent>
                <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>0000</Text>
                <IconWrapper height="32px" width="32px" icon={<StarIcon />} />
                <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>($00000)</Text>
              </XPartyContent>
              <Text size="S-Regular" color={theme.colors.system.WHITE}>text</Text>
              <YPartyContent>
                <Text size="S-Bold" color={theme.colors.primary.UWL_BLUE}>0000</Text>
                <IconWrapper height="32px" width="32px" icon={<StarIcon />} />
                <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>($00000)</Text>
              </YPartyContent>
              <IconWrapper cursor="pointer" height="16px" width="16px" fill={theme.contrastColor.LOW_CONTRAST} icon={<LinkIcon />} />
            </CenterContentContainer>
            <SecondaryActionContainer>
              {hover && (
                <HoverItemsContainer>
                  <IconWrapper cursor="pointer" icon={<Meatball />} />
                  <IconWrapper cursor="pointer" icon={<TwitterColor />} />
                </HoverItemsContainer>
              )}
              {isMulti && index === 0 && (
                <ChevronButton isOpen={isOpen}>
                  <IconWrapper onClick={handleToggle} cursor="pointer" icon={<ChevronDownIcon />} />
                </ChevronButton>
              )}
            </SecondaryActionContainer>
          </MasterContainer>
        );
      })}
    </TransactionWrapper>
  );
};
