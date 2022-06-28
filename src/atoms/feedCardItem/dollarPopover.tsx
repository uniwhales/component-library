import React from 'react';

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
      🦐 $100k-$249k volume (#shrimp)
    </p>
    <p style={{
      marginBottom: 4,
      color: '#0993EC',
    }}
    >
      🐟 $250k-$499k (#fish)
    </p>
    <p style={{
      marginBottom: 4,
      color: '#B769DC',
    }}
    >
      🐬 $500k-$999k (#dolphin)
    </p>
    <p style={{
      marginBottom: 4,
      color: '#E4599C',
    }}
    >
      🐋 = $1m+ (#whale)
    </p>
    <p>
      {`Standard ${'<'}
      $100k`}
    </p>
  </div>
);
