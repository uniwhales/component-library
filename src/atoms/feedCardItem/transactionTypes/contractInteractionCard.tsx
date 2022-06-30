import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { FeedPageMeatballMenu } from '../../../molecules/feedPageMeatballMenu/feedPageMeatballMenu';
import { Theme } from '../../../theme';
import { ButtonAtom } from '../../buttons/button';
import {
  ChevronDownIcon,
  Interaction,
  LinkIcon,
  TwitterColor,
} from '../../icons';
import { IconWrapper } from '../../icons/iconWrapper';
import { IdenticonComponent } from '../../identicon/Identicon';
import { OverlappedIcon } from '../../overlappedIcon/overlappedIcon';
import { Text } from '../../texts/text';
import {
  HoverItemsContainer,
  MasterContainer,
  TxTypeContainer,
  ChevronButton,
  SecondaryActionContainer,
  StyledLink,
  LinkWrapper,
  XOnlyContent,
  TxTypeWrapperLong,
  XOnlyCenterContent,
} from '../feedCardItem.styles';
import { getTxUrl } from '../helpers/getTxUrl';
import { chainIcons } from '../helpers/icons';
import { ContractInteractionProps } from '../types';

export const ContractInteractionCard = (
  {
    isMulti,
    txData,
    handleToggle,
    isOpen,
    isFirst,
  }: ContractInteractionProps,
) => {
  const theme = useTheme() as typeof Theme;
  const [hover, setHover] = useState<boolean>(false);
  const {
    hash,
    chain,
    function: Function,
    wallet,
  } = txData;

  const showSecondaryActionArea = (hover && !isMulti) || (hover && isMulti && !isFirst);
  const showChevron = isMulti && isFirst;
  const goToItem = getTxUrl(hash, chain);
  const shareTransaction = () => navigator.clipboard.writeText(getTxUrl(hash, chain));

  return (
    <MasterContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={hash}
      isMulti={isMulti}
    >
      <TxTypeWrapperLong>
        <OverlappedIcon
          smallIcon={chainIcons[chain]}
          largeIcon={<Interaction />}
          largeSize="20px"
          bgColor={theme.gradients.primary.BLURPLE}
        />
        <TxTypeContainer>
          <Text size="S-Regular">{Function}</Text>
          <Text size="XS-Regular">Contract Interaction</Text>
        </TxTypeContainer>
      </TxTypeWrapperLong>
      <XOnlyCenterContent>
        <XOnlyContent>
          <IdenticonComponent
            containerSize="32px"
            iconSize={20}
            id={wallet}
          />
          <Text size="S-Regular" color={theme.textShades.SHADE_MINUS_2}>{wallet}</Text>
        </XOnlyContent>
        <LinkWrapper>
          {hover && (
            <StyledLink
              href={goToItem}
              rel="noreferrer"
              target="_blank"
            >
              <LinkIcon />
            </StyledLink>
          )}
        </LinkWrapper>
      </XOnlyCenterContent>

      <SecondaryActionContainer>
        {!hover && (
          <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_1}>00 min ago</Text>
        )}
        {showSecondaryActionArea && (
          <HoverItemsContainer>
            <FeedPageMeatballMenu
              share={shareTransaction}
            />
            <ButtonAtom buttonVariant="tiny_action" onClick={() => { }}>
              <IconWrapper height="14px" width="14px" cursor="pointer" icon={<TwitterColor />} />
            </ButtonAtom>

          </HoverItemsContainer>
        )}
        {showChevron && (
          <ChevronButton isOpen={isOpen}>
            <IconWrapper height="13px" width="13px" onClick={handleToggle} cursor="pointer" icon={<ChevronDownIcon />} />
          </ChevronButton>
        )}
      </SecondaryActionContainer>
    </MasterContainer>
  );
};
