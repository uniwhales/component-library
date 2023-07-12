/* eslint-disable no-multi-assign */
import React from 'react';
import { SHA256 } from 'crypto-js';
import { IdenticonBlock, IdenticonWrapper } from './Identicon.styles';
import { localTheme } from '../../theme';

export type IdenticonProps = {
  size: 'big' | 'small';
  id: string;
  hasInteraction: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  onMouseEnter?: () => void;
  isLink?: boolean;
};

export const IdenticonComponent = ({
  id, size, hasInteraction, onMouseEnter, onClick, href, target, isLink,
}:IdenticonProps) => {
  const theme = localTheme();
  const hash = SHA256(id).toString();
  const colors = [
    ...Object.values(theme.colors.primary),
    ...Object.values(theme.colors.secondary),
    ...Object.values(theme.colors.system),
    ...Object.values(theme.textShades),
    ...Object.values(theme.containerAndCardShades),
  ];

  const patternColor = colors[parseInt(hash[0], 16) % colors.length] as string;

  const arr = hash.split('').map((el) => ((parseInt(el, 16) < 8) ? 0 : 1));
  const map = [];
  map[0] = map[7] = arr.slice(0, 8);
  map[1] = map[6] = arr.slice(8, 16);
  map[2] = map[5] = arr.slice(16, 24);
  map[3] = map[4] = arr.slice(24, 32);

  const blocks = map.flatMap((row, i) => {
    const mirroredRow = [...row].reverse();
    return [...row, ...mirroredRow].map((el, j) => {
      const color = el ? patternColor : 'transparent';
      // eslint-disable-next-line react/no-array-index-key
      return <IdenticonBlock size={size} key={`${id}-${i}-${j}`} color={color} />;
    });
  });

  return (
    <IdenticonWrapper
      as={isLink ? 'a' : undefined}
      onMouseEnter={() => onMouseEnter && onMouseEnter()}
      hasInteraction={hasInteraction}
      size={size}
      href={href}
      target={target}
      onClick={onClick}
    >
      {blocks}
    </IdenticonWrapper>
  );
};
