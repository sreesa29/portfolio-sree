import React, {useState, useEffect} from "react";
// import Particles from 'react-particles-js'
import styled from "styled-components";
//particle config

import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";



const Box = styled.div`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`

function ParticleComponent(props) {
   
  return (
    <Box>
    </Box>
  );
}
export default ParticleComponent;
