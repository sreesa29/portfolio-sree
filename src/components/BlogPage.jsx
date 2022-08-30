import React from "react";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton.jsx";
import LogoComponent from "../subComponents/LogoComponent.jsx";
import SocialIcons from "../subComponents/SocialIcons.jsx";

const MainContainer = styled.div`
background-image: url("https://cdn.glitch.global/bd8e117c-94ab-430e-a44c-0d5960c1b170/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg");
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width:100vw;
`;

const Container = styled.div`
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
width:100%;
height:100vh;
position: relative;
padding-bottom: 5rem;
`;

const Center = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding-top: 10rem;
`

const Grid = styled.div`
display:grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw),1fr));
`



function BlogPage() {
  return (
     <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <Center>
        <Grid>
        </Grid>
        </Center>
      </Container>
      </MainContainer>
    
  );
}
export default BlogPage;