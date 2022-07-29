import React from 'react';

export const SettingsBars = () => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="settings_bars_svg_mask_01"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        d="M21 19.977h-5.18a3 3 0 0 1-5.64 0H3a1 1 0 0 1 0-2h7.18a3 3 0 0 1 5.64 0H21a1 1 0 1 1 0 2ZM21 12.976H9.82a3 3 0 0 1-5.64 0H3a1 1 0 0 1 0-2h1.18a3 3 0 0 1 5.64 0H21a1 1 0 1 1 0 2ZM21 5.976h-3.18a3 3 0 0 1-5.64 0H3a1 1 0 0 1 0-2h9.18a3 3 0 0 1 5.64 0H21a1 1 0 1 1 0 2Z"
      />
    </mask>
    <g mask="url(#settings_bars_svg_mask_01)">
      <path d="M0 0h26v26H0z" />
    </g>
  </svg>
);
