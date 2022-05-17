import React from 'react';

export const EtherscanColor = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <rect width="24" height="24" fill="#fff" rx="12" />
    <rect width="24" height="24" fill="url(#pattern01)" rx="12" />
    <defs>
      <pattern
        id="pattern01"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use transform="scale(.0082)" xlinkHref="#image0_119_4352" />
      </pattern>
      <image
        id="image0_119_4352"
        width="543"
        height="122"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
