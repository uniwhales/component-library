import React, { useState } from 'react';
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
  const {
    labelColor, labelFontSize, label, isDisabled,
  } = props;
  const { textShades } = localTheme();
  const [hover, setHover] = useState(false);
  return (
    <LabeledSelectWrapper>
      <Text size={labelFontSize ?? 'S-Bold'} color={!isDisabled && hover ? textShades.SHADE_MINUS_3 : labelColor ?? textShades.SHADE_MINUS_1}>{label}</Text>
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Select
          {...props}
        />
      </div>
    </LabeledSelectWrapper>
  );
};
