import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
};

export default App;
