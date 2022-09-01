import React from "react";
import { darkTheme } from "./Themes.jsx";
import styled, { ThemeProvider, keyframes } from "styled-components";
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
 overflow: hidden;
`;

const float = keyframes`
0% {transform : translateY(-10px)}
50% {transform : translateY(15px) translateX(15px)}
100% {transform : translateY(-10px)}
`


const Sapceman = styled.div`
  position: absolute;
  top:10%;
  right:5%;
  width:20vw;
  animation: ${float}
`;


function AboutPage(props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme='dark' />
        <Sapceman>
        <img src="https://cdn.glitch.global/bd8e117c-94ab-430e-a44c-0d5960c1b170/spaceman.png" alt="spacmanpic" />
        </Sapceman>
      </Box>
    </ThemeProvider>
  );
}
export default AboutPage;
