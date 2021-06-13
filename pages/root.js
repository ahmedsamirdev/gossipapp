import React, { useState } from "react";
import { motion } from "framer-motion";

import styled from 'styled-components'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    opened: {
      rotate: 135
    },
    closed: {
      rotate: 0
    }
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    },
    closed: {
      top: "-80vh"
    }
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50
    },
    closed: {
      opacity: 0,
      y: 0
    }
  };

  return (
    <div className="App">
      <Header>
        <SvgBox
          animate={isOpen ? "opened" : "closed"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="#fff"
            />
          </svg>
        </SvgBox>
      </Header>

      <Nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
as
      </Nav>
    </div>
  );
}

export default App;


 const Header = styled.header`
  background: green;
  position: relative;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 2;
`;

 const Nav = styled(motion.nav)`
  background-color: red;
  height: 90vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

 const Link = styled(motion.li)`
  color: white;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
`;

 const SvgBox = styled(motion.div)``;
