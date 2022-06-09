import React from 'react';
import { Styled } from '../../theme';
import { IconWrapper } from '../icons/iconWrapper';
import { UniWhalesColor } from '../icons';
import { Text } from '../texts/text';

const Container = Styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  cursor: pointer;
`;

type Props = {
  showText?: boolean
  onClick?: () => void
};

export const UniWhalesLogo = ({ showText, onClick }: Props) => (
  <Container onClick={onClick}>
    <IconWrapper height="auto" width="56px" icon={<UniWhalesColor />} />
    {showText && <Text size="H6-Bold">UniWhales</Text>}
  </Container>
);
