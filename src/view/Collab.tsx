import React, {useContext, useState} from "react";
import {motion} from "framer-motion";
import styled from "styled-components";
import { Wrapper, ContentBox, SuperLink, Text, Header} from "../globalStyle/styled";

import {AppContext} from "../context/AppContext";


const Label = styled.p`
  white-space: nowrap;
  position: relative;
  left: 3vw;
  top: 1vh;
  transition: .2s;
`

const PinkButton = styled(motion.button)`
  background-color: transparent;
  border: 2px solid #FF008A;
  color: black;
  font-size: calc((1vh + 1vw) / 2 * 3);
  margin: 30px 80px;
  width: calc((1vh + 1vw) / 2 * 20);
  height: calc((1vh + 1vw) / 2 * 3.5);
  transition: .2s;
  
  &:hover{
    background-color: black;
    border-color: black;
    
    ${Label},
    ${SuperLink}{
      color: #FF008A;
    }
  }
`

const MessageBox = styled(motion.div)`
  height: 50%;
  width: 100%;
  background-image: linear-gradient(#6CD6DD, #9107D6);
  padding: 40px;
  box-sizing: border-box;
  margin-top: 50px;
  overflow: hidden;
`

const Question = styled.p`
  display: block;
  font-size: 45px;
  text-decoration: underline;
  text-decoration-color: #FF008A;
  margin-bottom: 20px;
`

const SingleQuestion = styled.li`
  list-style: none;
  font-size: 40px;

  &:hover{
    
    ${SuperLink}{
      background-color: black;
      color: #FF008A;
    }
  }
  
  &:nth-of-type(2){
    margin: 40px 0 40px 15vw;
  }
  
  &:nth-of-type(3){
    margin-left: -2vw;
  }
`


const Collab = () => {

    const [showAnswers, setShowAnswers] = useState(false);

    const {name} = useContext(AppContext);

    const ShowMeAnswers = () => setShowAnswers(true);

    const transition = {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
    };

    const siteVariants = {
        exit: { opacity: 0, transition },
        enter: { opacity: 1, transition: {delay: 0.2, ...transition }}
    }

    const startVariant = {
        exit: { backgroundImage: "linear-gradient(#DACDE1, #518CCF)", transition},
        enter: { backgroundImage: "linear-gradient(#8E2EBE, #4FA0FF)" , transition}
    }

    const msgVariant = {
        exit: {height: 0, opacity: 0, transition},
        enter: {height: "50%", opacity: 1 , transition}
    }

    return(
        <Wrapper initial="exit" animate="enter" exit="exit" variants={startVariant}>
            <ContentBox variants={siteVariants}>
                <Header color="#F0AD00">
                    bardzo mi mi??o!
                </Header>
                <Text isPrimary={false} color="#FFA800">
                    Ciesz?? si??, ??e chcesz nawi??za?? ze mn?? wsp????prac??, na pewno si??
                    nie zawiedziesz! A wi??c powiedz mi {name}, widzia??*?? moje projekty?
                </Text>

                <PinkButton onClick={ShowMeAnswers}>
                    <Label> TAK! S?? super </Label>
                </PinkButton>
                <PinkButton>
                    <SuperLink to="/projects">Nie, poka?? mi c:</SuperLink>
                </PinkButton>

                {showAnswers && <MessageBox initial="exit" animate="enter" exit="exit" variants={msgVariant}>
                    <Question>
                        fantastycznie! wi??c o co chodzi?
                    </Question>
                    <ul>
                        <SingleQuestion>
                            <SuperLink to="/nicetomeetyou">??? mo??e chc?? Ci?? zatrudni??</SuperLink>
                        </SingleQuestion>
                        <SingleQuestion>
                            <SuperLink to="/contact">??? chc?? zrobi?? wsp??lny projekt</SuperLink>
                        </SingleQuestion>
                        <SingleQuestion>
                            <SuperLink to="/contact">??? aaa d??ugo by pisa??, na mejla wy??l??</SuperLink>
                        </SingleQuestion>
                    </ul>
                </MessageBox>}
            </ContentBox>
      </Wrapper>
    );
}


export default Collab;