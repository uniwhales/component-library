import React from 'react';
import { ChipProps } from './types';
import {
  PrimaryChip, SecondaryChip, EditableChip, TertiaryChip, TertiaryLined, SubtleChip,
} from './chip.styles';

export const Chip = ({
  type, children, secondaryTypeBgColor, width, cursor,
}: ChipProps) => {
  switch (type) {
    case 'secondary':
      return (
        <SecondaryChip cursor={cursor} bgColor={secondaryTypeBgColor} type={type} width={width}>
          {children}
        </SecondaryChip>
      );
    case 'editable':
      return (
        <EditableChip
          cursor={cursor}
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
        <TertiaryChip cursor={cursor} type={type} width={width}>
          {children}
        </TertiaryChip>
      );
    case 'tertiaryLined':
      return (
        <TertiaryLined cursor={cursor} type={type} width={width}>
          {children}
        </TertiaryLined>
      );
    case 'subtle':
      return (
        <SubtleChip cursor={cursor} type={type} width={width}>
          {children}
        </SubtleChip>
      );
    default:
      return (
        <PrimaryChip cursor={cursor} type={type} width={width}>
          {children}
        </PrimaryChip>
      );
  }
};
