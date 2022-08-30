import React from "react";
import styled from "styled-components";
const Box = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 55vw;
  height:40vh;
  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%
      )
      top;
      z-index: 1;
      
      border-left: 2px solid ${props=> props.theme.body};
      border-right: 2px solid ${props=> props.theme.text};
`;

  const SubBox = styled.div`
  width:50%;
  position: relative;
  display: flex;
  .pic{
    position: absolute;
    bottom:0;
    left:50%;
    transform: translate(-50%,0%);
    width:100%;
    height:auto;
  }

  `
  
  const Text = styled.div`

  `
  
  
function Intro(props) {
  return (
    <Box>
      <SubBox>
        <Text><h1>Hi,</h1>
          <h3>My Name is Sree Sankar.</h3>
          <h6>I design and code Full Stack Web Applications.</h6>
        </Text>
      </SubBox>
       <SubBox>
        <img src="https://cdn.glitch.global/bd8e117c-94ab-430e-a44c-0d5960c1b170/profile-img.png" className="pic" alt="Profile Pic" />
      </SubBox>
    </Box>
  );
}
export default Intro;
