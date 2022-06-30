import React, { FC } from 'react';
import { Text } from '../../atoms/texts/text';
import {
  AnnouncementCardContainer, AnnouncementText, Content, Cover,
} from './styles';
import { AnnouncementCardProps } from './types';

export const AnnouncementCard: FC<AnnouncementCardProps> = ({
  coverUrl, releaseDate, title, purifiedContent, width, boxShadow = true,
}) => (
  <AnnouncementCardContainer boxShadow={boxShadow} width={width}>
    <Cover coverUrl={coverUrl} />
    <Content>
      <Text size="S-Bold">{releaseDate}</Text>
      <Text size="L-Regular">{title}</Text>
      <AnnouncementText dangerouslySetInnerHTML={{ __html: purifiedContent }} />
    </Content>
  </AnnouncementCardContainer>
);
