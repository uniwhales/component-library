import React from 'react';
import { Container } from './Identicon.styles';
import { IdenticonProps } from './types';

export const IdenticonComponent = ({
  size,
  hasInteraction,
  onClick,
  href,
  target,
  onMouseEnter,
  isLink = true,
}: IdenticonProps) => (
  <Container
    as={isLink ? 'a' : undefined}
    size={size}
    hasInteraction={hasInteraction}
    onClick={onClick}
    href={href}
    target={target}
    onMouseEnter={() => onMouseEnter && onMouseEnter()}
  >
    <div />
  </Container>
);
