
import React from 'react';
import { ThemeProvider } from 'styled-components'
import {DarkTheme, LightTheme, Theme} from '../src/';
import { GlobalStyle } from "../src/theme";

const darkTheme = {...Theme, ...DarkTheme}
const lightTheme = {...Theme, ...LightTheme}


const ThemeDecorator = (storyFn, context) => {
    return (
        <ThemeProvider theme={context.globals.backgrounds?.value ==='#191B20' ? darkTheme : lightTheme}>
        <GlobalStyle />
        {storyFn()}
        <div id="modal"></div>
    </ThemeProvider>)
};
export default ThemeDecorator;



