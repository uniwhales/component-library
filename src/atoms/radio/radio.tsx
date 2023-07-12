import React from 'react';
import { RadioProps } from './types';
import { Text } from '../texts/text';
import {
  Container, RadioAndLabel, RadioButton, RadioButtonLabel,
} from './radio.styles';

export const Radio = ({
  disabled, selected, onClick, value, label, name, $isLarge, labelColor,
}: RadioProps) => (
  (
    <RadioAndLabel>
      {label && (
        <Text textColor={labelColor ?? 'SHADE_MINUS_3'} size="14-Bold">
          {label}
        </Text>
      )}
      <Container>
        <RadioButton
          type="radio"
          checked={selected}
          name={name}
          value={value}
          onClick={onClick}
          onChange={() => {}}
          disabled={disabled}
          $isLarge={!!$isLarge}
        />
        <RadioButtonLabel $isLarge={$isLarge} disabled={disabled} />
      </Container>
    </RadioAndLabel>
  )
);
