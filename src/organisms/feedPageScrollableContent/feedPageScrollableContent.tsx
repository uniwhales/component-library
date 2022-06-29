import React from 'react';
import { useTheme } from 'styled-components';
import { Footer } from '../../atoms/footer/Footer';
import { DownloadStandard } from '../../atoms/icons';
import { IconWrapper } from '../../atoms/icons/iconWrapper';
import { Text } from '../../atoms/texts/text';
import { Theme } from '../../theme';
import {
  ScrollableContent, ScrollableSection, FooterSection, ShowNewButton,
} from './feedPageScrollableContent.styles';
import { FeedPageScrollableContentProps } from './types';

export const FeedPageScrollableContent = (
  {
    children, newUpdates, onShowNew,
  }: FeedPageScrollableContentProps,
) => {
  const theme = useTheme() as typeof Theme;

  return (
    <>
      {newUpdates && newUpdates.data.length > 0 && (
        <ShowNewButton onClick={onShowNew}>

          <IconWrapper
            cursor="pointer"
            height="20px"
            width="20px"
            icon={<DownloadStandard />}
          />
          <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular"> Show</Text>
          <Text color={theme.textShades.SHADE_MINUS_2} size="S-Bold">{newUpdates.data.length}</Text>
          <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">
            <>
              {' '}
              new
              {' '}
              {newUpdates.data.length >= 2 ? 'updates' : 'update'}
            </>
          </Text>

        </ShowNewButton>
      )}
      <ScrollableSection>
        <ScrollableContent>
          {children}
          <FooterSection>
            <Footer />
          </FooterSection>
        </ScrollableContent>
      </ScrollableSection>
    </>
  );
};
