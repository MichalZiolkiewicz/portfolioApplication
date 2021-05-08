import styled from "styled-components";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export const Wrapper = styled(motion.div)`
  //background-image: linear-gradient(#D2D2D2, #747474);
  height: 100vh;
  width: 100vw;
`
export const ContentBox = styled(motion.div)`
  //background-image: linear-gradient(#DACDE1, #518CCF);
  padding: 10vh 10vh;
  height: 100vh;
  box-sizing: border-box;
`

export const Header = styled.p<{color: string}>`
  font-size: calc((1vh + 1vw) / 2 * 5);
  color: ${props => (props.color)};
`

export const Text = styled.p<{isPrimary: boolean, color: string}>`
  font-size: calc((1vh + 1vw) / 2 * 3);
  margin-top: ${props => (props.isPrimary ? 0 : "50px")};
  color: ${props => (props.color)};
`

export const AnimatedText = styled(motion.div)`
  font-size: calc((1vh + 1vw) / 2 * 3);
`

export const Input = styled.input`
  font-size: calc((1vh + 1vw) / 2 * 2.8);
  background-color: transparent;
  border: 4px solid black;
  outline: none;
  margin-left: 50px;
  width: 300px;
  padding: 5px 10px;
  transition: .3s;
  
  &:hover{
    border-color: #b71540;
  }
`

export const SuperLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline;
  white-space: nowrap;
  position: relative;
  left: 3vw;
  top: 1vh;
  transition: .2s;
`

export const Item = styled.li`
  font-size: calc((1vh + 1vw) / 2 * 2.5);
  list-style: none;
  background-color: white;
  margin-top: 30px;
  width: calc((1vh + 1vw) / 2 * 40);
  height: calc((1vh + 1vw) / 2 * 2.5);
  transition: .2s;
  
  &:hover{
    ${SuperLink} {
      color: #b71540;
    }
    background-color: #82ccdd;
  }
`