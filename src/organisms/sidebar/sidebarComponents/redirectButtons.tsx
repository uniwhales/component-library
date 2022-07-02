import React, { FC } from 'react';
import { TelegramStandard, TwitterStandard } from '../../../atoms/icons';
import { GlobeStandard } from '../../../atoms/icons/generalIcons/filledStyle/GlobeStandard';
import { IconWrapper } from '../../../atoms/icons/iconWrapper';
import { Styled } from '../../../theme';

const Container = Styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  svg {
    fill: ${({ theme }) => theme.colors.primary.WATER_BLUE}
  }
`;

const Spacer = Styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.textShades.SHADE_MINUS_1};
  width: 1px;
  opacity: 0.5;
`;

export type RedirectButtonsProps = {
  webappLink: string;
  telegramLink: string;
  twitterLink: string;
};

export const RedirectButtons: FC<RedirectButtonsProps> = ({
  telegramLink, twitterLink, webappLink,
}) => (
  <Container>
    <a href={webappLink}>
      <IconWrapper cursor="pointer" icon={<GlobeStandard />} />
    </a>
    <Spacer />
    <a href={telegramLink}>
      <IconWrapper cursor="pointer" icon={<TelegramStandard />} />
    </a>
    <Spacer />
    <a href={twitterLink}>
      <IconWrapper cursor="pointer" icon={<TwitterStandard />} />
    </a>
  </Container>
);
