import styled from "styled-components";
import { AboutUs } from "./AboutUs";
import { Main } from "./Main";
import { OurProject } from "./OurProject";
import { Universe } from "./Universe";
import { Music } from "./Music";
import { Setting } from "./Setting";
import { useState } from "react";

const Container = styled.div`
  background-color: beige;
  width: 100%;
  /* NavBar height 50px */
  height: calc(100% - 50px);
  padding: 70px;
  background-image: url("https://cdn.discordapp.com/attachments/1172066053451423844/1172067976401403914/dfpwt5g-e7ed244c-8c4e-429c-96ee-1c0f67fcc7d5.gif?ex=655ef85d&is=654c835d&hm=897b92f21cd47aa87e4d4a59f0a3753d475f890fdf85bf8459a046b7a44f9bd9&");
  background-size: cover;
  background-position: center;
`;

export function Screen() {
  return (
    <>
      <Container>
        <Main />
        {/* Main에서 클릭에 따라 보여지고 안보여지고 */}
        {/* <AboutUs /> */}
        {/* <OurProject /> */}
        <Music />
        <Setting />
      </Container>
    </>
  );
}
