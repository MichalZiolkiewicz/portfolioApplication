import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: linear-gradient(#DACDE1, #518CCF);
  height: 100vh;
  width: 100vw;
`
const ContentBox = styled.div`
  padding: 10vh 10vh;
`

const Header = styled.p`
  font-size: calc((1vh + 1vw) / 2 * 5);
  color: #535353;
`

const Text = styled.p<{isPrimary: boolean}>`
  font-size: calc((1vh + 1vw) / 2 * 3);
  margin-top: ${props => (props.isPrimary ? 0 : "50px")};
`

const Input = styled.input`
  font-size: calc((1vh + 1vw) / 2 * 2.8);
  background-color: transparent;
  border: 4px solid black;
  outline: none;
  margin-left: 50px;
  width: 300px;
  padding: 5px 10px ;
`

const SuperLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: inline;
  white-space: nowrap;
  position: relative;
  left: 3vw;
  top: 1vh;
`

const Item = styled.li`
  font-size: calc((1vh + 1vw) / 2 * 2.5);
  list-style: none;
  background-color: white;
  margin-top: 30px;
  width: calc((1vh + 1vw) / 2 * 40);
  height: calc((1vh + 1vw) / 2 * 2.5);
  
  &:hover{
    ${SuperLink} {
      color: #079992;
      background-color: yellow;
    }
  }
`

const Start = () => {

    const [name, setName] = useState("");
    const [showMsg, setShowMsg] = useState(false);

    const handleSetName = (e: React.FormEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const addName = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter'){
            setShowMsg(!showMsg);
        }
    }


    return(
        <Wrapper>
            <ContentBox>
                <Header>
                    cześć!
                </Header>
                <Text isPrimary={true}>
                    Ja jestem Michał a Ty?
                    <Input value={name} onChange={handleSetName} onKeyDown={addName}/>
                </Text>
                {showMsg &&
                    <Text isPrimary={true}>
                        {name} możesz czuć się tutaj swobodnie, każdy jest tu mile widziany.
                    </Text>
                }
                <Text isPrimary={false}>
                    Co Cię tutaj sprowadza?
                </Text>
                <ul>
                    <Item>
                        <SuperLink to="/wannacollab">
                            Jestem zainteresowan* współpracą
                        </SuperLink>
                    </Item>
                    <Item>
                        <SuperLink to="/nicetomeetyou">
                            Chcę Cię poznać
                        </SuperLink>
                    </Item>
                    <Item>
                        <SuperLink to="/imboreeeeed">
                            Nudzi mi się
                        </SuperLink>
                    </Item>
                    <Item>
                        <SuperLink to="/lookingforinspiration">
                            Szukam inspiracji na swoją stronę
                        </SuperLink>
                    </Item>
                </ul>
            </ContentBox>
        </Wrapper>
    )
}

export default Start;