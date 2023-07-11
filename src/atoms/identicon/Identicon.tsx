import React from 'react';
import { sha256 } from 'js-sha256';
import { localTheme } from '../../theme';
import { IdenticonProps } from './types';
import { IdenticonBlock, IdenticonWrapper } from './Identicon.styles';

export const Identicon = ({
  size,
  hasInteraction,
  onClick,
  href,
  target,
  onMouseEnter,
  isLink = true,
  id,
}: IdenticonProps) => {
  const theme = localTheme();
  const hash = sha256(id);
  const colors = [
    ...Object.values(theme.colors.primary),
    ...Object.values(theme.colors.secondary),
    ...Object.values(theme.colors.system),
    ...Object.values(theme.textShades),
    ...Object.values(theme.containerAndCardShades),
  ];

  const blocks = Array.from({ length: 25 }, (_, i) => {
    const color = colors[parseInt(hash[i], 16) % colors.length];
    return <IdenticonBlock size={size} key={i} color={color} />;
  });

  return (
    <IdenticonWrapper
      onMouseEnter={() => onMouseEnter && onMouseEnter()}
      hasInteraction={hasInteraction}
      size={size}
      href={href}
      target={target}
      as={isLink ? 'a' : undefined}
      onClick={onClick}
    >
      {blocks}
    </IdenticonWrapper>
  );
};
