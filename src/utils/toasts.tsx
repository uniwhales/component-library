import React from 'react';
import { SelectedCheck } from '../atoms/icons/navigationIcons/fullColor/SelectedCheck';
import { IconWrapper } from '../atoms/icons/iconWrapper';
import { Theme } from '../theme';
import { NoticeIcon, RevokeIcon, TimeStandard } from '../atoms/icons';

type TypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';

export const getToastColor = (type: TypeOptions, theme: typeof Theme) => {
  const colorsLookup = {
    default: theme.contrastColor.LOW_CONTRAST,
    info: theme.contrastColor.LOW_CONTRAST,
    error: theme.colors.system.AMBER,
    warning: theme.colors.system.RED,
    success: theme.colors.primary.MAIN_BLUE,
  };
  return colorsLookup[type];
};

export const getToastIcon = (type: TypeOptions, theme: typeof Theme) => {
  const lookup = {
    default: <IconWrapper
      gradient={theme.gradients.svg.TEAL}
      icon={<TimeStandard />}
    />,
    info: <IconWrapper
      gradient={theme.gradients.svg.TEAL}
      icon={<TimeStandard />}
    />,
    success: <IconWrapper icon={<SelectedCheck />} />,
    error: <IconWrapper
      gradient={theme.gradients.svg.CANARY}
      icon={<NoticeIcon />}
    />,
    warning: <IconWrapper
      gradient={theme.gradients.svg.TANGY}
      icon={<RevokeIcon />}
    />,
  };
  return lookup[type];
};
