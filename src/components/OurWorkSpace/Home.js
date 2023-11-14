import styled from "styled-components";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Screen } from "./Screen";

const Container = styled.div`
  background-color: black;
  width: calc(100vw - 10px);
  height: 100vh;
  background-image: url("https://cdn.discordapp.com/attachments/1172066053451423844/1172067976401403914/dfpwt5g-e7ed244c-8c4e-429c-96ee-1c0f67fcc7d5.gif?ex=655ef85d&is=654c835d&hm=897b92f21cd47aa87e4d4a59f0a3753d475f890fdf85bf8459a046b7a44f9bd9&");
  background-size: cover;
  background-position: center;
`;
export function Home() {
  // NavBar toggleFullScreen Btn 눌렀을 때 FullScreen
  const handle = useFullScreenHandle();
  const [isFullScreen, setIsFullScreen] = useState(false);
  const toggleFullScreen = () => {
    if (isFullScreen) {
      handle.exit();
    } else {
      handle.enter();
    }
    setIsFullScreen(!isFullScreen);
  };
  return (
    <>
      <FullScreen handle={handle}>
        <Container>
          <NavBar toggleFullScreen={toggleFullScreen} />
          <Screen />
        </Container>
      </FullScreen>
    </>
  );
}
