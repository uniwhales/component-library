import React, { useRef, useState } from 'react';
import { StyledP } from '../texts/text.styles';
import { BodySizes } from '../texts/types';
import { StyledSubscript, SubscriptWrapper } from './subscript.styles';
import { SimpleTooltip } from '../../molecules/tooltip/TooltipComponent';
import { useClickOutside } from '../../utils/useClickOutside';

type Props = {
  size?: BodySizes;
  color?: string;
  beforeSubscript: string;
  subscript: string
  afterSubscript: string;
  label: string;
  isMobile?:boolean;
};

export const Subscript = ({
  size = '14-Regular', color, beforeSubscript, subscript, afterSubscript, label, isMobile = false,
}: Props) => {
  const [textType, textWeight] = size.split('-');
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setTooltipOpen(false));
  const subscriptSize = parseInt(textType, 10) - 2;
  if ((['8', '10', '11', '12', '14', '16'].includes(textType))) {
    return (
      <SimpleTooltip opened={isMobile ? tooltipOpen : undefined} label={label}>
        <SubscriptWrapper onClick={() => setTooltipOpen(true)}>
          <StyledP
            ref={clickRef}
            textType={textType}
            color={color}
            textWeight={textWeight}
          >
            {beforeSubscript}
            <StyledSubscript
              isMobile={isMobile}
              size={subscriptSize}
              color={color}
            >
              {subscript}
            </StyledSubscript>
            {afterSubscript}
          </StyledP>
        </SubscriptWrapper>
      </SimpleTooltip>
    );
  }
  return null;
};
