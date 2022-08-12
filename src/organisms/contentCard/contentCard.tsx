import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { Theme } from '../../theme';
import {
  ArrowRightIcon, AudioStandard, ArticleStandard, WebinarStandard,
} from '../../atoms/icons';
import { Text } from '../../atoms/texts/text';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { ButtonAtom } from '../../atoms/buttons/button';
import { Tag } from '../../atoms/tags/tag';
import { ContentCardProps, ContentType } from './types';
import {
  AboutSection,
  AboutSectionLeftSide,
  ArticleCover,
  Card, CardHeader, CardHeaderLeftSide, CardTitle, MediaTypeIcon, Spacer, TagSection,
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
  width,
  tags,
  contentType,
  onTagClick,
  size = 'LnM',
}) => {
  const theme = useTheme() as typeof Theme;
  return (
    <Card size={size} width={width} onClick={() => onClick()}>
      <CardHeader>
        <CardHeaderLeftSide>
          {chipText && <Chip type="secondary">{chipText}</Chip>}
          <Text size="S-Bold">{releaseDate}</Text>
        </CardHeaderLeftSide>
        {duration && <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">{duration}</Text>}
      </CardHeader>
      <Spacer />
      <CardTitle>
        <Text size={size === 'S' ? 'S-Bold' : 'M-Bold'}>{title}</Text>
      </CardTitle>
      <ArticleCover size={size} url={coverImgUrl} />
      <AboutSection>
        <AboutSectionLeftSide>
          <MediaTypeIcon size={size} contentType={contentType}>
            <IconWrapper
              cursor="pointer"
              fill={theme.colors.system.WHITE}
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
          {guest && <Text href={guestLink} color={theme.colors.system.GREEN} size="S-Regular">{guest}</Text>}
        </AboutSectionLeftSide>
        <ButtonAtom buttonVariant="special_tiny_round" onClick={() => onClick()}>
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
