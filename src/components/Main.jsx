import React from "react";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton.jsx"
import LogoComponent from "../subComponents/LogoComponent.jsx"
import SocialIcons from "../subComponents/SocialIcons.jsx"
import { Link } from "react-router-dom-v5-compat";


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

const Contact  = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index:1;
`

const BLOG  = styled(Link)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%,-50%);
text-decoration: none;
z-index:1;
`

const WORK  = styled(Link)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
left: 2rem;
transform:  translate(-50%,-50%)rotate(-90deg);
text-decoration: none;
z-index:1;
`

function Main() {
  return (
    <>
      <MainContainer>
        <Container>
          <PowerButton />
          <LogoComponent /> 
          <SocialIcons />
          <Contact target="_blank" href= "mailto:sreesankar29@gmail.com">
            <h3> Say hi...
            </h3>
          </Contact>
          <BLOG to= "/blog">
            <h3> Blog
            </h3>
          </BLOG>
           <WORK to= "/work">
            <h3> Work
            </h3>
          </WORK>
        </Container>
      </MainContainer>
    </>
  );
}
export default Main;
