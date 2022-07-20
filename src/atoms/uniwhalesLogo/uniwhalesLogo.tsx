import React from 'react';
import { Styled } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';
import { UniWhalesColor } from '../icons';
import { Text } from '../texts/text';

const Container = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2px;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

type Props = {
  showText?: boolean
  onClick?: () => void
};

export const UniWhalesLogo = ({ showText, onClick }: Props) => (
  <Container onClick={onClick}>
    <IconWrapper height="auto" width="33px" icon={<UniWhalesColor />} />
    {showText && <Text size="L-Bold">{' UniWhales'}</Text>}
  </Container>
);
