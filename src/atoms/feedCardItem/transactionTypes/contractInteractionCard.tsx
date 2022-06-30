import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { FeedPageMeatballMenu } from '../../../molecules/feedPageMeatballMenu/feedPageMeatballMenu';
import { Theme } from '../../../theme';
import { ButtonAtom } from '../../buttons/button';
import {
  ChevronDownIcon,
  Identicon,
  Interaction,
  LinkIcon,
  TwitterColor,
} from '../../icons';
import { IconWrapper } from '../../icons/iconWrapper';
import { OverlappedIcon } from '../../overlappedIcon/overlappedIcon';
import { Text } from '../../texts/text';
import {
  HoverItemsContainer,
  MasterContainer,
  TxTypeContainer,
  TxTypeWrapper,
  ChevronButton,
  SecondaryActionContainer,
  StyledLink,
  CenterContent,
  IdenticonContainer,
  LinkWrapper,
  XOnlyContent,
} from '../feedCardItem.styles';
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

  // calculate hover states
  const showSecondaryActionArea = (hover && !isMulti) || (hover && isMulti && !isFirst);
  const showChevron = isMulti && isFirst;
  // Meatball menu items
  const goToItem = `https://etherscan.io/tx/${hash}`;
  const shareTransaction = () => navigator.clipboard.writeText(`https://etherscan.io/tx/${hash}`);

  return (
    <MasterContainer
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={hash}
      isMulti={isMulti}
    >
      <TxTypeWrapper>
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
      </TxTypeWrapper>
      <CenterContent>
        <XOnlyContent>
          <IdenticonContainer>
            <IconWrapper height="20px" width="20px" icon={<Identicon />} />
          </IdenticonContainer>
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
      </CenterContent>

      <SecondaryActionContainer>
        {!hover && (
          <Text size="XS-Regular" color={theme.textShades.SHADE_MINUS_1}>00 min ago</Text>
        )}
        {showSecondaryActionArea && (
          <HoverItemsContainer>
            <FeedPageMeatballMenu
              share={shareTransaction}
            />
            <ButtonAtom buttonVariant="special_tiny_round" onClick={() => { }}>
              <IconWrapper cursor="pointer" icon={<TwitterColor />} />
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
