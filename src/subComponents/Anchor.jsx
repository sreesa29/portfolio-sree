import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, Anchor } from "../components/AllSvgs.jsx";

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-50%);
  .chain {
    transform: rotate(135deg);
  }
`;

function AnchorComponent() {
  const ref = useRef(null);
  const hiddenRef = useRef(null);
  
  useEffect(()=>{
    
    const handleScroll = () =>{
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bod
    }
    
    
    
    
    window.addEventListener('scroll', handleScroll)
    return()=> window.remobeEventListener('scroll', handleScroll)
  },[])

  return (
    <Container>
      <Slider ref={ref}>
        {[...Array(25)].map((x, id) => {
          return (
            <Link
              to="/"
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
}
export default AnchorComponent;
