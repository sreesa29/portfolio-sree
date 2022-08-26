import React from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./globalStyles.js";
import {darkTheme, lightTheme} from "./components/Themes.js"

// Home function that is reflected across the site
export default function Home() {
  return (
    <>
      <GlobalStyle />
      
      <ThemeProvider theme={darkTheme}>
      
      <p>APP</p>
        
      </ThemeProvider>
    </>
  );
}
