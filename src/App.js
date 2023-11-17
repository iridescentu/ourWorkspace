import { OurWorkSpace } from "./components/OurWorkSpace/OurWorkSpace";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  /* 구글 폰트는 html link로 바로 적용 */
  /* @import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap'); */

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
