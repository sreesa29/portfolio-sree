import React from "react";
import styled from "styled-components";


const Logo = styled.h1`
  display: inline-block'
  color: ${props => props.theme.text};
  font-familt:"Pacifico", cursive;
`

const LogoComponent = () => {
  return (
    <Logo>
      Sree Sankar
    </Logo>
  );
};
export default LogoComponent;
