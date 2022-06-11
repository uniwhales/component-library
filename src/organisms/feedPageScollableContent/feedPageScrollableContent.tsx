import React from 'react';
import { Footer } from '../../atoms/footer/Footer';
import { Text } from '../../atoms/texts/text';
import { NewUpdateSection, ScrollableContent, Wrapper } from './feedPageScrollableContent.styles';
import { FeedPageScrollableContentProps } from './types';

export const FeedPageScrollableContent = (
  { children, newUpdates, onShowNew }: FeedPageScrollableContentProps,
) => {
  const newUpdateText = newUpdates && `Show ${newUpdates.length} new updates`;
  return (
    <Wrapper>
      {newUpdates && (
        <NewUpdateSection onClick={onShowNew}>
          <Text size="S-Bold">
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
