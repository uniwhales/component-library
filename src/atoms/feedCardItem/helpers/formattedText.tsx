import React from 'react';
import { useTheme } from 'styled-components';
import { Theme } from '../../../theme';
import { abbreviateNumber } from '../../../utils/format';
import { Text } from '../../texts/text';
import { BodySizes, HeaderSizes } from '../../texts/types';

export const getFormattedText = (
  num: number,
  size: BodySizes | HeaderSizes,
) => {
  const theme = useTheme() as typeof Theme;
  switch (true) {
    case (num >= 100000 && num < 250000):
      return (
        <Text size={size} color={theme.colors.secondary.TANGY}>
          <>
            (🦐 $
            {abbreviateNumber(num)}
            )
          </>

        </Text>
      );
    case (num >= 250000 && num < 500000):
      return (
        <Text size={size} color={theme.colors.secondary.TURQUOISE}>
          <>
            (🐟 $
            {abbreviateNumber(num)}
            )
          </>
        </Text>
      );
    case (num >= 500000 && num < 1000000):
      return (
        <Text size={size} color={theme.colors.secondary.PURPLE}>
          <>
            🐬 ($
            {abbreviateNumber(num)}
            )

          </>
        </Text>
      );
    case (num >= 1000000):
      return (
        <Text size={size} color={theme.colors.secondary.FUSCHIA}>
          <>
            🐋 ($
            {abbreviateNumber(num)}
            )

          </>
        </Text>
      );
    default:
      return (
        <Text size={size} color={theme.textShades.SHADE_MINUS_2}>
          <>
            ($
            {abbreviateNumber(num)}
            )
          </>
        </Text>
      );
  }
};
