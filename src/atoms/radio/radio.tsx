import React from 'react';
import { RadioProps } from './types';
import { Text } from '../texts/text';
import {
  Item, RadioButton, RadioButtonLabel,
} from './radio.styles';

export const Radio = ({
  disabled, selected, onChange, value, label,
}: RadioProps) => (
  <Item>
    <RadioButton
      type="radio"
      value={value}
      selected={selected}
      onChange={onChange}
      disabled={disabled}
    />
    <RadioButtonLabel disabled={disabled} />
    {label && (<Text size="S-Regular">{label}</Text>)}
  </Item>

);
