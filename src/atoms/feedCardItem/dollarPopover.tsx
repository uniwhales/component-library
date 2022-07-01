import React from 'react';
import { feedCardItemText } from './text';

export const dollarPopover = (
  <div style={{
    padding: '15px 20px',
    display: 'flex',
    flexDirection: 'column',
    width: 241,
    height: 156,
    borderRadius: 8,
  }}
  >
    <p style={{
      marginBottom: 4,
      color: '#DD8442',
    }}
    >
      {feedCardItemText.dollarPopover.shrimp}
    </p>
    <p style={{
      marginBottom: 4,
      color: '#0993EC',
    }}
    >
      {feedCardItemText.dollarPopover.fish}
    </p>
    <p style={{
      marginBottom: 4,
      color: '#B769DC',
    }}
    >
      {feedCardItemText.dollarPopover.dolphin}
    </p>
    <p style={{
      marginBottom: 4,
      color: '#E4599C',
    }}
    >
      {feedCardItemText.dollarPopover.whale}
    </p>
    <p>
      {feedCardItemText.dollarPopover.standard}
    </p>
  </div>
);
