import React from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import styled from "styled-components";

const SuperLink = styled(Link)`
  color: #282c34;
  text-decoration: none;
`

const ColorButton = styled.button`
  z-index: 1;
  margin: 0 auto;
  display: block;
  background: none;
  border: 2px solid #282c34;
  padding: 10px 40px;
  font-size: 40px;
  color: #282c34;
  cursor: pointer;
  transition: color .3s linear;
  position: relative;
  
  &:hover{
    border-color: #000AFF;
    
    ${SuperLink} {
      color: #000AFF;
    }
  }
  
  &::before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #FFC700;
    z-index: -1;
    transition: transform .5s;
    transform-origin: 0 0;
    transition-timing-function: cubic-bezier(0.5,1.6,0.4,0.7);
    transform: scaleY(0);
  }

  &:hover::before{
    transform: scaleY(1);
  }
`

const Text = styled.p`
  font-size: 80px;
  color: #282c34;
`

const Wrapper = styled.div`
  background-image: linear-gradient(#D2D2D2, #747474);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
`

const Main = () => {

    const handleChangePath = () => {
        console.log("No to idziemy dalej!")
    }

    const transition = {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
    };

    const mainVariant = {
        exit: { opacity: 0, transition},
        enter: { opacity: 1, transition: {delay: 0.2, ...transition }}
    }

    return(
        <Wrapper>
            <motion.div initial="exit" animate="enter" exit="exit" variants={mainVariant}>
                <Text>
                    Szara i nudna strona?
                </Text>
                <ColorButton onClick={handleChangePath}>
                    <SuperLink to="/start">Dodaj koloru!</SuperLink>
                </ColorButton>
            </motion.div>
        </Wrapper>

    )
}

export default Main;