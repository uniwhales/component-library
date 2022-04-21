
import React from 'react';
import { ThemeProvider } from 'styled-components'
import { Theme } from '../src/theme';
import { GlobalStyle } from "../src/theme";


const ThemeDecorator = (storyFn) => (
    <ThemeProvider theme={Theme}>
        {storyFn()}
        <GlobalStyle />
    </ThemeProvider>
);

export default ThemeDecorator;



