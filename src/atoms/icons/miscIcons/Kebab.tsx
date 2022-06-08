import React, { useState } from 'react';
import { useTheme } from 'styled-components';

export const Kebab = () => {
  const theme: any = useTheme();
  const hoverColor = theme.colors.primary.WATER_BLUE;
  const standardColor = theme.contrastColor.HIGH_CONTRAST;
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
      <mask
        id="mask0_5962_523141"
        style={{ maskType: 'alpha' }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill={fillValue}
          d="M12 7a2 2 0 100-4 2 2 0 000 4zm0 10a2 2 0 100 4 2 2 0 000-4zm0-7a2 2 0 100 4 2 2 0 000-4z"
        />
      </mask>
      <g mask="url(#mask0_5962_523141)">
        <path fill={fillValue} d="M0 0H26V26H0z" />
      </g>
    </svg>
  );
};
