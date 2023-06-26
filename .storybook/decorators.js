
import React from 'react';
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { DarkTheme, LightTheme, Theme } from '../src/';
import { GlobalStyle } from "../src/theme";
import isPropValid from '@emotion/is-prop-valid';


const darkTheme = { ...Theme, ...DarkTheme }
const lightTheme = { ...Theme, ...LightTheme }


const ThemeDecorator = (storyFn, context) => {
    return (
        <StyleSheetManager shouldForwardProp={isPropValid}>
            <ThemeProvider theme={context.globals.backgrounds?.value === '#191B20' ? darkTheme : lightTheme}>
                <GlobalStyle />
                {storyFn()}
                <div id="modal" />
            </ThemeProvider>
        </StyleSheetManager>
    )
};
export default ThemeDecorator;



