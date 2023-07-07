import React, { useEffect, useRef, useState } from 'react';
import { ConnectButtonProps } from '../../atoms/connectWalletButton/types';
import { IdenticonComponent } from '../../atoms/identicon/Identicon';
import { Text } from '../../atoms/texts/text';
import { shortenAddressTo11Chars } from '../../utils/shortenAddress';
import { UserMenu } from '../navbar/components/UserMenu/UserMenu';
import { UserIdenticonWrapper } from './style';
import { useClickOutside } from '../../utils/useClickOutside';

export type UserIdenticonProps = { plan?: string, onWalletConnectClick: ConnectButtonProps['onClick'], account?: string };

export const UserIdenticon = ({
  account,
  onWalletConnectClick,
  plan,
}: UserIdenticonProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const clickRef = useRef(null);

  const handleScroll = () => {
    if (!isMenuOpen) return;
    setIsMenuOpen(false);
  };

  useClickOutside(clickRef, () => setIsMenuOpen(false));

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <UserIdenticonWrapper ref={clickRef}>
      <IdenticonComponent
        $hasInteraction
        size="big"
        id="user-identicon"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      {account && <Text size="10-Regular">{shortenAddressTo11Chars(account)}</Text>}
      <UserMenu
        $isMenuOpen={isMenuOpen}
        onWalletConnectClick={(e) => {
          onWalletConnectClick(e);
        }}
        plan={plan ?? ''}
        account={account}
      />
    </UserIdenticonWrapper>

  );
};
