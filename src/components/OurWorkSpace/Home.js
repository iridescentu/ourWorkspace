import styled from "styled-components";
import { NavBar } from "./NavBar";
import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Screen } from "./Screen";

const Container = styled.div`
  background-color: black;
  width: calc(100vw - 10px);
  height: 100vh;
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
