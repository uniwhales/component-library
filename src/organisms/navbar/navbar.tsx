import React, { FC, useRef, useState } from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { ConnectWalletButton } from '../../atoms/connectWalletButton/connectWalletButton';
import { ArrowLeftIcon } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { HorizontalDots } from '../../atoms/icons/navigationIcons/HorizontalDots';
import { IdenticonComponent } from '../../atoms/identicon/Identicon';
import { Text } from '../../atoms/texts/text';
import useBreakpoint, { Breakpoints } from '../../hooks/useBreakpoint';
import { useClickOutside } from '../../utils/useClickOutside';
import { UserMenu } from './components/UserMenu/UserMenu';
import {
  IdenticonContainer,
  NavbarContainer,
  NavbarDesktopMenu,
  NavbarLeftSide, NavbarMainContent, NavbarRightSide, NavigateBackContainer,
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
  bottomSpacing = true,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setIsMenuOpen(false));
  return (
    <>
      <NavbarContainer
        bottomSpacing={bottomSpacing}
        isMenuOpen={isMenuOpen}
        account={account}

      >
        <NavbarMainContent>
          <NavbarLeftSide>
            <NavigateBackContainer onClick={() => onBackButtonClick()}>
              <IconWrapper icon={<ArrowLeftIcon />} cursor="pointer" />
              <Text size="M-Regular">
                {pageName}
              </Text>
            </NavigateBackContainer>
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
              <IdenticonContainer ref={clickRef} onClick={() => { setIsMenuOpen(!isMenuOpen); }}>
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
