import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

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

    return(
        <Wrapper>
            <Text>
                Szara i nudna strona?
            </Text>
            <ColorButton onClick={handleChangePath}>
                <SuperLink to="/start">Dodaj koloru!</SuperLink>
            </ColorButton>
        </Wrapper>

    )
}

export default Main;