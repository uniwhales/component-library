import React from 'react';
import { Select, SelectProps, SelectVariation } from '../../atoms/inputs/select';
import { Text } from '../../atoms/texts/text';
import { BodySizes, HeaderSizes } from '../../atoms/texts/types';
import { localTheme } from '../../theme';
import { LabeledSelectWrapper } from './style';

export type LabeledSelectProps = {
  label: string
  labelFontSize?: BodySizes | HeaderSizes,
  labelColor?: string,
};

export const LabeledSelect = <T extends SelectVariation>(
  props: SelectProps<T> & LabeledSelectProps,
) => {
  const { labelColor, labelFontSize, label } = props;
  const { textShades } = localTheme();
  return (
    <LabeledSelectWrapper>
      <Text size={labelFontSize ?? 'S-Bold'} color={labelColor ?? textShades.SHADE_MINUS_3}>{label}</Text>
      <Select {...props} />
    </LabeledSelectWrapper>
  );
};
