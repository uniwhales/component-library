import React, { useRef, useState } from 'react';
import { InfoStandard } from '../icons';
import { IconWrapper } from '../icons/iconWrapper';
import { TooltipButtonWrapper } from './styles';
import { SimpleTooltip } from '../../molecules/tooltip/TooltipComponent';
import { useClickOutside } from '../../utils/useClickOutside';
import { TooltipButtonProps } from './types';
import { localTheme } from '../../theme';

export const TooltipButton = ({ content, position = 'top' }: TooltipButtonProps) => {
  const [open, setOpen] = useState(false);
  const theme = localTheme();
  const clickRef = useRef(null);
  useClickOutside(clickRef, () => setOpen(false));
  return (
    <div ref={clickRef}>
      <SimpleTooltip
        allowPointerEvents
        label={content}
        opened={open}
        position={position}
      >
        <TooltipButtonWrapper onClick={() => setOpen(!open)}>
          <IconWrapper
            icon={<InfoStandard />}
            cursor="pointer"
            fill={theme.colors.SHADE_MINUS_2}
          />
        </TooltipButtonWrapper>
      </SimpleTooltip>
    </div>
  );
};
