import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Theme } from '../../theme';
import {
  IconWrapper, Text, ArrowRightIcon, Tag, AudioStandard, ArticleStandard, WebinarStandard,
  ButtonAtom,
} from '../..';
import { ContentCardProps, ContentType } from './types';
import {
  AboutSection,
  AboutSectionLeftSide,
  ArticleCover,
  Card, CardHeader, CardHeaderLeftSide, MediaTypeIcon, Spacer, TagSection,
} from './styles';
import { Chip } from '../../atoms/chips/chip';

export const ContentCard:FC<ContentCardProps> = ({
  coverImgUrl,
  onClick,
  guestLink,
  releaseDate,
  chipText,
  duration,
  title,
  guest,
  tags,
  contentType,
  onTagClick,
  size = 'LnM',
}) => {
  const theme = useTheme() as typeof Theme;
  return (
    <Card size={size} onClick={() => onClick()}>
      <CardHeader>
        <CardHeaderLeftSide>
          {chipText && <Chip type="secondary">{chipText}</Chip>}
          <Text size="S-Bold">{releaseDate}</Text>
        </CardHeaderLeftSide>
        {duration && <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">{duration}</Text>}
      </CardHeader>
      <Spacer />
      <Text size={size === 'S' ? 'S-Bold' : 'M-Bold'}>{title}</Text>
      <ArticleCover size={size} url={coverImgUrl} />
      <AboutSection>
        <AboutSectionLeftSide>
          <MediaTypeIcon size={size} contentType={contentType}>
            <IconWrapper
              cursor="pointer"
              width={size === 'S' ? '17px' : '24px'}
              height={size === 'S' ? '17px' : '24px'}
              icon={contentType === ContentType.Article
                ? <ArticleStandard />
                : contentType === ContentType.Audio
                  ? <AudioStandard />
                  : <WebinarStandard />}
            />
          </MediaTypeIcon>
          {guest && <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">with</Text>}
          {guestLink && guest && <Text href={guestLink} color={theme.colors.system.GREEN} size="S-Regular">{guest}</Text>}
        </AboutSectionLeftSide>
        <ButtonAtom buttonVariant="special_small_round" onClick={() => onClick()}>
          <IconWrapper
            cursor="pointer"
            width={size === 'S' ? '17px' : '24px'}
            height={size === 'S' ? '17px' : '24px'}
            icon={<ArrowRightIcon />}
          />
        </ButtonAtom>
      </AboutSection>
      <TagSection>
        {size !== 'S' && tags.map((t, i) => (
          <Tag
            tabIndex={i}
            isOn
            onClick={() => onTagClick && onTagClick(t)}
          >
            {t}
          </Tag>
        ))}
      </TagSection>
    </Card>
  );
};