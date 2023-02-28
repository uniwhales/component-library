import React, { useEffect, useState } from 'react';
import { ConnectButtonProps } from '../../atoms/connectWalletButton/types';
import { IdenticonComponent } from '../../atoms/identicon/Identicon';
import { Text } from '../../atoms/texts/text';
import { shortenAddressTo11Chars } from '../../utils/shortenAddress';
import { UserMenu } from '../navbar/components/UserMenu/UserMenu';
import { UserIdenticonWrapper } from './style';

export type UserIdenticonProps = { plan?: string, onWalletConnectClick: ConnectButtonProps['onClick'], account?: string };

export const UserIdenticon = ({
  account,
  onWalletConnectClick,
  plan,
}: UserIdenticonProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (!isMenuOpen) return;
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <UserIdenticonWrapper>
        <IdenticonComponent
          hasInteraction
          size="big"
          id="user-identicon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        {account && <Text size="Tiny-Regular">{shortenAddressTo11Chars(account)}</Text>}
      </UserIdenticonWrapper>
      <UserMenu
        isMenuOpen={isMenuOpen}
        onWalletConnectClick={(e) => {
          onWalletConnectClick(e);
        }}
        plan={plan ?? ''}
        account={account}
      />
    </>

  );
};
