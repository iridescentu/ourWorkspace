import { OurWorkSpace } from "./components/OurWorkSpace/OurWorkSpace";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');
  /* @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap'); */
}
html,body{
  width: 100%;
  height: 100%;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <OurWorkSpace />
    </>
  );
}
