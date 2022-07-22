import React from 'react';
import { ChipProps } from './types';
import {
  PrimaryChip, SecondaryChip, EditableChip, TertiaryChip,
} from './chip.styles';

export const Chip = ({
  type, children, secondaryTypeBgColor, width,
}: ChipProps) => {
  switch (type) {
    case 'secondary':
      return (
        <SecondaryChip bgColor={secondaryTypeBgColor} type={type} width={width}>
          {children}
        </SecondaryChip>
      );
    case 'editable':
      return (
        <EditableChip
          width={width}
          suppressContentEditableWarning
          contentEditable
          type={type}
        >
          {children}
        </EditableChip>
      );
    case 'tertiary':
      return (
        <TertiaryChip type={type} width={width}>
          {children}
        </TertiaryChip>
      );
    default:
      return (
        <PrimaryChip type={type} width={width}>
          {children}
        </PrimaryChip>
      );
  }
};
