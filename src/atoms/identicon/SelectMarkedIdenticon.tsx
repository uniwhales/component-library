import React from 'react';
import { Checkbox } from '../inputs/checkbox';
import {
  SelectableMarkedIdenticonWrapper,
} from './Identicon.styles';
import { MarkedIdenticon } from './MarkedIdenticon';
import { SelectableMarkedIdenticonProps } from './types';

export const SelectableMarkedIdenticon = ({
  checkbox, markedIdenticon, text,
}: SelectableMarkedIdenticonProps) => (
  <SelectableMarkedIdenticonWrapper>
    <>
      <Checkbox
        rounded
        size="small"
        {...checkbox}
      />
      <MarkedIdenticon {...markedIdenticon} />
      {text && text}
    </>
  </SelectableMarkedIdenticonWrapper>
);
