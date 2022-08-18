import React, { FC, useState } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { ConnectWalletButton } from '../../atoms/connectWalletButton/connectWalletButton';
import { ArrowLeftIcon } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { HorizontalDots } from '../../atoms/icons/navigationIcons/HorizontalDots';
import { IdenticonComponent } from '../../atoms/identicon/Identicon';
import { Text } from '../../atoms/texts/text';
import useBreakpoint, { Breakpoints } from '../../hooks/useBreakpoint';
import { UserMenu } from './components/UserMenu/UserMenu';
import {
  IdenticonContainer,
  NavbarContainer,
  NavbarDesktopMenu, NavbarLeftSide, NavbarMainContent, NavbarRightSide,
} from './styles';
import { NavbarProps } from './types';

export const Navbar: FC<NavbarProps> = ({
  pageName,
  plan,
  onBackButtonClick,
  leftSideChildren,
  rightSideChildren,
  account,
  onWalletConnectClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();
  return (
    <>
      <NavbarContainer isMenuOpen={isMenuOpen}>
        <NavbarMainContent>
          <NavbarLeftSide onClick={() => onBackButtonClick()}>
            <IconWrapper icon={<ArrowLeftIcon />} cursor="pointer" />
            <Text size="H6-Regular">
              {pageName}
            </Text>
            {leftSideChildren}
          </NavbarLeftSide>
          <NavbarRightSide>
            {rightSideChildren}

            {/* Show only on desktop */}
            {
              !account && breakpoint > Breakpoints.Tablet
              && <ConnectWalletButton onClick={() => onWalletConnectClick()} account={account} />
            }

            {/* Show only on mobile */}
            {
              !account && breakpoint <= Breakpoints.Tablet
              && (
                <ButtonAtom buttonVariant="special_small_round" onClick={() => { setIsMenuOpen(!isMenuOpen); }}>
                  <IconWrapper cursor="pointer" icon={<HorizontalDots />} />
                </ButtonAtom>
              )
            }
            {account && (
              <IdenticonContainer onClick={() => { setIsMenuOpen(!isMenuOpen); }}>
                <IdenticonComponent
                  id={account}
                  containerSize="44px"
                  iconSize={30}
                  hasInteraction
                />
              </IdenticonContainer>
            )}
          </NavbarRightSide>
        </NavbarMainContent>
        <UserMenu
          isMenuOpen={isMenuOpen}
          onWalletConnectClick={() => {
            onWalletConnectClick();
            /*
                When user disconnects his wallet and we are on desktop i close the menu
              */
            if (account && breakpoint > Breakpoints.Tablet) setIsMenuOpen(false);
          }}
          plan={plan}
          account={account}
        />
      </NavbarContainer>
      <NavbarDesktopMenu />
    </>
  );
};
