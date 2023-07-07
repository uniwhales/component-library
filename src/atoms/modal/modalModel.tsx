import { create } from '@ebay/nice-modal-react';
import React, { useState } from 'react';
import { styled } from 'styled-components';

import { localTheme } from '../../theme';
import { ButtonAtom } from '../buttons/button';
import {
  ArrowLeftIcon, ArrowRightIcon, ProfileStandard, StarIcon,
} from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';
import { ModalBase } from './modal';
import { ExtraContentRow, ModalColumn, ModalContentContainer } from './styles';
import {
  DoubleModalProps, ExampleModalProps,
} from './types';

const LatestAnnouncementsList = styled.div<{ gap?: string, height?: string }>`
    background-color: transparent;
    margin-top: 24px;
    height: ${({ height }) => height ?? '280px'};
    display: grid;
    row-gap: 15px;
    border-radius: 12px;
    background:inherit;
    overflow-y: auto;
    gap: ${({ gap }) => gap};
`;

const AnnouncementCardContainerMobile = styled.div`
    width: 100%
    padding: 24px;
    display: flex;
    flex-direction: column;
`;

const Cover = styled.div<{ $coverUrl: string }>`
  background: ${({ $coverUrl }) => `url(${$coverUrl})`};
  height: 115px;
  width: 233px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
`;

const AnnouncementText = styled.div`
    color: ${({ theme }) => theme.textShades.SHADE_MINUS_2};
    font-size: 14px;
`;

export const exampleModal = ({ latest, $closeFn }: ExampleModalProps) => (
  <ModalBase
    $closeFn={$closeFn}
    $headerText="Modal Header"
    $headerIcon={<StarIcon />}
    $modalVariant="single"
    $modalContent={(
      <LatestAnnouncementsList height="100%" gap="48px">
        {latest.map(({
          image, title, text, datetime,
        }) => (
          <AnnouncementCardContainerMobile key={datetime}>
            <Cover $coverUrl={image} />
            <Content>
              <Text size="14-Bold">{datetime}</Text>
              <Text size="16-Regular">{title}</Text>
              <AnnouncementText dangerouslySetInnerHTML={{ __html: text ?? '' }} />
            </Content>
          </AnnouncementCardContainerMobile>
        ))}
      </LatestAnnouncementsList>
    )}
  />
);

export const doubleModalExample = ({
  $closeFn, placeholderText,
}: DoubleModalProps) => {
  const [showMore, setShowMore] = useState(false);
  const theme = localTheme();
  return (
    <ModalBase
      $closeFn={$closeFn}
      $headerText="Double Modal"
      $headerIcon={<StarIcon />}
      $headerIconFill={theme.colors.primary.DARK_BLUE}
      $modalVariant="double"
      $additionalTinyAction={(
        <ButtonAtom $buttonVariant="special_small">
          <>
            <IconWrapper icon={<ProfileStandard />} />
            View Profile
          </>
        </ButtonAtom>
      )}
      $modalContent={(
        <ModalContentContainer>
          <ModalColumn>
            <Text size="14-Regular">{placeholderText}</Text>
            <ExtraContentRow onClick={() => setShowMore(!showMore)}>
              <Text color={theme.colors.primary.MAIN_BLUE} size="12-Regular">{`${!showMore ? 'show' : 'hide'} extra content`}</Text>
              <IconWrapper
                fill={theme.colors.primary.MAIN_BLUE}
                height="12px"
                width="12px"
                icon={!showMore ? <ArrowRightIcon /> : <ArrowLeftIcon />}
              />
            </ExtraContentRow>
          </ModalColumn>
          {showMore && (
            <ModalColumn>
              {' '}
              <Text size="14-Regular">{placeholderText}</Text>
            </ModalColumn>
          )}
        </ModalContentContainer>
      )}
    />
  );
};

export const DoubleModalExample = create(doubleModalExample);
export const ExampleModal = create(exampleModal);
