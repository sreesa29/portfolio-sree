import React from "react";
import styled from "styled-components";
const Box = styled.div`
  position: absolute;
  left: 50%;
  top: 50%; 
  transform: translate(-50%, -50%);

  width: 55vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  &>*:last-child{
  color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
  font-size: calc(0.5rem + 1.5vw);
  font-weight:300;
  }
  
`;

function Intro(props) {
  return (
    <Box>
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>My Name is Sree Sankar.</h3>
          <h6>I design and code Full Stack Web Applications.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <img
          src="https://cdn.glitch.global/bd8e117c-94ab-430e-a44c-0d5960c1b170/profile-img.png"
          className="pic"
          alt="Profile Pic"
        />
      </SubBox>
    </Box>
  );
}
export default Intro;
