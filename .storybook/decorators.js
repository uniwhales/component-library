
import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/theme';
import { GlobalStyle } from "../src/theme";


const ThemeDecorator = (storyFn) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        {storyFn()}
    </ThemeProvider>
);
console.log('123');
export default ThemeDecorator;



