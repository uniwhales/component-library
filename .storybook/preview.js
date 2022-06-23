import { addDecorator } from '@storybook/react';
import themeDecorator from './decorators';
import { MemoryRouter } from "react-router";
    
addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
addDecorator(themeDecorator);


export const parameters = {
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
