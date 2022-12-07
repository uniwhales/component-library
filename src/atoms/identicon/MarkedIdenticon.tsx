import React from 'react';
import { IdenticonComponent } from './Identicon';
import {
  IdenticonMarkWrapper, WalletAvatar,
} from './Identicon.styles';
import { IdentMark } from './IdentMark';
import { MarkedIdenticonProps } from './types';

export const MarkedIdenticon = ({
  markIcon, size, identicon, onMouseEnter,
}: MarkedIdenticonProps) => {
  const iconSize = size === 'big' ? '12px' : '8px';
  return (
    <IdenticonMarkWrapper
      onMouseEnter={() => onMouseEnter && onMouseEnter()}
    >
      <WalletAvatar>
        {markIcon && (
          <IdentMark size={size} icon={{ ...markIcon, width: iconSize, height: iconSize }} />
        )}
        <IdenticonComponent size={size} {...identicon} />
      </WalletAvatar>
    </IdenticonMarkWrapper>
  );
};
