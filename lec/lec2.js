import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const rotationAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  transform: rotate(180deg);
  border-radius: 100px;
}
100% {
  transform: rotate(360deg);
  border-radius: 0px;
}
`;

const Emogi = styled.span`
  font-size: 50px;
  &:hover {
    font-size: 100px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: lightskyblue;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: pink;
  }
  ${Emogi}:active {
    opacity: 0;
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Box>
        <Emogi as='a'>💕</Emogi>
      </Box>
      <Emogi as='a'>💞</Emogi>
    </Wrapper>
  );
};

export default App;
