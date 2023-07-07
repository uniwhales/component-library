import React, {
  FC, useEffect, useRef, useState,
} from 'react';
import { ButtonAtom } from '../../atoms/buttons/button';
import { ConnectWalletButton } from '../../atoms/connectWalletButton/connectWalletButton';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Meatball } from '../../atoms/icons/navigationIcons/Meatball';
import { IdenticonComponent } from '../../atoms/identicon/Identicon';
import useBreakpoint, { Breakpoints } from '../../hooks/useBreakpoint';
import { useClickOutside } from '../../utils/useClickOutside';
import { UserMenu } from './components/UserMenu/UserMenu';
import {
  NavbarContainer,
  NavbarDesktopMenu,
  NavbarLeftSide, NavbarMainContent, NavbarRightSide,
} from './styles';
import { NavbarProps } from './types';
import { isWindowAvailable } from '../../utils/isWindowAvailable';

export const Navbar: FC<NavbarProps> = ({
  plan,
  leftSideChildren,
  rightSideChildren,
  account,
  onWalletConnectClick,
  $bottomSpacing = true,
  $bgColor = true,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const breakpoint = useBreakpoint();
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setIsMenuOpen(false));

  const handleScroll = () => {
    if (!isMenuOpen) return;
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isWindowAvailable()) return () => {};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isWindowAvailable()]);

  return (
    <>
      <NavbarContainer
        ref={clickRef}
        $bottomSpacing={$bottomSpacing}
        $isMenuOpen={isMenuOpen}
        account={account}
        onClick={isMenuOpen ? () => setIsMenuOpen(false) : undefined}
        $bgColor={$bgColor}
      >
        <NavbarMainContent>
          <NavbarLeftSide>
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
                <ButtonAtom $buttonVariant="special_small_round" onClick={() => { setIsMenuOpen(!isMenuOpen); }}>
                  <IconWrapper cursor="pointer" icon={<Meatball />} />
                </ButtonAtom>
              )
            }

            {account && (
              <IdenticonComponent
                id={account}
                $hasInteraction
                size="big"
                onClick={() => { setIsMenuOpen(!isMenuOpen); }}
              />
            )}
          </NavbarRightSide>
        </NavbarMainContent>
        {/* On Tablet and smaller we show the menu inside expanded navbar */}
        {breakpoint <= Breakpoints.Tablet && (
        <UserMenu
          $isMenuOpen={isMenuOpen}
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
        $isMenuOpen={isMenuOpen}
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
    </>
  );
};
