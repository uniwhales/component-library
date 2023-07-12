/* eslint-disable no-multi-assign */
import React from 'react';
import { sha256 } from 'js-sha256';
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
  const hash = sha256(id);
  const colors = Object.values(theme.colors);

  const patternColor = colors[parseInt(hash[0], 16) % colors.length] as string;

  const arr = hash.split('').map((el: any) => ((parseInt(el, 16) < 8) ? 0 : 1));
  const map = [];
  map[0] = map[4] = arr.slice(0, 10);
  map[1] = map[3] = arr.slice(10, 20);
  map[2] = arr.slice(20, 30);

  const blocks = map.flatMap((row) => {
    const mirroredRow = [...row].reverse();
    return [...row, ...mirroredRow].map((el) => {
      const color = el ? patternColor : 'transparent';
      return <IdenticonBlock size={size} key={`${id}-${color}`} color={color} />;
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
