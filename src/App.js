// import "./styles.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  margin : 0.5rem;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 2rem;
  background: powderblue;
  border-radius: 1rem;
  transition: 0.5s;

  &:hover {
    background: cornflowerblue;
    color: white;
    transition: 0.5s;
  }
`;

function App() {
  return (
    <>
      <GlobalStyled />
      <Button>Practice!</Button>
      {/* <button id="practice">Practice!</button> */}
    </>
  );
}

export default App;
