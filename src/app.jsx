import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles.js";
import { darkTheme, lightTheme } from "./components/Themes.jsx";
import { Routes, Route } from "react-router-dom-v5-compat";

//components
import Main from "./components/Main.jsx";
import AboutPage from "./components/AboutPage.jsx";
import BlogPage from "./components/BlogPage.jsx";
import MySkillsPage from "./components/MySkillsPage.jsx";
import WorkPage from "./components/WorkPage.jsx";

// Home function that is reflected across the site
export default function Home() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/skills" element={<MySkillsPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
