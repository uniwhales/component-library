import React, { useState } from 'react';
import {
  Select,
} from '../../../atoms/inputs/select/select';
import { Text } from '../../../atoms/texts/text';
import { BodySizes, HeaderSizes } from '../../../atoms/texts/types';
import { localTheme } from '../../../theme';
import { LabeledSelectWrapper } from './style';
import { Required } from '../../../atoms/inputs/select/components';
import { SelectProps, SelectVariation } from '../../../atoms/inputs/select/types';

export type SelectLabel = {
  label: string
  fontSize?: BodySizes | HeaderSizes,
  color?: string,
};

export type LabeledSelectProps = {
  labels?: SelectLabel[]
  label?: string
  labelFontSize?: BodySizes | HeaderSizes,
  labelColor?: string
};

export const LabeledSelect = <T extends SelectVariation>(
  props: SelectProps<T> & LabeledSelectProps,
) => {
  const {
    label, labels, $isDisabled, labelColor, labelFontSize,
    required,
  } = props;
  const { textShades } = localTheme();
  const [hover, setHover] = useState(false);
  return (
    <LabeledSelectWrapper>
      {label && (
      <Text size={labelFontSize ?? '12-Regular'} color={!$isDisabled && hover ? textShades.SHADE_MINUS_3 : labelColor || ($isDisabled ? textShades.SHADE_MINUS_1 : textShades.SHADE_MINUS_2)}>
        <>
          {label}
          {required && (<Required disabled={!!$isDisabled}>*</Required>)}
        </>
      </Text>
      )}
      {labels && labels.map((l) => (
        <Text key={l.label} size={l?.fontSize ?? '12-Regular'} color={!$isDisabled && hover ? textShades.SHADE_MINUS_3 : l.color ?? textShades.SHADE_MINUS_1}>
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
