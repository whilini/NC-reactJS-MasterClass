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

const Btn = styled.button`
  color: whitesmoke;
  background-color: darkgray;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: paleturquoise;
`;

const App = () => {
  return (
    <div>
      <Father as='header'>
        <Circle bgColor='powderblue' />
        <Box bgColor='teal' />
      </Father>
      <div>
        <Btn>Log in</Btn>
        <Btn as='a' href='/'>
          Log in
        </Btn>

        <div>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default App;
