import React from 'react';
import { SimpleTooltip } from '../../molecules/tooltip/TooltipComponent';
import { Text } from '../texts/text';
import { ShortenTextProps } from './types';

export const ShortenText = ({
  text, size, color, chars, href, target,
}: ShortenTextProps) => {
  const limit = chars || 5;
  /* +3 since we are going to add 3 dots anyway */
  if (text.length > limit + 3) {
    return (
      <SimpleTooltip
        allowPointerEvents
        position="top"
        label={text}
      >
        <div>
          <Text size={size} href={href} target={target} color={color}>
            {`${text.slice(0, limit).trim()}...`}
          </Text>
        </div>
      </SimpleTooltip>
    );
  }

  return <Text size={size} color={color}>{text}</Text>;
};
