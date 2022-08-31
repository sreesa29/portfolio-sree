import React from "react";
import { lightTheme } from "./Themes.jsx";
import styled, { ThemeProvider } from "styled-components";
import { Design, Develope } from "./AllSvgs.jsx";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  
  strong{
  margin-bottom: 1rem;
  text-transform: uppercase;
  }
  ul,p{
  margin-left: 2rem;
  }
`;

function MySkillsPage(props) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I LIKE TO DESIGN</strong>
            <ul>
              <li>Web Design</li>
              <li>Canva</li>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} /> Full Satck Developer
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>HTML, CSS, JS, ReactJS, Node JS, Express, MongoDB, Bootstrap, Tailwind etc.</p>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
export default MySkillsPage;
