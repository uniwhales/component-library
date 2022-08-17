import React from 'react';
import Identicon from 'react-hooks-identicons';
import { Container } from './Identicon.styles';
import { IdenticonProps } from './types';

export const IdenticonComponent = ({
  containerSize, iconSize, id, hasInteraction,
}: IdenticonProps) => (
  <Container
    hasInteraction={hasInteraction}
    containerSize={containerSize}
  >
    <Identicon count={5} string={id} size={iconSize} />
  </Container>
);
