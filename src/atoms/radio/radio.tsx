import React from 'react';
import { RadioProps } from './types';
import { Text } from '../texts/text';
import {
  Item, RadioButton, RadioButtonLabel,
} from './radio.styles';

export const Radio = ({
  disabled, selected, onClick, value, label, name,
}: RadioProps) => (
  <Item>
    <RadioButton
      type="radio"
      name={name}
      value={value}
      selected={selected}
      onClick={onClick}
      disabled={disabled}
    />
    <RadioButtonLabel disabled={disabled} />
    {label && (<Text size="S-Regular">{label}</Text>)}
  </Item>

);
