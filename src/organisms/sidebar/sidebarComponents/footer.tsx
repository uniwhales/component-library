import React, { FC } from 'react';
import { Text } from '../../../atoms/texts/text';
import { Styled, localTheme } from '../../../theme';

const Container = Styled.div`
  height: 100px;
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Spacer = Styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
  height: 1px;
  opacity: 0.5;
  margin-bottom: 10px;
  position: relative;
`;

export type SidebarFooterProps = {
  version: string
};

export const SidebarFooter: FC<SidebarFooterProps> = ({ version }) => {
  const theme = localTheme();
  return (
    <Container>
      <Spacer />
      <Text color={theme.textShades.SHADE_MINUS_1} size="XS-Regular">
        {`v ${version} `}
      </Text>
    </Container>
  );
};
