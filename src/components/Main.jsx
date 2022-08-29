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


const Contact  = styled(Link)`
color: ${props => props.theme.text}
`

function Main() {
  return (
    <>
      <MainContainer>
        <Container>
          <PowerButton />
          <LogoComponent />
          <SocialIcons />
          <Contact target="_blank" to={{pathname: "mailto:sreesankar29@gmail.com"}}>
            <h3> Say hi...
            </h3>
          </Contact>
        </Container>
      </MainContainer>
    </>
  );
}
export default Main;
