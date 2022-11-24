import React from 'react';
import { IconWrapper } from '../icons/iconWrapper';
import { IdenticonComponent } from './Identicon';
import {
  IdenticonMarkWrapper, Mark, WalletAvatar,
} from './Identicon.styles';
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
          <Mark size={size}>
            <IconWrapper height={iconSize} width={iconSize} {...markIcon} />
          </Mark>
        )}
        <IdenticonComponent size={size} {...identicon} />
      </WalletAvatar>
    </IdenticonMarkWrapper>
  );
};
