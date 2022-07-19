import { addDecorator } from '@storybook/react';
import themeDecorator from './decorators';
    
addDecorator(themeDecorator);

const customViewports = {
  '2kScreen': {
    name: '2k/1920px',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
  '13inch': {
    name: 'Apple MacBook Air 13-inch ',
    styles: {
      width: '1441px',
      height: '900px',
    },
  },
  '1280px': {
    name: '1280px width ',
    styles: {
      width: '1281px',
      height: '800px',
    },
  },
  'iPadPro12': {
    name: 'iPad Pro 12.9',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  'iPadPro11': {
    name: 'iPad Pro 11',
    styles: {
      width: '656px',
      height: '368px',
    },
  },
  'Mobile': {
    name: 'Samsung S10',
    styles: {
      width: '360px',
      height: '760px',
    },
  },
};

export const parameters = {
  viewport: {
    viewports: customViewports,
    defaultViewport: '13inch',
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'dark theme',
        value: '#191B20',
      },
      {
        name: 'light theme',
        value: '#EFF1F8',
      },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
