import React from 'react';
import { ButtonAtom } from '../buttons/button';
import { TelegramStandard, TwitterStandard } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Container } from './style';
import { SocialButtonGroupProps } from './types';

export const SocialButtonGroup = ({ onTelegramClick, onTwitterClick }: SocialButtonGroupProps) => (
  <Container>
    <ButtonAtom onClick={onTelegramClick} $buttonVariant="special_small_round">
      <IconWrapper icon={<TelegramStandard />} />
    </ButtonAtom>
    <ButtonAtom onClick={onTwitterClick} $buttonVariant="special_small_round">
      <IconWrapper icon={<TwitterStandard />} />
    </ButtonAtom>
  </Container>
);
