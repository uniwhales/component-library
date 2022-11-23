import React from 'react';
import Identicon from 'react-hooks-identicons';
import { Container } from './Identicon.styles';
import { IdenticonProps } from './types';

export const IdenticonComponent = ({
  size, id, hasInteraction, onClick, href, target,
}: IdenticonProps) => (
  <Container
    size={size}
    hasInteraction={hasInteraction}
    onClick={onClick}
    href={href}
    target={target}
  >
    <Identicon count={5} string={id} size={size === 'big' ? 22 : 12} />
  </Container>
);
