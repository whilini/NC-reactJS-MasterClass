import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const App = () => {
  return (
    <Father>
      <Circle bgColor='powderblue' />
      <Box bgColor='teal' />
    </Father>
  );
};

export default App;
