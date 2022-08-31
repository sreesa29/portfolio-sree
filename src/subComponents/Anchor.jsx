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
  transform: translateY(-100%);
  .chain {
    transform: rotate(135deg);
  }
`;  
  const PreDisplay = styled.div`
  position: absolute;
  top:0;
  right: 2rem;
  `
 


function AnchorComponent() {
  const ref = useRef(null);
  const hiddenRef = useRef(null);
  
  useEffect(()=>{
    
    const handleScroll = (props) =>{
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;
      let diff = Math.max(bodyHeight - (scrollPosition + windowSize))
      let diffP = (diff * 100) / (bodyHeight - windowSize);
      ref.current.style.transform = `translateY(${-diffP}%)`
      
      if(window.pageYOffset > 5){ 
        hiddenRef.current.style.display = "none";
      }else{
       hiddenRef.current.style.display = "block";

      }
      
    }    
    
    window.addEventListener('scroll', handleScroll)
    return()=> window.removeEventListener('scroll', handleScroll)
  },[])

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
                <Anchor width={70} height={70} fill="currentColor" />

      </PreDisplay>
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
