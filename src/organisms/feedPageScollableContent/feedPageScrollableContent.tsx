import React from 'react';
import { useTheme } from 'styled-components';
import { Footer } from '../../atoms/footer/Footer';
import { Text } from '../../atoms/texts/text';
import { NewUpdateSection, ScrollableContent, Wrapper } from './feedPageScrollableContent.styles';
import { FeedPageScrollableContentProps } from './types';

export const FeedPageScrollableContent = (
  { children, newUpdates, onShowNew }: FeedPageScrollableContentProps,
) => {
  const theme: any = useTheme();
  const newUpdateText = newUpdates && `Show ${newUpdates.length} new updates`;
  return (
    <Wrapper>
      {newUpdates && (
        <NewUpdateSection onClick={onShowNew}>
          <Text color={theme.textShades.SHADE_MINUS_2} size="S-Regular">
            {newUpdateText!}
          </Text>
        </NewUpdateSection>
      )}
      <ScrollableContent>
        {children}
      </ScrollableContent>
      <Footer />
    </Wrapper>
  );
};
