import React, {useRef} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom-v5-compat";

const Container = styled.div`
position: relative;
`;

const Slider = styled.div`
position: fixed;
top: 0;
right: 2rem;
`;


function AnchorComponent() {
  
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  return (
    <Container>
      <Slider ref={ref}>
      {
          [...Array(25)].map((x,id)=>{
            return <Link to="/" key={id} width={25} height={25} fill="currentColor" className="chain" />
          })
        }
      
      </Slider>
    </Container>
  );
}
export default AnchorComponent;