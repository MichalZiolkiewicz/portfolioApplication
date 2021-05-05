import React from 'react';
import styled from "styled-components";

import ContentSelector from "./router/ContentSelector";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  background-image: linear-gradient(#D2D2D2, #747474);
  z-index: 0;
  margin: 0;
`

function App() {
  return (
    <Wrapper>
        <ContentSelector/>
    </Wrapper>
  );
};

export default App;
