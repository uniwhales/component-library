import { addDecorator } from '@storybook/react';
import themeDecorator from './decorators';
addDecorator(themeDecorator);


export const parameters = {
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'dark theme',
        value: '#1F2128',
      },
      {
        name: 'light theme',
        value: '#F9FAFF',
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
