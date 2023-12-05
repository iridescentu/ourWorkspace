import { Loading } from "./components/OurWorkSpace/Loading";
import { OurWorkSpace } from "./components/OurWorkSpace/OurWorkSpace";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* globalStyle import 지양 */
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
      {/* <Loading /> */}
    </>
  );
}
