import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Text } from '../../../atoms/texts/text';
import { Styled } from '../../../theme';

const Container = Styled.div`
  height: 100px;
  color: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
  padding: 24px;
  display: flex;
  flex-direction: column;
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
  plan: string
  version: string
};

export const SidebarFooter: FC<SidebarFooterProps> = ({ plan, version }) => {
  const theme: any = useTheme()
  return (
    <Container>
      <Spacer />
      <Text color={theme.textShades.SHADE_MINUS_1} size="XS-Regular">
        <>
          v
          {`${version} `}
          | Plan:
          {` ${plan}`}
        </>
      </Text>
    </Container>
  )
};
