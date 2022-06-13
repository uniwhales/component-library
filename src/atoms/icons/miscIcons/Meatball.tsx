import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Theme } from '../../../theme';

export const Meatball = () => {
  const theme = useTheme() as typeof Theme;
  const hoverColor = theme.colors.primary.WATER_BLUE;
  const standardColor = theme.containerAndCardShades.NEUTRAL_SHADE_0;
  const [fillValue, setFillValue] = useState<string>(standardColor);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      onMouseEnter={() => setFillValue(hoverColor)}
      onMouseLeave={() => setFillValue(standardColor)}
    >
      <path
        fill={fillValue}
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
      />
      <mask
        id="mask0_6345_126068"
        style={{ maskType: 'alpha' }}
        width="16"
        height="16"
        x="4"
        y="4"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#F8F9FF"
          d="M12 10.667a1.333 1.333 0 100 2.666 1.333 1.333 0 000-2.666zm-4.667 0a1.333 1.333 0 100 2.665 1.333 1.333 0 000-2.665zm9.334 0a1.333 1.333 0 100 2.666 1.333 1.333 0 000-2.666z"
        />
      </mask>
      <g mask="url(#mask0_6345_126068)">
        <path fill="#F8F9FF" d="M4 4H21.333V21.333H4z" />
      </g>
    </svg>
  );
};
