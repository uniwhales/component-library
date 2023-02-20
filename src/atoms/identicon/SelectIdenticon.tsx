import React from 'react';
import { Checkbox } from '../inputs/checkbox';
import { IdenticonComponent } from './Identicon';
import {
  SelectableIdenticonWrapper,
} from './Identicon.styles';
import { SelectableIdenticonProps } from './types';

export const SelectableIdenticon = ({
  checkbox, identicon, text, showCheckbox,
}: SelectableIdenticonProps) => (
  <SelectableIdenticonWrapper>
    <>
      {showCheckbox && (
        <Checkbox
          size="small"
          {...checkbox}
        />
      )}
      <IdenticonComponent {...identicon} />
      {text && text}
    </>
  </SelectableIdenticonWrapper>
);
