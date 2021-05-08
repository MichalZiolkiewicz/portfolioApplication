import React, {useContext} from "react";
import { Wrapper, ContentBox, AnimatedText, SuperLink, Text, Header, Input, Item} from "../globalStyle/styled";

import {AppContext} from "../context/AppContext";

const Start = () => {

    const {name, handleSetName, addName, showMsg} = useContext(AppContext);

    const transition = {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
    };

    const siteVariants = {
        exit: {x:50, opacity: 0, transition},
        enter: {x: 0, opacity: 1, transition: {delay: 0.2, ...transition }}
    }

    const startVariant = {
        exit: { backgroundImage: "linear-gradient(#D2D2D2, #747474)", transition},
        enter: { backgroundImage: "linear-gradient(#DACDE1, #518CCF)" , transition}
    }

    return(
        <Wrapper initial="exit" animate="enter" exit="exit" variants={startVariant}>
            <ContentBox variants={siteVariants}>
                <Header color="#079992">
                    cześć!
                </Header>
                <Text isPrimary={true} color="000">
                    Ja jestem Michał a Ty?
                    <Input value={name} onChange={handleSetName} onKeyDown={addName}/>
                </Text>
                {showMsg &&
                    <AnimatedText initial="exit" animate="enter" exit="exit" variants={siteVariants}>
                        {name} możesz czuć się tutaj swobodnie, każdy jest tu mile widziany.
                    </AnimatedText>
                }
                <Text isPrimary={false} color="000">
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