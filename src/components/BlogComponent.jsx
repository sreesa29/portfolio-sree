import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom-v5-compat";

const Box = styled(Link)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
`;

function BlogComponent(props) {
  return (
    <Box to="/">
        Blog Item
    </Box>
  )
}
export default BlogComponent;
