import React from "react";
import styled from "styled-components";
import { Github, Twitter, Facebook, YouTube } from "../components/AllSvgs.jsx";
import { Link, NavLink } from "react-router-dom-v5-compat";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom:0;
  left:2rem;
  z-index:3;
  
  &>*:not(:last-child){
       margin: 0.5rem 0;
  }
`;

const Line = styled.span`
 width:2px;
 height:8rem;
 background-color:${props=>props.theme.text}
`;

const SocialIcons = () => {
  return(
    <Icons>
      
      <div>
        <NavLink style={{color:"inherit"}} target="_blank" to={{pathname:"https://github.com/sreesa_29"}}>
        <Github width={25} height={25} fill="currentColor"  />
        </NavLink>
      </div>
      
       <div>
        <Link style={{color:"inherit"}} to="/">
        <Twitter width={25} height={25} fill="currentColor"  />
        </Link>
      </div>
      
      <div>
        <Link style={{color:"inherit"}} to="/">
        <Facebook width={25} height={25} fill="currentColor"  />
        </Link>
      </div>
      
      <div>
        <Link style={{color:"inherit"}} to="/">
        <YouTube width={25} height={25} fill="currentColor"  />
        </Link>
      </div>
    <Line />
    </Icons>
  );
};
export default SocialIcons;
