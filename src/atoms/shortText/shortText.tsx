import React from 'react';
import { SimpleTooltip } from '../../molecules/tooltip/TooltipComponent';
import { Text } from '../texts/text';
import { ShortTextProps } from './types';

export const ShortText = ({
  text, size, color, chars, href, target,
}: ShortTextProps) => {
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
          <Text size={[size ?? '14-Regular']} href={href} target={target} textColor={color}>
            {`${text.slice(0, limit).trim()}...`}
          </Text>
        </div>
      </SimpleTooltip>
    );
  }

  return (
    <Text
      size={size ?? '14-Regular'}
      textColor={color}
      href={href}
      target={target}
    >
      {text}
    </Text>
  );
};
