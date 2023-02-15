import React from 'react';
import { Checkbox } from '../inputs/checkbox';
import {
  SelectableMarkedIdenticonWrapper,
} from './Identicon.styles';
import { MarkedIdenticon } from './MarkedIdenticon';
import { SelectableMarkedIdenticonProps } from './types';

export const SelectableMarkedIdenticon = ({
  checkbox, markedIdenticon, text, showCheckbox,
}: SelectableMarkedIdenticonProps) => (
  <SelectableMarkedIdenticonWrapper>
    <>
      {showCheckbox && (
        <Checkbox
          size="small"
          {...checkbox}
        />
      )}
      <MarkedIdenticon {...markedIdenticon} />
      {text && text}
    </>
  </SelectableMarkedIdenticonWrapper>
);
