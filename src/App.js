import styled, {createGlobalStyle} from "styled-components";
import Content from "./components/content";
import Title from "./components/title";

export default function App() {
  return (
    <>
    <GlobalStyle />
    <ThisApp>
      <Title />
      <Content />
    </ThisApp>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
  background-color: #F5F5F5;
}
`

const ThisApp = styled.div`
  width: 100vw;
  height: 100vh;
`