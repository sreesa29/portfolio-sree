import React from "react";
import styled from "styled-components";

const Box = styled.div`
position: absolute;
left:50%;
top:50%;
transform: translate(-50%,-50%);

width:55vw;
display:flex;
background-repeat:no-repeat;
background-size:100% 2px;
background: linear-gardient(to right, ${props=>props.theme.body}50%,
${props=>props.theme.text}50%)bottom
`;
function Intro(props) {
  return( 
    <Box>
      Introduction
    </Box>
  );
}
export default Intro;
