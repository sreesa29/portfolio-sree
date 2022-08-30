import React from "react";
import styled from "styled-components";

const Box = styled.a`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
`;

const Image = styled.div`
background-image: ${props=> `url(${props.img})`};
width:100%;
height:60%;
backgund
`;

function BlogComponent(props) {
  
  const {name, tags, date, imgSrc, link} = props.blog;
  
  return (
    <Box href={`${link}`} target="_blank">
        <Image img={imgSrc} />
    </Box>
  )
}
export default BlogComponent;
