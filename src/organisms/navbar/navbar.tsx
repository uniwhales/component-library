import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { ConnectWalletButton } from '../../atoms/connectWalletButton/connectWalletButton';
import { ArrowLeftIcon, Identicon } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Text } from '../../atoms/texts/text';
import {
  NavbarAvatar, NavbarContainer, NavbarLeftSide, NavbarRightSide,
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
  const theme: any = useTheme();

  return (
    <NavbarContainer>
      <NavbarLeftSide onClick={() => onBackButtonClick()}>
        <IconWrapper icon={<ArrowLeftIcon />} cursor="pointer" />
        <Text size="H6-Regular">
          {pageName}
        </Text>
        {leftSideChildren}
      </NavbarLeftSide>
      <NavbarRightSide>
        {rightSideChildren}
        <Text color={theme.textShades.SHADE_MINUS_1} size="M-Regular">
          <>
            Plan:
            {' '}
            {plan}
          </>
        </Text>
        {!account
        && <ConnectWalletButton onClick={() => onWalletConnectClick()} account={account} />}
        {account && (
          <NavbarAvatar>
            <IconWrapper cursor="pointer" icon={<Identicon />} />
          </NavbarAvatar>
        )}
      </NavbarRightSide>
    </NavbarContainer>
  );
};
