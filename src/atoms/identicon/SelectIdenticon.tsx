import React from 'react';
import { IconWrapper } from '../icons/iconWrapper';
import { IdenticonComponent } from './Identicon';
import {
  IdenticonMarkWrapper, Mark, WalletAvatar,
} from './Identicon.styles';
import { MarkedIdenticonProps } from './types';

export const MarkedIdenticon = ({
  preload, markIcon, size, identicon,
}: MarkedIdenticonProps) => {
  const iconSize = size === 'big' ? '12px' : '8px';
  return (
    <IdenticonMarkWrapper
      onMouseEnter={() => {
        if (preload) preload();
      }}
    >
      <WalletAvatar>
        <Mark size={size}>
          <IconWrapper height={iconSize} width={iconSize} {...markIcon} />
        </Mark>
        <IdenticonComponent size={size} {...identicon} />
      </WalletAvatar>
    </IdenticonMarkWrapper>
  );
};
