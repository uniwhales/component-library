import React from 'react';
import Identicon from 'react-hooks-identicons';
import { Container } from './Identicon.styles';
import { IdenticonProps } from './types';

export const IdenticonComponent = ({
  size,
  id,
  hasInteraction,
  onClick,
  href,
  target,
  onMouseEnter,
  isLink = true,
  gradientBorder = false,
}: IdenticonProps) => (
  <Container
    as={isLink ? 'a' : undefined}
    size={size}
    hasInteraction={hasInteraction}
    gradientBorder={gradientBorder}
    onClick={onClick}
    href={href}
    target={target}
    onMouseEnter={() => onMouseEnter && onMouseEnter()}
  >
    <Identicon count={5} string={id} size={size === 'big' ? 22 : 12} />
  </Container>
);
