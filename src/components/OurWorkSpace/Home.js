import styled from "styled-components";
import { Screen } from "./Screen";
import { Outlet } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
export function Home() {
  return (
    <>
      <Container>
        <Outlet />
        <Screen />
      </Container>
    </>
  );
}
