import React, { useState } from 'react';
import {
  Required,
  Select, SelectProps, SelectVariation,
} from '../../../atoms/inputs/select';
import { Text } from '../../../atoms/texts/text';
import { BodySizes, HeaderSizes } from '../../../atoms/texts/types';
import { localTheme } from '../../../theme';
import { LabeledSelectWrapper } from './style';
import { IconWrapper } from '../../../atoms/icons/iconWrapper';

export type SelectLabel = {
  label: string
  fontSize?: BodySizes | HeaderSizes,
  color?: string,
  icon?: JSX.Element
  iconSize?: string
};

export type LabeledSelectProps = {
  labels?: SelectLabel[]
  label?: string
  labelFontSize?: BodySizes | HeaderSizes,
  labelColor?: string
  icon?: JSX.Element
  iconSize?: string
};

export const LabeledSelect = <T extends SelectVariation>(
  props: SelectProps<T> & LabeledSelectProps,
) => {
  const {
    label, labels, isDisabled, labelColor, labelFontSize,
    required, icon, iconSize,
  } = props;
  const { textShades } = localTheme();
  const [hover, setHover] = useState(false);
  return (
    <LabeledSelectWrapper>
      {label && (
      <Text size={labelFontSize ?? '12-Regular'} color={!isDisabled && hover ? textShades.SHADE_MINUS_3 : labelColor || (isDisabled ? textShades.SHADE_MINUS_1 : textShades.SHADE_MINUS_2)}>
        <>
          {icon && (
            <IconWrapper
              height={iconSize || '16px'}
              width={iconSize || '16px'}
              icon={icon}
            />
          )}
          {label}
          {required && (<Required disabled={!!isDisabled}>*</Required>)}
        </>
      </Text>
      )}
      {labels && labels.map((l) => (
        <Text key={l.label} size={l?.fontSize ?? '12-Regular'} color={!isDisabled && hover ? textShades.SHADE_MINUS_3 : l.color ?? textShades.SHADE_MINUS_1}>
          <>
            {l.icon && (
            <IconWrapper
              height={l.iconSize || '16px'}
              width={l.iconSize || '16px'}
              icon={l.icon}
            />
            )}
            {l.label}
            {required && (<Required disabled={!!isDisabled}>*</Required>)}
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
