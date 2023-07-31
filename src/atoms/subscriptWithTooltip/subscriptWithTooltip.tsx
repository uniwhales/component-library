import React, { useRef, useState } from 'react';
import { SubscriptWrapper } from './subscript.styles';
import { SimpleTooltip } from '../../molecules/tooltip/TooltipComponent';
import { useClickOutside } from '../../utils/useClickOutside';
import { Subscript, SubscriptProps } from '../subscriptNumber/subscript';

export type SubscriptWithTooltipProps = {
  label: string;
  isMobile?:boolean;
} & SubscriptProps;

export const SubscriptWithTooltip = ({
  size = '14-Regular', color, beforeSubscript, subscript, afterSubscript, label, isMobile = false,
}: SubscriptWithTooltipProps) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setTooltipOpen(false));
  return (
    <SimpleTooltip opened={isMobile ? tooltipOpen : undefined} label={label}>
      <SubscriptWrapper
        ref={clickRef}
        onClick={() => setTooltipOpen(true)}
      >
        <Subscript
          beforeSubscript={beforeSubscript}
          subscript={subscript}
          afterSubscript={afterSubscript}
          size={size}
          color={color}
          isMobile={isMobile}
        />
      </SubscriptWrapper>
    </SimpleTooltip>
  );
};
