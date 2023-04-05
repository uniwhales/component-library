import React, { useState } from 'react';
import { Required } from '../../../atoms/inputs/input';
import {
  Select, SelectProps, SelectVariation,
} from '../../../atoms/inputs/select';
import { Text } from '../../../atoms/texts/text';
import { BodySizes, HeaderSizes } from '../../../atoms/texts/types';
import { localTheme } from '../../../theme';
import { LabeledSelectWrapper } from './style';

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
    label, labels, isDisabled, labelColor, labelFontSize, required,
  } = props;
  const { textShades } = localTheme();
  const [hover, setHover] = useState(false);
  return (
    <LabeledSelectWrapper>
      {label && (
      <Text size={labelFontSize ?? '12-Regular'} color={!isDisabled && hover ? textShades.SHADE_MINUS_3 : labelColor ?? textShades.SHADE_MINUS_2}>
        <>
          {label}
          {required && (<Required>*</Required>)}
        </>
      </Text>
      )}
      {labels && labels.map((l) => (
        <Text key={l.label} size={l?.fontSize ?? '12-Regular'} color={!isDisabled && hover ? textShades.SHADE_MINUS_3 : l.color ?? textShades.SHADE_MINUS_1}>
          <>
            {l.label}
            {required && (<Required>*</Required>)}
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
