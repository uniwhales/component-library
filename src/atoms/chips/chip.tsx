import React from 'react';
import { ChipProps } from './types';
import {
  PrimaryChip, SecondaryChip, EditableChip, TertiaryChip,
} from './chip.styles';

export const Chip = ({ type, children, onClick }: ChipProps) => {
  switch (type) {
    case 'secondary':
      return (
        <SecondaryChip type={type}>
          {children}
        </SecondaryChip>
      );
    case 'editable':
      return (
        <EditableChip
          suppressContentEditableWarning
          contentEditable
          type={type}
          onClick={onClick}
        >
          {children}
        </EditableChip>
      );
    case 'tertiary':
      return (
        <TertiaryChip type={type}>
          {children}
        </TertiaryChip>
      );
    default:
      return (
        <PrimaryChip type={type}>
          {children}
        </PrimaryChip>
      );
  }
};
