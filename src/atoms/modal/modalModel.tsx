import { create } from '@ebay/nice-modal-react';
import React from 'react';
import { Styled } from '../../theme';
import { Text } from '../texts/text';
import { ModalBase } from './modal';
import { ExampleModalProps, NoIconModalProps } from './types';

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
  <ModalBase closeFn={closeFn}>
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
  </ModalBase>
);

export const noIconModal = ({ placeholderText, closeFn }: NoIconModalProps) => (
  <ModalBase
    closeFn={closeFn}
    noCloseIcon
    height="auto"
  >
    <>
      <Text size="L-Bold">No Close Icon</Text>
      <Text size="S-Regular">{placeholderText}</Text>
    </>
  </ModalBase>
);

export const NoIconModal = create(noIconModal);

export const ExampleModal = create(exampleModal);
