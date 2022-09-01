import React, {useCallback} from "react";

import styled from "styled-components";
//particle config

import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Box = styled.div`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`

function ParticleComponent(props) {
  
  const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
    }, []);
   
  return (
    <Box>
     <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options= {props.theme === "light" ? configLight : configDark}
        />
    </Box>
  );
}
export default ParticleComponent;
