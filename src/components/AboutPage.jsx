import React from "react";
import { darkTheme } from "./Themes.jsx";
import styled, { ThemeProvider } from "styled-components";
import { Design, Develope } from "./AllSvgs.jsx";
import LogoComponent from "../subComponents/LogoComponent.jsx";
import SocialIcons from "../subComponents/SocialIcons.jsx";
import PowerButton from "../subComponents/PowerButton.jsx";
import ParticleComponent from "../subComponents/ParticleComponent.jsx";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;


function AboutPage(props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme='dark' />
      
      </Box>
    </ThemeProvider>
  );
}
export default AboutPage;
