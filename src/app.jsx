import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles.js";
import { darkTheme, lightTheme } from "./components/Themes.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom-v5-compat";
import Main from "./components/Main.jsx";

// Home function that is reflected across the site
export default function Home() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <ThemeProvider theme={darkTheme}>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}
