import styled from "styled-components";
import { Github, Twitter, Facebook, YouTube } from "../components/AllSvgs.jsx";
import { darkTheme } from "../components/Themes.jsx";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          style={{ color: "inherit" }}
          href="https://github.com/sreesa29"
          target="_blank"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          style={{ color: "inherit" }}
          href="https://twitter.com/"
          target="_blank"
        >
          {" "}
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          style={{ color: "inherit" }}
          href="https://facebook.com/"
          target="_blank"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          style={{ color: "inherit" }}
          href="https://youtube.com/"
          target="_blank"
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <Line color={props.theme} />
    </Icons>
  );
};
export default SocialIcons;
