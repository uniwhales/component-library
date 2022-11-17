import { create } from '@ebay/nice-modal-react';
import React, { useState } from 'react';
import { localTheme, Styled } from '../../theme';
import { ButtonAtom } from '../buttons/button';
import { Column } from '../common/flex';
import {
  ArrowLeftIcon, ArrowRightIcon, ProfileStandard, StarIcon,
} from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { Text } from '../texts/text';
import { ModalBase } from './modal';
import { ExtraContentRow } from './styles';
import {
  DoubleModalProps, ExampleModalProps,
} from './types';

const LatestAnnouncementsList = Styled.div<{ gap?: string, height?: string }>`
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

const AnnouncementCardContainerMobile = Styled.div`
    width: 100%
    padding: 24px;
    display: flex;
    flex-direction: column;
`;

const Cover = Styled.div<{ coverUrl: string }>`
  background: ${({ coverUrl }) => `url(${coverUrl})`};
  height: 115px;
  width: 233px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Content = Styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
`;

const AnnouncementText = Styled.div`
    color: ${({ theme }) => theme.textShades.SHADE_MINUS_2};
    font-size: 14px;
`;

export const exampleModal = ({ latest, closeFn }: ExampleModalProps) => (
  <ModalBase
    closeFn={closeFn}
    headerText="Modal Header"
    headerIcon={<StarIcon />}
    modalVariant="single"
    mainContent={(
      <LatestAnnouncementsList height="100%" gap="48px">
        {latest.map(({
          image, title, text, datetime,
        }) => (
          <AnnouncementCardContainerMobile key={datetime}>
            <Cover coverUrl={image} />
            <Content>
              <Text size="S-Bold">{datetime}</Text>
              <Text size="L-Regular">{title}</Text>
              <AnnouncementText dangerouslySetInnerHTML={{ __html: text ?? '' }} />
            </Content>
          </AnnouncementCardContainerMobile>
        ))}
      </LatestAnnouncementsList>
)}
  />
);

export const doubleModalExample = ({
  closeFn, placeholderText,
}: DoubleModalProps) => {
  const [showMore, setShowMore] = useState(false);
  const theme = localTheme();

  const mainContent = (
    <Column>
      <Text size="S-Regular">{placeholderText}</Text>
      <ExtraContentRow onClick={() => setShowMore(!showMore)}>
        <Text color={theme.colors.primary.MAIN_BLUE} size="XS-Regular">{`${!showMore ? 'show' : 'hide'} extra content`}</Text>
        <IconWrapper
          fill={theme.colors.primary.MAIN_BLUE}
          height="12px"
          width="12px"
          icon={!showMore ? <ArrowRightIcon /> : <ArrowLeftIcon />}
        />
      </ExtraContentRow>
    </Column>
  );

  const additionalContent = (
    <Column>
      {' '}
      <Text size="S-Regular">{placeholderText}</Text>
    </Column>
  );

  const additionalTinyAction = (
    <ButtonAtom buttonVariant="special_small">
      <>
        <IconWrapper icon={<ProfileStandard />} />
        View Profile
      </>
    </ButtonAtom>
  );

  return (
    <ModalBase
      closeFn={closeFn}
      headerText="Double Modal"
      headerIcon={<StarIcon />}
      modalVariant="double"
      mainContent={mainContent}
      additionalContent={additionalContent}
      showAdditionalContent={showMore}
      additionalTinyAction={additionalTinyAction}
    />
  );
};

export const DoubleModalExample = create(doubleModalExample);
export const ExampleModal = create(exampleModal);
