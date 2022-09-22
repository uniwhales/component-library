import React from 'react';
import { RadioProps } from './types';
import { Text } from '../texts/text';
import {
  Container, RadioAndLabel, RadioButton, RadioButtonLabel,
} from './radio.styles';
import { localTheme } from '../../theme';

export const Radio = ({
  disabled, selected, onClick, value, label, name, isLarge, labelColor,
}: RadioProps) => {
  const theme = localTheme();
  return (
    (
      <RadioAndLabel>
        {label && (
        <Text color={labelColor ?? theme.textShades.SHADE_MINUS_3} size="S-Bold">
          {label}
        </Text>
        )}
        <Container>
          <RadioButton
            type="radio"
            name={name}
            value={value}
            selected={selected}
            onClick={onClick}
            disabled={disabled}
            isLarge={isLarge}
          />
          <RadioButtonLabel isLarge={isLarge} disabled={disabled} />
        </Container>
      </RadioAndLabel>
    )
  );
};
