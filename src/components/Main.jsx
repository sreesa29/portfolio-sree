import React from "react";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton.jsx";
import LogoComponent from "../subComponents/LogoComponent.jsx";
import SocialIcons from "../subComponents/SocialIcons.jsx";
import { Link } from "react-router-dom-v5-compat";
import { YinYang } from "../components/AllSvgs.jsx";

const MainContainer = styled.div`
background: ${(props) => props.theme.body}
width: 100vw;
height:100vh;
overflow: hidden;
position: relative;
h2,h3,h4,h5,h6{
font-family: 'Karla', san-serif;
font-weight:500;
}
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const BLOG = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const WORK = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left:0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  
`;
const ABOUT = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const Center = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  &>:last-child{
  padding-top: 1rem;
  }
  
`;


function Main() {
  return (
    <>
      <MainContainer>
        <Container>
          <PowerButton />
          <LogoComponent />
          <SocialIcons />
          
          <Center>
          
                    <YinYang width={150} height={150} fill="currentColor" />
            <span>click here</span>
          </Center>
          
          
          <Contact target="_blank" href="mailto:sreesankar29@gmail.com">
            <h2> Say hi...</h2>
          </Contact>
          <BLOG to="/blog">
            <h2> Blog</h2>
          </BLOG>
          <WORK to="/work">
            <h2> Work</h2>
          </WORK>
          <BottomBar>
            <ABOUT to="/about">
              <h2> About.</h2>
            </ABOUT>
            <SKILLS to="/skills">
              <h2> My Skills.</h2>
            </SKILLS>
          </BottomBar>
        </Container>
      </MainContainer>
    </>
  );
}
export default Main;
