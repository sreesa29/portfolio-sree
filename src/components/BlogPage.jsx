import React from "react";
import styled from "styled-components";


const MainContainer = styled.div`
background-image: url("https://cdn.glitch.global/bd8e117c-94ab-430e-a44c-0d5960c1b170/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg");
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
width:100vw;
height:100vh;
`;

const Container = styled.div`
    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};


`;


function BlogPage() {
  return (
     <MainContainer>
      <Container>
        
      </Container>
      </MainContainer>
  );
}
export default BlogPage;