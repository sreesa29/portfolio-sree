import React from "react";
import {lightTheme} from "./Themes.jsx"
import styled, {ThemeProvider} from "styled-components";

const Box = styled.div`
background-color: ${props=> props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Main = styled.div`
border: 2px solid ${props=> props.theme.text};
color: ${props=> props.theme.text};
background-color: ${props=> props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
` 

function MySkillsPage(props) {
  return (
    <ThemeProvider theme={lightTheme}>
     <Box>
       <Main>
       </Main>
    </Box>
    </ThemeProvider>
  );
}
export default MySkillsPage;