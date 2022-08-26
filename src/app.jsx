import React from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyle from "./globalStyles.js";
import {darkTheme, lightTheme} from "./components/Themes.jsx"
import { Routes, Route } from "react-router-dom-v5-compat";
import Main from "./components/Main.jsx"

// Home function that is reflected across the site
export default function Home() {
  return (
    <>
      <GlobalStyle />
      
      <ThemeProvider theme={darkTheme}>
      <Switch>
        <Route exact path="/" component= {Main} />
      </Switch>        
      </ThemeProvider>
    </>
  );
}
