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
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
   
  return (
    <Box>
       <Particles options={props.theme === "light" ? configLight : configDark} />
    </Box>
  );
}
export default ParticleComponent;
