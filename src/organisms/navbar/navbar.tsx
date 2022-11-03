import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { ConnectWalletButton } from '../../atoms/connectWalletButton/connectWalletButton';
import { ArrowLeftIcon } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { HorizontalDots } from '../../atoms/icons/navigationIcons/HorizontalDots';
import { IdenticonComponent } from '../../atoms/identicon/Identicon';
import { Text } from '../../atoms/texts/text';
import useBreakpoint, { Breakpoints } from '../../hooks/useBreakpoint';
import { localTheme } from '../../theme';
import { useClickOutside } from '../../utils/useClickOutside';
import { UserMenu } from './components/UserMenu/UserMenu';
import {
  IdenticonContainer,
  NavbarContainer,
  NavbarDesktopMenu,
  NavbarLeftSide, NavbarMainContent, NavbarRightSide,
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
  bgColor = true,
}) => {
  const theme = localTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setIsMenuOpen(false));

  const handleScroll = () => {
    if (!isMenuOpen) return;
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div
      ref={clickRef}
    >
      <NavbarContainer
        bottomSpacing={bottomSpacing}
        isMenuOpen={isMenuOpen}
        account={account}
        onClick={isMenuOpen ? () => setIsMenuOpen(false) : undefined}
        bgColor={bgColor}
      >
        <NavbarMainContent>
          <NavbarLeftSide>
            <ButtonAtom buttonVariant="secondary_action" onClick={() => onBackButtonClick()}>
              <>
                <IconWrapper
                  fill={theme.textShades.SHADE_MINUS_3}
                  height="21px"
                  width="21px"
                  icon={<ArrowLeftIcon />}
                  cursor="pointer"
                />
                {pageName && (
                  <Text size="M-Regular">
                    {pageName}
                  </Text>
                )}
              </>
            </ButtonAtom>
            {leftSideChildren}
          </NavbarLeftSide>
          <NavbarRightSide>
            {rightSideChildren}

            {/* Show only on desktop */}
            {
              !account && breakpoint > Breakpoints.Tablet
              && <ConnectWalletButton onClick={(e) => onWalletConnectClick(e)} account={account} />
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
              <IdenticonContainer
                onClick={() => { setIsMenuOpen(!isMenuOpen); }}
              >
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
        {/* On Tablet and smaller we show the menu inside expanded navbar */}
        {breakpoint <= Breakpoints.Tablet && (
        <UserMenu
          isMenuOpen={isMenuOpen}
          onWalletConnectClick={(e) => {
            onWalletConnectClick(e);
            /*
              When user disconnects his wallet and we are on desktop i close the menu
            */
            if (account && breakpoint > Breakpoints.Tablet) setIsMenuOpen(false);
          }}
          plan={plan}
          account={account}
        />
        )}
      </NavbarContainer>
      {/* On Desktop we show the menu outside of navbar */}
      {breakpoint > Breakpoints.Tablet && (
      <UserMenu
        isMenuOpen={isMenuOpen}
        onWalletConnectClick={(e) => {
          onWalletConnectClick(e);
          /*
              When user disconnects his wallet and we are on desktop i close the menu
            */
          if (account && breakpoint > Breakpoints.Tablet) setIsMenuOpen(false);
        }}
        plan={plan}
        account={account}
      />
      )}
      <NavbarDesktopMenu />
    </div>
  );
};
