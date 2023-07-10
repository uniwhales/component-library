import React, { useState } from 'react';
import {
  Select,
} from '../../../atoms/inputs/select/select';
import { Text } from '../../../atoms/texts/text';
import { Color, TextVariant } from '../../../theme';
import { LabeledSelectWrapper } from './style';
import { Required } from '../../../atoms/inputs/select/components';
import { SelectProps, SelectVariation } from '../../../atoms/inputs/select/types';

export type SelectLabel = {
  label: string
  fontSize?: TextVariant,
  color?: Color,
};

export type LabeledSelectProps = {
  labels?: SelectLabel[]
  label?: string
  labelFontSize?: TextVariant,
  labelColor?: Color
};

export const LabeledSelect = <T extends SelectVariation>(
  props: SelectProps<T> & LabeledSelectProps,
) => {
  const {
    label, labels, $isDisabled, labelColor, labelFontSize,
    required,
  } = props;
  const [hover, setHover] = useState(false);
  return (
    <LabeledSelectWrapper>
      {label && (
      <Text size={[labelFontSize ?? '12-Regular']} textColor={!$isDisabled && hover ? 'SHADE_MINUS_3' : labelColor || ($isDisabled ? 'SHADE_MINUS_1' : 'SHADE_MINUS_2')}>
        <>
          {label}
          {required && (<Required disabled={!!$isDisabled}>*</Required>)}
        </>
      </Text>
      )}
      {labels && labels.map((l) => (
        <Text key={l.label} size={[l?.fontSize ?? '12-Regular']} textColor={!$isDisabled && hover ? 'SHADE_MINUS_3' : l.color ?? 'SHADE_MINUS_1'}>
          <>
            {l.label}
            {required && (<Required disabled={!!$isDisabled}>*</Required>)}
          </>
        </Text>
      )) }
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Select
          {...props}
        />
      </div>
    </LabeledSelectWrapper>
  );
};
