import React, { useState } from "react";
import { motion } from "framer-motion";

import styled from 'styled-components'

function App() {
  const [isOpen, setIsOpen] = useState(false);


  const menuVariants = {
    opened: {
      left: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    },
    closed: {
      left: "-100vw"
    }
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      x: 50
    },
    closed: {
      opacity: 0,
      x: 0
    }
  };

  return (
    <div className="App">
            {/* // هنشيل ال تحت دة ونحط سهم الباك بس */}

      <Header>
        <SvgBox
          animate={isOpen ? "opened" : "closed"}
          onClick={() => setIsOpen(!isOpen)}
        >
        سهم
      
        </SvgBox>
      </Header>
      {/* //كومبوننت السايد بار */}
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

// هنشيل دة ونحط سهم الباك بس
 const Header = styled.header`
  background: green;
  position: relative;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index: 2;
`;

//كومبوننت السايد بار
 const Nav = styled(motion.nav)`
  background-color: red; //remove
  height: 100vh; 
  min-width: 300px;
  max-width: 350px;
  position: fixed;
  left: 0;
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

 const SvgBox = styled(motion.div)`color:red;`;
